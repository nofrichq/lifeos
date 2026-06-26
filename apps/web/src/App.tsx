import { Navigate, Route, Routes } from 'react-router';

import { AppLayout } from './components/layout/AppLayout';
import { DashboardPage } from './pages/DashboardPage';
import { PlaceholderPage } from './pages/PlaceholderPage';

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route
          path="/goals"
          element={
            <PlaceholderPage
              title="Goals"
              description="Track meaningful outcomes across health, career, finance, and projects."
            />
          }
        />
        <Route
          path="/tasks"
          element={
            <PlaceholderPage
              title="Tasks"
              description="Manage concrete actions connected to your life areas and active goals."
            />
          }
        />
        <Route
          path="/reviews"
          element={
            <PlaceholderPage
              title="Reviews"
              description="Run daily and weekly reviews to understand progress, blockers, and next actions."
            />
          }
        />
        <Route
          path="/settings"
          element={
            <PlaceholderPage
              title="Settings"
              description="Configure LifeOS preferences, privacy settings, and future integrations."
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
