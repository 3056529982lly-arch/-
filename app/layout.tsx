import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Amazon Operations Onboarding",
  description: "Training dashboard for Amazon operations onboarding."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <div className="min-h-screen bg-slate-50">
          <Sidebar />
          <div className="min-h-screen lg:pl-72">
            <Header />
            <main className="px-4 py-5 sm:px-6 lg:px-8">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
