import type { OpenTask } from '../../types/dashboard';

type OpenTaskCardProps = {
  task: OpenTask;
};

export function OpenTaskCard({ task }: OpenTaskCardProps) {
  return (
    <div className="rounded-xl bg-slate-950/50 p-4">
      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-medium text-white">{task.title}</p>
          <p className="mt-1 text-sm text-slate-400">
            {task.area} · {task.due} · {task.status}
          </p>
        </div>

        <span className="w-fit rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">
          {task.priority}
        </span>
      </div>
    </div>
  );
}
