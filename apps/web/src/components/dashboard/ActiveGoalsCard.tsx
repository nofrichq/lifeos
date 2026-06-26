import type { ActiveGoal } from '../../types/dashboard';
import { ActiveGoalCard } from './ActiveGoalCard';

type ActiveGoalsCardProps = {
  goals: ActiveGoal[];
};

export function ActiveGoalsCard({ goals }: ActiveGoalsCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
          Active Goals
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-white">What matters now</h2>
      </div>

      <div className="mt-6 space-y-3">
        {goals.map((goal) => (
          <ActiveGoalCard key={goal.title} goal={goal} />
        ))}
      </div>
    </article>
  );
}
