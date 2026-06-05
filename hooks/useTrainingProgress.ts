"use client";

import { useEffect, useMemo } from "react";
import { modules } from "@/data/modules";
import { quizQuestions } from "@/data/quiz";
import { todaysTasks } from "@/data/dashboard";
import { weeklyTasks } from "@/data/tasks";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export type CourseStatus = "未开始" | "学习中" | "已完成";
export type QuizAnswer = "A" | "B" | "C" | "D";

export const TRAINING_STORAGE_KEYS = {
  courseStatus: "amazon-training:course-status",
  taskCompletion: "amazon-training:task-completion",
  todayCompletion: "amazon-training:today-completion",
  quizAnswers: "amazon-training:quiz-answers",
  quizScore: "amazon-training:quiz-score",
  sopCopied: "amazon-training:sop-copied",
  caseCopied: "amazon-training:case-copied"
} as const;

export const taskId = (week: string, title: string) => `${week}::${title}`;
export const todayTaskId = (title: string) => `today::${title}`;

export function useTrainingProgress() {
  const [courseStatus, setCourseStatus, courseLoaded] = useLocalStorage<
    Record<string, CourseStatus>
  >(TRAINING_STORAGE_KEYS.courseStatus, {});
  const [taskCompletion, setTaskCompletion, taskLoaded] = useLocalStorage<
    Record<string, boolean>
  >(TRAINING_STORAGE_KEYS.taskCompletion, {});
  const [todayCompletion, setTodayCompletion, todayLoaded] = useLocalStorage<
    Record<string, boolean>
  >(TRAINING_STORAGE_KEYS.todayCompletion, {});
  const [quizAnswers, setQuizAnswers, quizLoaded] = useLocalStorage<
    Record<string, QuizAnswer>
  >(TRAINING_STORAGE_KEYS.quizAnswers, {});
  const [, setQuizResult, quizResultLoaded] = useLocalStorage<{
    score: number;
    accuracy: number;
    answered: number;
  }>(TRAINING_STORAGE_KEYS.quizScore, { score: 0, accuracy: 0, answered: 0 });
  const [sopCopied, setSopCopied, sopLoaded] = useLocalStorage<Record<string, boolean>>(
    TRAINING_STORAGE_KEYS.sopCopied,
    {}
  );
  const [caseCopied, setCaseCopied, caseLoaded] = useLocalStorage<Record<string, boolean>>(
    TRAINING_STORAGE_KEYS.caseCopied,
    {}
  );

  const totalTasks = weeklyTasks.reduce((sum, week) => sum + week.tasks.length, 0);
  const completedTasks = weeklyTasks.reduce(
    (sum, week) =>
      sum + week.tasks.filter((task) => taskCompletion[taskId(week.week, task.title)]).length,
    0
  );
  const completedTodayTasks = todaysTasks.filter((task) => todayCompletion[todayTaskId(task)]).length;
  const completedCourses = modules.filter((module) => courseStatus[module.title] === "已完成").length;
  const quizScore = quizQuestions.filter(
    (question) => quizAnswers[question.question] === question.answer
  ).length;
  const answeredQuizCount = quizQuestions.filter((question) => quizAnswers[question.question]).length;

  const coursePercent = modules.length ? (completedCourses / modules.length) * 100 : 0;
  const taskPercent = totalTasks ? (completedTasks / totalTasks) * 100 : 0;
  const quizPercent = quizQuestions.length ? (quizScore / quizQuestions.length) * 100 : 0;
  const overallProgress = Math.round((coursePercent + taskPercent + quizPercent) / 3);

  const isLoaded =
    courseLoaded &&
    taskLoaded &&
    todayLoaded &&
    quizLoaded &&
    quizResultLoaded &&
    sopLoaded &&
    caseLoaded;

  useEffect(() => {
    if (!quizLoaded) {
      return;
    }

    setQuizResult({
      score: quizScore,
      accuracy: quizQuestions.length ? Math.round((quizScore / quizQuestions.length) * 100) : 0,
      answered: answeredQuizCount
    });
  }, [answeredQuizCount, quizLoaded, quizScore, setQuizResult]);

  const actions = useMemo(
    () => ({
      setCourse(title: string, status: CourseStatus) {
        setCourseStatus((current) => ({ ...current, [title]: status }));
      },
      toggleTask(week: string, title: string) {
        const id = taskId(week, title);
        setTaskCompletion((current) => ({ ...current, [id]: !current[id] }));
      },
      setTaskDone(week: string, title: string, done: boolean) {
        setTaskCompletion((current) => ({ ...current, [taskId(week, title)]: done }));
      },
      toggleTodayTask(title: string) {
        const id = todayTaskId(title);
        setTodayCompletion((current) => ({ ...current, [id]: !current[id] }));
      },
      answerQuiz(question: string, answer: QuizAnswer) {
        setQuizAnswers((current) => ({ ...current, [question]: answer }));
      },
      resetQuiz() {
        setQuizAnswers({});
      },
      markSopCopied(title: string) {
        setSopCopied((current) => ({ ...current, [title]: true }));
      },
      markCaseCopied(title: string) {
        setCaseCopied((current) => ({ ...current, [title]: true }));
      },
      resetAll() {
        setCourseStatus({});
        setTaskCompletion({});
        setTodayCompletion({});
        setQuizAnswers({});
        setQuizResult({ score: 0, accuracy: 0, answered: 0 });
        setSopCopied({});
        setCaseCopied({});
      }
    }),
    [
      setCaseCopied,
      setCourseStatus,
      setQuizAnswers,
      setQuizResult,
      setSopCopied,
      setTaskCompletion,
      setTodayCompletion
    ]
  );

  return {
    isLoaded,
    courseStatus,
    taskCompletion,
    todayCompletion,
    quizAnswers,
    sopCopied,
    caseCopied,
    completedCourses,
    totalCourses: modules.length,
    completedTasks,
    totalTasks,
    completedTodayTasks,
    totalTodayTasks: todaysTasks.length,
    quizScore,
    answeredQuizCount,
    totalQuizQuestions: quizQuestions.length,
    quizAccuracy: quizQuestions.length ? Math.round((quizScore / quizQuestions.length) * 100) : 0,
    overallProgress,
    actions
  };
}
