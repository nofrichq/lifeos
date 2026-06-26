import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the LifeOS dashboard shell', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: /your personal operating system/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/today's focus/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /what matters now/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /suggested next action/i })).toBeInTheDocument();
    expect(screen.getByText(/weekly progress/i)).toBeInTheDocument();
  });

  it('renders the MVP life areas', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /health/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /career/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /finance/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument();
  });
});
