function Cart({ cart, onRemove, onCheckout, onBack }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-6 shadow-card md:p-8">
      <h3 className="text-lg font-bold text-ink">Your Cart</h3>

      <div className="mt-5 space-y-4">
        {cart.length === 0 ? (
          <div className="rounded-2xl bg-[#F7F7FB] px-5 py-8 text-center text-sm text-slate-500">
            Your cart is empty. Add premium tools from the products tab.
            <div className="mt-4">
              <button onClick={onBack} className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white">Back to Products</button>
            </div>
          </div>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between gap-4 rounded-xl bg-[#F7F7FB] px-4 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white ring-1 ring-slate-100">
                  <img src={item.icon} alt={item.name} className="h-5 w-5 object-contain" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{item.name}</p>
                  <p className="text-xs text-slate-500">${item.price}</p>
                </div>
              </div>
              <button onClick={() => onRemove(item.id)} className="text-xs font-semibold text-rose-400">Remove</button>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <>
          <div className="mt-6 flex items-center justify-between text-sm">
            <span className="text-slate-400">Total</span>
            <span className="text-2xl font-bold text-ink">${total}</span>
          </div>
          <button onClick={onCheckout} className="mt-4 w-full rounded-full bg-gradient-to-r from-[#6D28F9] to-[#B620F2] px-6 py-3 text-sm font-semibold text-white">
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
