type PlaceholderPageProps = {
  title: string;
  description: string;
};

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <p className="text-sm font-medium uppercase tracking-[0.3em] text-teal-300">LifeOS</p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">{title}</h2>

      <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 md:text-base">{description}</p>

      <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/50 p-5 text-sm text-slate-400">
        This page is part of the initial routing shell. Full functionality will be added in later
        sprints.
      </div>
    </section>
  );
}
