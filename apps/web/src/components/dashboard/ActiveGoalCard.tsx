import type { ActiveGoal } from '../../types/dashboard';

type ActiveGoalCardProps = {
  goal: ActiveGoal;
};

export function ActiveGoalCard({ goal }: ActiveGoalCardProps) {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-white/10 bg-slate-950/50 p-4 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="font-medium text-white">{goal.title}</p>
        <p className="mt-1 text-sm text-slate-400">
          {goal.area} · {goal.targetDate}
        </p>
        <p className="mt-2 text-sm text-slate-500">{goal.progressNote}</p>
      </div>

      <span className="w-fit rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">
        {goal.priority}
      </span>
    </div>
  );
}
