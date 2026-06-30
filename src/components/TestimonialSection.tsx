import { motion } from 'framer-motion';
import { testimonials } from '../data/product';

export function TestimonialSection() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-900/70">
      <div className="section-shell">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-violet-500">Testimonials</p>
        <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl dark:text-white">Được tin dùng bởi người làm việc cường độ cao.</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5"
            >
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">"{testimonial.quote}"</p>
              <div className="mt-8">
                <p className="font-bold text-slate-950 dark:text-white">{testimonial.name}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
