import type { OpenTask } from '../../types/dashboard';
import { OpenTaskCard } from './OpenTaskCard';

type OpenTasksCardProps = {
  tasks: OpenTask[];
};

export function OpenTasksCard({ tasks }: OpenTasksCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">Open Tasks</p>

      <div className="mt-5 space-y-3">
        {tasks.map((task) => (
          <OpenTaskCard key={task.title} task={task} />
        ))}
      </div>
    </article>
  );
}
