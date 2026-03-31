import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    description: 'Perfect for trying the platform and exploring free resources.',
    points: ['Browse free tools', 'Basic downloads', 'Community support', '1 saved item'],
    featured: false,
  },
  {
    name: 'Professional',
    price: '$29',
    description: 'Best for creators and professionals who want premium quality assets.',
    points: ['Unlimited premium tools', 'New weekly releases', 'Priority support', 'Commercial license'],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    description: 'Advanced access for teams that need collaboration and scale.',
    points: ['Team-ready access', 'Shared assets library', 'Dedicated onboarding', 'Advanced permissions'],
    featured: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="section-shell py-16 md:py-20">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">Simple, Transparent Pricing</h2>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`rounded-2xl border p-6 shadow-card ${plan.featured ? 'border-brand bg-gradient-to-b from-[#7C3AED] to-[#A21CAF] text-white' : 'border-slate-200 bg-white text-ink'}`}
          >
            <p className={`text-sm font-semibold ${plan.featured ? 'text-white/80' : 'text-slate-500'}`}>{plan.name}</p>
            <div className="mt-4 flex items-end gap-1">
              <span className="text-4xl font-extrabold">{plan.price}</span>
              <span className={`pb-1 text-sm ${plan.featured ? 'text-white/80' : 'text-slate-400'}`}>/month</span>
            </div>
            <p className={`mt-4 text-sm leading-6 ${plan.featured ? 'text-white/85' : 'text-muted'}`}>{plan.description}</p>
            <ul className="mt-6 space-y-3">
              {plan.points.map((point) => (
                <li key={point} className={`flex items-center gap-2 text-sm ${plan.featured ? 'text-white/90' : 'text-slate-600'}`}>
                  <span className={`flex h-5 w-5 items-center justify-center rounded-full ${plan.featured ? 'bg-white/20' : 'bg-violet-50 text-brand'}`}>
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <button className={`mt-7 w-full rounded-full px-4 py-2.5 text-sm font-semibold ${plan.featured ? 'bg-white text-brand' : 'bg-brand text-white'}`}>
              Get Started
            </button>
          </article>
        ))}
      </div>

      <div className="mt-16 rounded-[0px] bg-gradient-to-r from-[#6D28F9] to-[#B620F2] px-6 py-12 text-center text-white md:px-12">
        <h3 className="text-2xl font-extrabold">Ready To Transform Your Workflow?</h3>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-white/80">
          Join thousands of creators, freelancers, and teams using premium digital tools to work smarter every day.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href="#products" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand">Explore Tools</a>
          <button className="rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white">View Pricing</button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
