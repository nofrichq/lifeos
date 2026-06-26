import type { AiDailyBrief } from '../../types/dashboard';

type AiDailyBriefCardProps = {
  brief: AiDailyBrief;
};

export function AiDailyBriefCard({ brief }: AiDailyBriefCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
        AI Daily Brief
      </p>

      <h2 className="mt-2 text-2xl font-semibold text-white">Suggested next action</h2>

      <p className="mt-4 text-sm leading-6 text-slate-300">{brief.summary}</p>

      <div className="mt-5 rounded-xl border border-teal-400/20 bg-teal-400/10 p-4 text-sm text-teal-100">
        Next: {brief.suggestedNextAction}
      </div>

      <div className="mt-4 rounded-xl border border-amber-400/20 bg-amber-400/10 p-4 text-sm text-amber-100">
        {brief.neglectedAreaWarning}
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-400">{brief.riskNote}</p>
    </article>
  );
}
