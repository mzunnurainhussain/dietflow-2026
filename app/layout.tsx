import "./globals.css";
import { AppShell } from "@/components/AppShell";

export const metadata = {
  title: "DietFlow — Diet Recommendations",
  description: "A modern diet recommendation experience powered by CSV outputs."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="grain min-h-screen bg-mesh">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
