import { render, screen } from '@testing-library/react';

import { ActiveGoalsCard } from './ActiveGoalsCard';
import { AiDailyBriefCard } from './AiDailyBriefCard';
import { LifeAreaOverview } from './LifeAreaOverview';
import { OpenTasksCard } from './OpenTasksCard';
import { WeeklyProgressCard } from './WeeklyProgressCard';
import {
  activeGoals,
  aiDailyBrief,
  lifeAreas,
  openTasks,
  weeklyProgress,
} from '../../data/dashboardMockData';

describe('Dashboard components', () => {
  it('renders life area overview cards', () => {
    render(<LifeAreaOverview areas={lifeAreas} />);

    expect(screen.getByRole('heading', { name: /your operating areas/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /health/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /career/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /finance/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument();
  });

  it('renders active goals card', () => {
    render(<ActiveGoalsCard goals={activeGoals} />);

    expect(screen.getByRole('heading', { name: /what matters now/i })).toBeInTheDocument();
    expect(screen.getByText(/build the first usable lifeos dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/prepare a stronger developer portfolio/i)).toBeInTheDocument();
    expect(screen.getByText(/create a weekly health routine/i)).toBeInTheDocument();
  });

  it('renders open tasks card', () => {
    render(<OpenTasksCard tasks={openTasks} />);

    expect(screen.getByText(/open tasks/i)).toBeInTheDocument();
    expect(screen.getByText(/replace vite starter ui/i)).toBeInTheDocument();
    expect(screen.getByText(/create dashboard cards/i)).toBeInTheDocument();
    expect(screen.getByText(/review cv project section/i)).toBeInTheDocument();
  });

  it('renders AI daily brief card', () => {
    render(<AiDailyBriefCard brief={aiDailyBrief} />);

    expect(screen.getByText(/ai daily brief/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /suggested next action/i })).toBeInTheDocument();
    expect(screen.getByText(aiDailyBrief.summary)).toBeInTheDocument();
    expect(screen.getByText(/finance has fewer active items/i)).toBeInTheDocument();
    expect(screen.getByText(aiDailyBrief.riskNote)).toBeInTheDocument();
  });

  it('renders weekly progress card', () => {
    render(<WeeklyProgressCard progress={weeklyProgress} />);

    expect(screen.getByText(/weekly progress/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /foundation is ready/i })).toBeInTheDocument();
    expect(screen.getByText(/tasks done/i)).toBeInTheDocument();
    expect(screen.getByText(/goals touched/i)).toBeInTheDocument();
    expect(screen.getByText(/sprint review pending/i)).toBeInTheDocument();
    expect(screen.getByText(weeklyProgress.summary)).toBeInTheDocument();
  });
});
