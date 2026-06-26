import type { WeeklyProgress } from '../../types/dashboard';

type WeeklyProgressCardProps = {
  progress: WeeklyProgress;
};

export function WeeklyProgressCard({ progress }: WeeklyProgressCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
        Weekly Progress
      </p>

      <h2 className="mt-2 text-2xl font-semibold text-white">Foundation is ready</h2>

      <div className="mt-5 grid grid-cols-3 gap-3">
        <div className="rounded-xl bg-slate-950/50 p-4">
          <p className="text-2xl font-semibold text-white">{progress.completedTasks}</p>
          <p className="mt-1 text-xs text-slate-400">Tasks done</p>
        </div>

        <div className="rounded-xl bg-slate-950/50 p-4">
          <p className="text-2xl font-semibold text-white">{progress.goalsTouched}</p>
          <p className="mt-1 text-xs text-slate-400">Goals touched</p>
        </div>

        <div className="rounded-xl bg-slate-950/50 p-4">
          <p className="text-sm font-semibold text-white">{progress.reviewStatus}</p>
          <p className="mt-1 text-xs text-slate-400">Review</p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-300">{progress.summary}</p>
    </article>
  );
}
