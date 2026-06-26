const lifeAreas = [
  { name: 'Health', activeGoals: 2, openTasks: 4, status: 'Stable' },
  { name: 'Career', activeGoals: 3, openTasks: 6, status: 'Needs focus' },
  { name: 'Finance', activeGoals: 1, openTasks: 2, status: 'On track' },
  { name: 'Projects', activeGoals: 2, openTasks: 5, status: 'Active' },
];

const activeGoals = [
  {
    title: 'Build the first usable LifeOS dashboard',
    area: 'Projects',
    priority: 'High',
  },
  {
    title: 'Prepare a stronger developer portfolio',
    area: 'Career',
    priority: 'High',
  },
  {
    title: 'Create a weekly health routine',
    area: 'Health',
    priority: 'Medium',
  },
];

const openTasks = [
  { title: 'Replace Vite starter UI', area: 'Projects', due: 'Today' },
  { title: 'Create dashboard cards', area: 'Projects', due: 'This week' },
  { title: 'Review CV project section', area: 'Career', due: 'This week' },
];

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
                  <p className="mt-1 text-sm text-slate-400">{goal.area}</p>
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
          <p className="mt-4 text-sm leading-6 text-slate-300">
            Career and Projects are the most active areas this week. Keep the dashboard scope small,
            finish the visual shell, and avoid adding backend work before the first usable screen is
            ready.
          </p>
          <div className="mt-5 rounded-xl border border-teal-400/20 bg-teal-400/10 p-4 text-sm text-teal-100">
            Next: replace the starter screen with a clean LifeOS dashboard.
          </div>
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
                  {task.area} · {task.due}
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
          <p className="mt-4 text-sm leading-6 text-slate-300">
            Sprint 0 created the product, architecture, repository, testing, CI, and privacy
            foundation. Sprint 1 now turns that foundation into the first visible product
            experience.
          </p>
        </article>
      </section>
    </div>
  );
}
