import { motion } from 'framer-motion';
import { gallery } from '../data/product';
import { ProductVisual } from './ProductVisual';

export function GallerySection() {
  return (
    <section id="gallery" className="bg-white py-24 dark:bg-slate-950">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-500">Gallery</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl dark:text-white">Tinh giản từ mọi góc nhìn.</h2>
          </div>
          <p className="max-w-md leading-7 text-slate-600 dark:text-slate-300">
            Gallery dùng lazy loading và cấu trúc sẵn cho asset WebP khi thay ảnh production.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {gallery.map((image, index) => (
            <motion.figure
              key={`${image.title}-${index}`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5"
            >
              <div className="grid aspect-[4/5] place-items-center rounded-[24px] bg-gradient-to-br from-slate-100 to-white transition duration-500 group-hover:scale-[1.02] dark:from-slate-900 dark:to-slate-800">
                {index === 0 ? <ProductVisual compact /> : <img src={image.src} alt={image.alt} loading="lazy" className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105" />}
              </div>
              <figcaption className="mt-4 text-lg font-bold text-slate-950 dark:text-white">{image.title}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
