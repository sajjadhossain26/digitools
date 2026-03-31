import { Facebook, Instagram, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-[#0E1630] text-white">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <h3 className="text-xl font-extrabold">DigiTools</h3>
          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
            Premium digital products and creative resources built to help you move faster and create better work.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Product</p>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <a href="#products" className="block hover:text-white">Browse Tools</a>
            <a href="#steps" className="block hover:text-white">How It Works</a>
            <a href="#pricing" className="block hover:text-white">Pricing</a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Company</p>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <a href="#" className="block hover:text-white">About</a>
            <a href="#" className="block hover:text-white">Support</a>
            <a href="#" className="block hover:text-white">Contact</a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Resources</p>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <a href="#" className="block hover:text-white">Documentation</a>
            <a href="#" className="block hover:text-white">Licensing</a>
            <a href="#" className="block hover:text-white">Privacy</a>
          </div>
          <div className="mt-6 flex gap-3 text-slate-300">
            <a href="#" className="rounded-full border border-white/10 p-2 hover:text-white"><Twitter className="h-4 w-4" /></a>
            <a href="#" className="rounded-full border border-white/10 p-2 hover:text-white"><Facebook className="h-4 w-4" /></a>
            <a href="#" className="rounded-full border border-white/10 p-2 hover:text-white"><Instagram className="h-4 w-4" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-500">
        © 2026 DigiTools. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
