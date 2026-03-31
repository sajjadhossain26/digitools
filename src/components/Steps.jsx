const steps = [
  {
    id: 1,
    title: 'Create an Account',
    text: 'Sign up and unlock access to exclusive digital tools and premium resources.',
    image: '/assets/user.png',
  },
  {
    id: 2,
    title: 'Choose Products',
    text: 'Browse top-rated tools, compare features, and select the best fit for your workflow.',
    image: '/assets/package.png',
  },
  {
    id: 3,
    title: 'Start Creating',
    text: 'Download instantly and start using your products to work faster and smarter.',
    image: '/assets/rocket.png',
  },
];

function Steps() {
  return (
    <section id="steps" className="section-shell py-16 md:py-20">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">Get Started in 3 Steps</h2>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {steps.map((step) => (
          <article key={step.id} className="relative rounded-2xl border border-slate-200 bg-white px-6 pb-7 pt-10 text-center shadow-card">
            <span className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
              {step.id}
            </span>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50">
              <img src={step.image} alt={step.title} className="h-7 w-7 object-contain" />
            </div>
            <h3 className="mt-5 text-lg font-bold text-ink">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Steps;
