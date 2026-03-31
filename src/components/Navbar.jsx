function Navbar({ cartCount, onOpenCart }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="section-shell flex items-center justify-between py-4">
        <a href="#" className="text-lg font-extrabold tracking-tight text-brand">DigiTools</a>

        <nav className="hidden items-center gap-7 text-xs font-semibold text-slate-500 md:flex">
          <a href="#products" className="transition hover:text-ink">Products</a>
          <a href="#steps" className="transition hover:text-ink">How it Works</a>
          <a href="#pricing" className="transition hover:text-ink">Pricing</a>
          <button onClick={onOpenCart} className="transition hover:text-ink">Cart {cartCount ? `(${cartCount})` : ''}</button>
        </nav>

        <button onClick={onOpenCart} className="rounded-full bg-brand px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:opacity-95">
          Get Started
        </button>
      </div>
    </header>
  );
}

export default Navbar;
