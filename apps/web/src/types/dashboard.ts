export type LifeAreaStatus = 'Stable' | 'Needs focus' | 'On track' | 'Active';

export type Priority = 'Low' | 'Medium' | 'High';

export type LifeArea = {
  name: string;
  activeGoals: number;
  openTasks: number;
  status: LifeAreaStatus;
};

export type ActiveGoal = {
  title: string;
  area: string;
  priority: Priority;
  targetDate: string;
  progressNote: string;
};

export type OpenTask = {
  title: string;
  area: string;
  due: string;
  status: string;
  priority: Priority;
};

export type AiDailyBrief = {
  summary: string;
  suggestedNextAction: string;
  neglectedAreaWarning: string;
  riskNote: string;
};

export type WeeklyProgress = {
  completedTasks: number;
  goalsTouched: number;
  reviewStatus: string;
  summary: string;
};
