import { Check, Star } from 'lucide-react';

const badgeStyles = {
  purple: 'bg-purple-100 text-brand',
  amber: 'bg-amber-100 text-amber-600',
  green: 'bg-emerald-100 text-emerald-600',
};

function ProductCard({ product, inCart, onBuy }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition hover:-translate-y-1 hover:shadow-cardHover">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F7F7FB] ring-1 ring-slate-100">
          <img src={product.icon} alt={product.name} className="h-6 w-6 object-contain" />
        </div>
        <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${badgeStyles[product.badgeStyle]}`}>
          {product.badge}
        </span>
      </div>

      <h3 className="mt-4 text-base font-bold text-ink">{product.name}</h3>
      <p className="mt-2 min-h-[56px] text-xs leading-5 text-muted">{product.description}</p>

      <div className="mt-4 flex items-end gap-2">
        <span className="text-2xl font-extrabold text-ink">${product.price}</span>
        <span className="mb-0.5 text-xs font-medium text-slate-400">/{product.period}</span>
      </div>

      <div className="mt-3 flex items-center gap-1 text-[11px] text-amber-500">
        <Star className="h-3.5 w-3.5 fill-current" />
        <Star className="h-3.5 w-3.5 fill-current" />
        <Star className="h-3.5 w-3.5 fill-current" />
        <Star className="h-3.5 w-3.5 fill-current" />
        <Star className="h-3.5 w-3.5 fill-current" />
        <span className="ml-1 text-slate-400">Top rated</span>
      </div>

      <ul className="mt-4 space-y-2.5">
        {product.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-xs text-slate-500">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-violet-50 text-brand">
              <Check className="h-3 w-3" />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={() => onBuy(product)}
        className={`mt-5 w-full rounded-full px-4 py-2.5 text-sm font-semibold transition ${inCart ? 'bg-emerald-500 text-white' : 'bg-brand text-white hover:opacity-95'}`}
      >
        {inCart ? 'Added to Cart' : 'Buy Now'}
      </button>
    </article>
  );
}

export default ProductCard;
