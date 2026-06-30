import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Plus, ShoppingBag, X } from 'lucide-react';
import { product } from '../data/product';

type CartDrawerProps = {
  isOpen: boolean;
  count: number;
  onClose: () => void;
  onDecrease: () => void;
  onIncrease: () => void;
  onCheckout: () => void;
};

export function CartDrawer({ isOpen, count, onClose, onDecrease, onIncrease, onCheckout }: CartDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.button
            type="button"
            aria-label="Close cart overlay"
            className="fixed inset-0 z-[60] bg-slate-950/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="fixed bottom-0 right-0 top-0 z-[61] w-[min(420px,100vw)] border-l border-slate-200 bg-white p-5 shadow-2xl dark:border-white/10 dark:bg-slate-950"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-500">Cart</p>
                <h2 className="mt-1 text-2xl font-black text-slate-950 dark:text-white">Giỏ hàng</h2>
              </div>
              <button type="button" onClick={onClose} className="focus-ring grid h-10 w-10 place-items-center rounded-full bg-slate-100 dark:bg-white/10" aria-label="Close cart">
                <X size={18} />
              </button>
            </div>

            {count > 0 ? (
              <div className="mt-8 rounded-[28px] border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
                <div className="flex gap-4">
                  <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-slate-950 text-white dark:bg-white dark:text-slate-950">
                    <ShoppingBag size={24} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-slate-950 dark:text-white">{product.name}</p>
                    <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white p-1 dark:border-white/10 dark:bg-white/10">
                      <button type="button" onClick={onDecrease} className="focus-ring grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-slate-950 transition hover:bg-slate-200 dark:bg-white/10 dark:text-white" aria-label="Giảm số lượng">
                        <Minus size={15} />
                      </button>
                      <span className="min-w-8 text-center text-sm font-black text-slate-950 dark:text-white">{count}</span>
                      <button type="button" onClick={onIncrease} className="focus-ring grid h-8 w-8 place-items-center rounded-full bg-slate-950 text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950" aria-label="Tăng số lượng">
                        <Plus size={15} />
                      </button>
                    </div>
                    <p className="mt-3 text-lg font-black text-slate-950 dark:text-white">${product.price * count}</p>
                  </div>
                </div>
                <button type="button" onClick={onCheckout} className="focus-ring mt-5 w-full rounded-full bg-slate-950 px-5 py-4 text-sm font-bold text-white dark:bg-white dark:text-slate-950">
                  Tiến hành đặt hàng
                </button>
              </div>
            ) : (
              <div className="mt-10 rounded-[28px] border border-dashed border-slate-300 p-8 text-center dark:border-white/15">
                <ShoppingBag className="mx-auto text-slate-400" size={32} />
                <p className="mt-4 font-bold text-slate-950 dark:text-white">Giỏ hàng đang trống</p>
                <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">Nhấn “Thêm vào giỏ” ở Hero để lưu sản phẩm vào localStorage.</p>
              </div>
            )}
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
