import { motion } from 'framer-motion';
import { features } from '../data/product';

export function FeatureSection() {
  return (
    <section id="features" className="bg-white py-24 dark:bg-slate-950">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-500">Features</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl dark:text-white">Mọi insight quan trọng trong một thiết bị cực gọn.</h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: index * 0.06, duration: 0.45 }}
                whileHover={{ y: -8 }}
                className="group rounded-[28px] border border-slate-200 bg-slate-50 p-6 transition hover:border-sky-200 hover:bg-white hover:shadow-2xl hover:shadow-sky-900/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/[0.08]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-white transition group-hover:scale-105 dark:bg-white dark:text-slate-950">
                  <Icon size={22} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-950 dark:text-white">{feature.title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{feature.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
