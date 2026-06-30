import { motion } from 'framer-motion';
import { specifications } from '../data/product';

export function SpecificationSection() {
  return (
    <section id="specs" className="bg-slate-50 py-24 dark:bg-slate-900/70">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-violet-500">Specifications</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl dark:text-white">Flagship hardware cho AI luôn bật.</h2>
            <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
              Tối ưu từ màn hình, cảm biến đến kết nối để X Pro xử lý nhanh, bền pin và luôn riêng tư.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass overflow-hidden rounded-[32px] p-2"
          >
            {specifications.map((spec) => (
              <div key={spec.label} className="grid gap-2 rounded-[24px] px-5 py-5 sm:grid-cols-[180px_1fr] sm:items-center">
                <dt className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">{spec.label}</dt>
                <dd className="text-lg font-semibold text-slate-950 dark:text-white">{spec.value}</dd>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
