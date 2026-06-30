import { motion } from 'framer-motion';

type ProductVisualProps = {
  compact?: boolean;
};

export function ProductVisual({ compact = false }: ProductVisualProps) {
  return (
    <div className={`relative mx-auto ${compact ? 'h-64 w-52' : 'h-[420px] w-[300px] sm:h-[520px] sm:w-[360px]'}`}>
      <motion.div
        aria-hidden="true"
        className="absolute inset-8 rounded-full bg-sky-400/20 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.55, 0.85, 0.55] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-1/2 top-0 h-full w-[58%] -translate-x-1/2 rounded-[48px] bg-slate-950 shadow-2xl ring-1 ring-white/20 dark:bg-slate-900"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute -top-10 left-1/2 h-20 w-[54%] -translate-x-1/2 rounded-t-[34px] bg-gradient-to-b from-slate-300 to-slate-500 dark:from-slate-600 dark:to-slate-900" />
        <div className="absolute -bottom-10 left-1/2 h-20 w-[54%] -translate-x-1/2 rounded-b-[34px] bg-gradient-to-t from-slate-300 to-slate-500 dark:from-slate-600 dark:to-slate-900" />
        <div className="absolute -right-3 top-28 h-16 w-3 rounded-r-full bg-slate-400" />
        <div className="absolute inset-4 rounded-[38px] bg-gradient-to-br from-slate-950 via-slate-900 to-black p-5 ring-1 ring-white/10">
          <div className="flex items-center justify-between text-xs font-medium text-slate-400">
            <span>09:41</span>
            <span>AI</span>
          </div>
          <div className="mt-8 grid place-items-center">
            <div className="relative grid h-36 w-36 place-items-center rounded-full bg-gradient-to-br from-sky-400 via-cyan-300 to-violet-400 p-1 shadow-glow">
              <div className="grid h-full w-full place-items-center rounded-full bg-slate-950">
                <span className="text-4xl font-black text-white">87</span>
                <span className="-mt-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-sky-200">Recovery</span>
              </div>
            </div>
          </div>
          <div className="mt-8 space-y-3">
            {['Heart 68 bpm', 'Sleep 7h 42m', 'Stress Low'].map((item) => (
              <div key={item} className="flex items-center justify-between rounded-2xl bg-white/[0.08] px-4 py-3 text-xs font-semibold text-slate-100">
                <span>{item}</span>
                <span className="h-2 w-2 rounded-full bg-emerald-300" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
