import { motion } from 'framer-motion';
import { ArrowRight, Heart, ShoppingCart } from 'lucide-react';
import { ProductVisual } from './ProductVisual';

type HeroProps = {
  isFavorite: boolean;
  onPreorder: () => void;
  onToggleFavorite: () => void;
  onAddToCart: () => void;
};

export function Hero({ isFavorite, onPreorder, onToggleFavorite, onAddToCart }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-mesh-light pb-20 pt-32 dark:bg-mesh-dark">
      <div className="section-shell grid min-h-[calc(100vh-8rem)] items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-6 inline-flex rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.08] dark:text-slate-200">
            AI-native wearable for daily performance
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.98] text-slate-950 sm:text-7xl lg:text-8xl dark:text-white">
            AI Smart Watch X Pro
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl dark:text-slate-300">
            Đồng hồ thông minh tối giản với trợ lý AI cá nhân, cảm biến sức khỏe chuyên sâu, pin 7 ngày và thiết kế titanium chuẩn flagship.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={onPreorder} className="focus-ring inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-slate-950 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200">
              Đặt trước ngay <ArrowRight size={18} />
            </button>
            <button type="button" onClick={onAddToCart} className="focus-ring inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/75 px-7 py-4 text-sm font-bold text-slate-950 backdrop-blur transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/10 dark:text-white">
              <ShoppingCart size={18} /> Thêm vào giỏ
            </button>
            <button type="button" onClick={onToggleFavorite} className="focus-ring inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/75 px-7 py-4 text-sm font-bold text-slate-950 backdrop-blur transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/10 dark:text-white">
              <Heart size={18} fill={isFavorite ? 'currentColor' : 'none'} /> Yêu thích
            </button>
          </div>
        </motion.div>
        <ProductVisual />
      </div>
    </section>
  );
}
