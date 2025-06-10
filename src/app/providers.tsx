'use client';
import { QueryClientProvider } from '@tanstack/react-query';

import { TaskProvider } from '@context/task-context';
import { getQueryClient } from '@lib/get-query-client';

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <TaskProvider>{children}</TaskProvider>
    </QueryClientProvider>
  );
}
