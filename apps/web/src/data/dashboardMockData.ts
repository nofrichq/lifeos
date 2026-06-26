import type {
  ActiveGoal,
  AiDailyBrief,
  LifeArea,
  OpenTask,
  WeeklyProgress,
} from '../types/dashboard';

export const lifeAreas: LifeArea[] = [
  { name: 'Health', activeGoals: 2, openTasks: 4, status: 'Stable' },
  { name: 'Career', activeGoals: 3, openTasks: 6, status: 'Needs focus' },
  { name: 'Finance', activeGoals: 1, openTasks: 2, status: 'On track' },
  { name: 'Projects', activeGoals: 2, openTasks: 5, status: 'Active' },
];

export const activeGoals: ActiveGoal[] = [
  {
    title: 'Build the first usable LifeOS dashboard',
    area: 'Projects',
    priority: 'High',
    targetDate: 'Sprint 1',
    progressNote: 'Dashboard shell is in progress.',
  },
  {
    title: 'Prepare a stronger developer portfolio',
    area: 'Career',
    priority: 'High',
    targetDate: 'This month',
    progressNote: 'LifeOS will become the main portfolio project.',
  },
  {
    title: 'Create a weekly health routine',
    area: 'Health',
    priority: 'Medium',
    targetDate: 'This month',
    progressNote: 'Start with simple weekly review tracking.',
  },
];

export const openTasks: OpenTask[] = [
  {
    title: 'Replace Vite starter UI',
    area: 'Projects',
    due: 'Today',
    status: 'Done',
    priority: 'High',
  },
  {
    title: 'Create dashboard cards',
    area: 'Projects',
    due: 'This week',
    status: 'Todo',
    priority: 'High',
  },
  {
    title: 'Review CV project section',
    area: 'Career',
    due: 'This week',
    status: 'Todo',
    priority: 'Medium',
  },
];

export const aiDailyBrief: AiDailyBrief = {
  summary:
    'Career and Projects are the most active areas this week. The product foundation is ready, and the first visible dashboard is now the main priority.',
  suggestedNextAction:
    'Keep the dashboard scope small, finish the visual structure, and avoid backend work until the first usable screen is complete.',
  neglectedAreaWarning:
    'Finance has fewer active items than other areas. Consider adding one simple finance task in a later sprint.',
  riskNote:
    'The main risk is scope creep. Sprint 1 should stay focused on the dashboard experience.',
};

export const weeklyProgress: WeeklyProgress = {
  completedTasks: 8,
  goalsTouched: 4,
  reviewStatus: 'Sprint review pending',
  summary:
    'Sprint 0 created the product, architecture, repository, testing, CI, and privacy foundation. Sprint 1 turns that foundation into the first visible product experience.',
};
