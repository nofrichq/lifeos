import {
  activeGoals,
  aiDailyBrief,
  lifeAreas,
  openTasks,
  weeklyProgress,
} from '../data/dashboardMockData';

export function DashboardPage() {
  return (
    <div className="flex w-full flex-col gap-8">
      <section className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/20 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-teal-300">LifeOS</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Your personal operating system.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 md:text-base">
            Manage health, career, finance, projects, goals, tasks, and daily focus from one calm
            dashboard.
          </p>
        </div>

        <div className="rounded-2xl border border-teal-400/20 bg-teal-400/10 px-5 py-4">
          <p className="text-sm text-teal-200">Today&apos;s focus</p>
          <p className="mt-1 text-lg font-semibold text-white">Sprint 1 dashboard shell</p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        {lifeAreas.map((area) => (
          <article
            key={area.name}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
          >
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
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
              Active Goals
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white">What matters now</h2>
          </div>

          <div className="mt-6 space-y-3">
            {activeGoals.map((goal) => (
              <div
                key={goal.title}
                className="flex flex-col gap-2 rounded-xl border border-white/10 bg-slate-950/50 p-4 md:flex-row md:items-center md:justify-between"
              >
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
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
            AI Daily Brief
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Suggested next action</h2>
          <p className="mt-4 text-sm leading-6 text-slate-300">{aiDailyBrief.summary}</p>
          <div className="mt-5 rounded-xl border border-teal-400/20 bg-teal-400/10 p-4 text-sm text-teal-100">
            Next: {aiDailyBrief.suggestedNextAction}
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-400">{aiDailyBrief.riskNote}</p>
        </article>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
            Open Tasks
          </p>
          <div className="mt-5 space-y-3">
            {openTasks.map((task) => (
              <div key={task.title} className="rounded-xl bg-slate-950/50 p-4">
                <p className="font-medium text-white">{task.title}</p>
                <p className="mt-1 text-sm text-slate-400">
                  {task.area} · {task.due} · {task.status}
                </p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
            Weekly Progress
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Foundation is ready</h2>

          <div className="mt-5 grid grid-cols-3 gap-3">
            <div className="rounded-xl bg-slate-950/50 p-4">
              <p className="text-2xl font-semibold text-white">{weeklyProgress.completedTasks}</p>
              <p className="mt-1 text-xs text-slate-400">Tasks done</p>
            </div>
            <div className="rounded-xl bg-slate-950/50 p-4">
              <p className="text-2xl font-semibold text-white">{weeklyProgress.goalsTouched}</p>
              <p className="mt-1 text-xs text-slate-400">Goals touched</p>
            </div>
            <div className="rounded-xl bg-slate-950/50 p-4">
              <p className="text-sm font-semibold text-white">{weeklyProgress.reviewStatus}</p>
              <p className="mt-1 text-xs text-slate-400">Review</p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-300">{weeklyProgress.summary}</p>
        </article>
      </section>
    </div>
  );
}
