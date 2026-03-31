function Banner() {
  return (
    <section className="section-shell grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand/75">Best digital products for creators</p>
        <h1 className="mt-4 max-w-xl text-4xl font-extrabold leading-[1.05] tracking-tight text-ink md:text-5xl lg:text-[54px]">
          Supercharge Your Digital Workflow
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-7 text-muted md:text-base">
          Discover powerful digital tools, templates, and creative assets to boost productivity, streamline operations, and grow faster.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#products" className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm">Browse Tools</a>
          <button className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-500">Learn More</button>
        </div>
      </div>

      <div className="rounded-[8px] bg-[#f3f3f4] p-4 shadow-[0_18px_40px_rgba(15,23,42,0.06)] md:p-5">
        <img src="/assets/banner.png" alt="Digital workflow tools" className="h-full w-full rounded-[6px] object-cover" />
      </div>
    </section>
  );
}

export default Banner;
