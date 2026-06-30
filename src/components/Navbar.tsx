import { Menu, Moon, ShoppingBag, Sun, X } from 'lucide-react';
import { useState } from 'react';

type NavbarProps = {
  isDark: boolean;
  cartCount: number;
  onToggleDark: () => void;
  onCartClick: () => void;
};

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Specs', href: '#specs' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
];

export function Navbar({ isDark, cartCount, onToggleDark, onCartClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="glass mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full px-4 shadow-lg shadow-slate-900/5">
        <a href="#home" className="focus-ring flex items-center gap-2 rounded-full font-black text-slate-950 dark:text-white">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-slate-950 text-sm text-white dark:bg-white dark:text-slate-950">X</span>
          <span className="hidden sm:inline">X Pro</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="focus-ring rounded-full text-sm font-semibold text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button type="button" onClick={onToggleDark} className="focus-ring grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-900 transition hover:bg-slate-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/15" aria-label="Toggle dark mode">
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button type="button" onClick={onCartClick} className="focus-ring relative grid h-10 w-10 place-items-center rounded-full bg-slate-950 text-white dark:bg-white dark:text-slate-950" aria-label="Open cart">
            <ShoppingBag size={18} />
            {cartCount > 0 ? <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-sky-400 px-1 text-[10px] font-black text-slate-950">{cartCount}</span> : null}
          </button>
          <button type="button" onClick={() => setIsOpen((value) => !value)} className="focus-ring grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-950 md:hidden dark:bg-white/10 dark:text-white" aria-label="Toggle menu">
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
      {isOpen ? (
        <div className="glass mx-auto mt-3 flex max-w-6xl flex-col rounded-3xl p-3 md:hidden">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
              {item.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}
