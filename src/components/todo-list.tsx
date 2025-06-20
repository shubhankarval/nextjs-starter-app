'use client';

import { Plus } from 'lucide-react';

import { useTaskContext } from '@context/task-context';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Greeting } from '@components/greeting';
import { Tasks } from '@components/tasks';
import { ThemeSwitch } from '@components/theme-switch';

export function TodoList() {
  const { addTask, newTask, setNewTask, filter, setFilter } = useTaskContext();

  return (
    <div className="mx-auto flex w-full max-w-md flex-col p-6">
      <div className="mb-6 flex items-center gap-2">
        <Greeting />
        <ThemeSwitch />
      </div>

      <div className="mb-6 flex space-x-2">
        <Input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') addTask();
          }}
          className="flex-1"
        />
        <Button size="icon" aria-label="Add task" onClick={addTask}>
          <Plus className="h-4 w-4" />
        </Button>
      </div>

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
