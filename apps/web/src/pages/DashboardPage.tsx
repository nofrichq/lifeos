import { ActiveGoalsCard } from '../components/dashboard/ActiveGoalsCard';
import { AiDailyBriefCard } from '../components/dashboard/AiDailyBriefCard';
import { LifeAreaOverview } from '../components/dashboard/LifeAreaOverview';
import { OpenTasksCard } from '../components/dashboard/OpenTasksCard';
import { WeeklyProgressCard } from '../components/dashboard/WeeklyProgressCard';
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

      <LifeAreaOverview areas={lifeAreas} />

      <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <ActiveGoalsCard goals={activeGoals} />

        <AiDailyBriefCard brief={aiDailyBrief} />
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <OpenTasksCard tasks={openTasks} />

        <WeeklyProgressCard progress={weeklyProgress} />
      </section>
    </div>
  );
}
