import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the initial application', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /get started/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /count is 0/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /documentation/i })).toBeInTheDocument();
  });
});