import type { LifeArea } from '../../types/dashboard';

type LifeAreaCardProps = {
  area: LifeArea;
};

export function LifeAreaCard({ area }: LifeAreaCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{area.name}</h3>
          <p className="mt-1 text-sm text-slate-400">{area.status}</p>
        </div>

        <span className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-200">
          MVP
        </span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
        <div>
          <p className="text-2xl font-semibold text-white">{area.activeGoals}</p>
          <p className="text-slate-400">Goals</p>
        </div>

        <div>
          <p className="text-2xl font-semibold text-white">{area.openTasks}</p>
          <p className="text-slate-400">Tasks</p>
        </div>
      </div>
    </article>
  );
}
