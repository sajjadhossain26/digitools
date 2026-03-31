import { useMemo, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import Products from './components/Products';
import Cart from './components/Cart';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import products from './data/products';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [view, setView] = useState('products');
  const [cart, setCart] = useState([]);
  const cartIds = useMemo(() => new Set(cart.map((item) => item.id)), [cart]);

  const handleBuy = (product) => {
    if (cartIds.has(product.id)) {
      toast.info(`${product.name} is already in your cart.`);
      setView('cart');
      return;
    }
    setCart((prev) => [...prev, product]);
    toast.success(`${product.name} added to cart.`);
  };

  const handleRemove = (id) => {
    const product = cart.find((item) => item.id === id);
    setCart((prev) => prev.filter((item) => item.id !== id));
    toast.error(`${product?.name ?? 'Product'} removed from cart.`);
  };

  const handleCheckout = () => {
    if (!cart.length) {
      toast.info('Your cart is empty.');
      return;
    }
    setCart([]);
    toast.success('Checkout completed successfully.');
    setView('products');
  };

  return (
    <div data-theme="digitheme" className="min-h-screen bg-page text-ink">
      <Navbar cartCount={cart.length} onOpenCart={() => setView('cart')} />
      <main>
        <Banner />
        <Stats />

        <section id="products" className="section-shell py-16 md:py-20">
          <div className="text-center">
            <p className="text-sm font-semibold text-brand/80">Our Store</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">Premium Digital Tools</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted md:text-base">
              Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
            </p>
          </div>

          <div className="mt-7 flex justify-center">
            <div className="inline-flex rounded-full bg-white p-1 shadow-toggle ring-1 ring-slate-200">
              <button
                onClick={() => setView('products')}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${view === 'products' ? 'bg-brand text-white shadow-sm' : 'text-slate-500'}`}
              >
                Products
              </button>
              <button
                onClick={() => setView('cart')}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${view === 'cart' ? 'bg-brand text-white shadow-sm' : 'text-slate-500'}`}
              >
                Cart ({cart.length})
              </button>
            </div>
          </div>

          <div className="mt-10">
            {view === 'products' ? (
              <Products products={products} cart={cart} onBuy={handleBuy} />
            ) : (
              <Cart cart={cart} onRemove={handleRemove} onCheckout={handleCheckout} onBack={() => setView('products')} />
            )}
          </div>
        </section>

        <Steps />
        <Pricing />
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={2200} theme="colored" />
    </div>
  );
}

export default App;
