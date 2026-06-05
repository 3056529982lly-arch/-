"use client";

import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";

type LocalStorageChangeEvent<T> = CustomEvent<{ key: string; value: T }>;

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>, boolean] {
  const [value, setValue] = useState<T>(initialValue);
  const [isLoaded, setIsLoaded] = useState(false);
  const lastSerializedValue = useRef<string | null>(null);
  const receivedExternalUpdate = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      setIsLoaded(true);
      return;
    }

    try {
      const storedValue = window.localStorage.getItem(key);
      if (storedValue !== null) {
        lastSerializedValue.current = storedValue;
        setValue(JSON.parse(storedValue) as T);
      }
    } catch {
      setValue(initialValue);
    } finally {
      setIsLoaded(true);
    }
  }, [key]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    function handleStorage(event: StorageEvent) {
      if (event.key !== key || event.newValue === null) {
        return;
      }

      try {
        lastSerializedValue.current = event.newValue;
        receivedExternalUpdate.current = true;
        setValue(JSON.parse(event.newValue) as T);
      } catch {
        receivedExternalUpdate.current = false;
      }
    }

    function handleLocalStorageChange(event: Event) {
      const customEvent = event as LocalStorageChangeEvent<T>;
      if (customEvent.detail?.key === key) {
        lastSerializedValue.current = JSON.stringify(customEvent.detail.value);
        receivedExternalUpdate.current = true;
        setValue(customEvent.detail.value);
      }
    }

    window.addEventListener("storage", handleStorage);
    window.addEventListener("amazon-training-storage", handleLocalStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("amazon-training-storage", handleLocalStorageChange);
    };
  }, [key]);

  useEffect(() => {
    if (!isLoaded || typeof window === "undefined") {
      return;
    }

    const serializedValue = JSON.stringify(value);

    if (receivedExternalUpdate.current) {
      receivedExternalUpdate.current = false;
      lastSerializedValue.current = serializedValue;
      return;
    }

    if (lastSerializedValue.current === serializedValue) {
      return;
    }

    lastSerializedValue.current = serializedValue;
    window.localStorage.setItem(key, serializedValue);

    window.setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent("amazon-training-storage", {
          detail: { key, value }
        })
      );
    }, 0);
  }, [isLoaded, key, value]);

  const setStoredValue: Dispatch<SetStateAction<T>> = useCallback(
    (nextValue) => {
      setValue((currentValue) => {
        return typeof nextValue === "function"
          ? (nextValue as (value: T) => T)(currentValue)
          : nextValue;
      });
    },
    []
  );

  return [value, setStoredValue, isLoaded];
}
