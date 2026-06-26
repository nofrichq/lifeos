import type { LifeArea } from '../../types/dashboard';
import { LifeAreaCard } from './LifeAreaCard';

type LifeAreaOverviewProps = {
  areas: LifeArea[];
};

export function LifeAreaOverview({ areas }: LifeAreaOverviewProps) {
  return (
    <section aria-labelledby="life-area-overview-title">
      <div className="mb-4">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">Life Areas</p>
        <h2 id="life-area-overview-title" className="mt-2 text-2xl font-semibold text-white">
          Your operating areas
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {areas.map((area) => (
          <LifeAreaCard key={area.name} area={area} />
        ))}
      </div>
    </section>
  );
}
