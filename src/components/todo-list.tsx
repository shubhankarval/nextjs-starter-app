'use client';

import { Plus } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useTaskContext } from '@context/task-context';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@components/ui/form';
import { Greeting } from '@components/greeting';
import { Tasks } from '@components/tasks';

const formSchema = z.object({
  taskName: z.string().min(2, {
    message: 'Task name must be at least 2 characters.',
  }),
});

export function TodoList() {
  const { addTask, filter, setFilter } = useTaskContext();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      taskName: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    addTask(values.taskName);
    form.reset();
  }

  return (
    <div className="mx-auto flex w-full max-w-md flex-col p-6">
      <div className="mb-6 flex items-center gap-2">
        <Greeting />
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mb-6 flex space-x-2"
        >
          <FormField
            control={form.control}
            name="taskName"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Add a new task..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button size="icon" aria-label="Add task" type="submit">
            <Plus className="h-4 w-4" />
          </Button>
        </form>
      </Form>

      <div className="mb-4 flex space-x-2">
        <Button
          variant={filter === 'all' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setFilter('all')}
          className="flex-1"
        >
          All
        </Button>
        <Button
          variant={filter === 'active' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setFilter('active')}
          className="flex-1"
        >
          Active
        </Button>
        <Button
          variant={filter === 'done' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setFilter('done')}
          className="flex-1"
        >
          Done
        </Button>
      </div>
      <Tasks />
    </div>
  );
}
