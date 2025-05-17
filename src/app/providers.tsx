'use client';

import { ThemeProvider } from 'next-themes';
import { TaskProvider } from '@context/task-context';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TaskProvider>{children}</TaskProvider>
    </ThemeProvider>
  );
}
