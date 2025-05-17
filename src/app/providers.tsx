'use client';

import { TaskProvider } from '@context/task-context';

export function Providers({ children }: { children: React.ReactNode }) {
  return <TaskProvider>{children}</TaskProvider>;
}
