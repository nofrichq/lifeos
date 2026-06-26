import type { ReactNode } from 'react';
import { NavLink } from 'react-router';

type AppLayoutProps = {
  children: ReactNode;
};

const navigationItems = [
  { label: 'Dashboard', to: '/' },
  { label: 'Goals', to: '/goals' },
  { label: 'Tasks', to: '/tasks' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Settings', to: '/settings' },
];

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl">
        <aside className="hidden w-64 border-r border-white/10 px-5 py-6 lg:block">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-teal-300">LifeOS</p>
            <p className="mt-2 text-xs text-slate-500">Personal operating system</p>
          </div>

          <nav className="mt-10 space-y-2" aria-label="Main navigation">
            {navigationItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  [
                    'block rounded-xl px-3 py-2 text-sm transition',
                    isActive
                      ? 'bg-teal-400/10 text-teal-100'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="border-b border-white/10 px-6 py-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Sprint 1</p>
                <h1 className="mt-1 text-lg font-semibold text-white">LifeOS Dashboard</h1>
              </div>

              <div className="rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-2 text-sm text-teal-100">
                MVP Mode
              </div>
            </div>
          </header>

          <main className="flex-1 px-6 py-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
