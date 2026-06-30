import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { faqs } from '../data/product';

export function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="faq" className="bg-white py-24 dark:bg-slate-950">
      <div className="section-shell max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-500">FAQ</p>
        <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl dark:text-white">Câu hỏi thường gặp.</h2>
        <div className="mt-10 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div key={faq.question} className="rounded-[24px] border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5">
                <button type="button" onClick={() => setActiveIndex(isOpen ? -1 : index)} className="focus-ring flex w-full items-center justify-between gap-5 rounded-[24px] px-5 py-5 text-left text-lg font-bold text-slate-950 dark:text-white">
                  {faq.question}
                  <ChevronDown className={`shrink-0 transition ${isOpen ? 'rotate-180' : ''}`} size={20} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <p className="px-5 pb-5 leading-8 text-slate-600 dark:text-slate-300">{faq.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
