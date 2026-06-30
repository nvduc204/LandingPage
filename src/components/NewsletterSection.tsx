import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { submitNewsletter } from '../services/api';

const newsletterSchema = z.object({
  email: z.string().email('Email không hợp lệ.'),
});

type NewsletterForm = z.infer<typeof newsletterSchema>;

type NewsletterSectionProps = {
  onSubmitEvent: (email: string) => void;
};

export function NewsletterSection({ onSubmitEvent }: NewsletterSectionProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsletterForm>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: '' },
  });

  const onSubmit = handleSubmit(async ({ email }) => {
    try {
      await submitNewsletter(email);
      onSubmitEvent(email);
      toast.success('Đã đăng ký nhận tin.');
      reset();
    } catch {
      toast.error('Webhook demo chưa phản hồi. Vui lòng thử lại sau.');
    }
  });

  return (
    <section id="newsletter" className="bg-slate-950 py-24 text-white">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-shell overflow-hidden rounded-[36px] border border-white/10 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,.24),transparent_26%),radial-gradient(circle_at_85%_30%,rgba(168,85,247,.2),transparent_28%),rgba(255,255,255,.05)] p-6 sm:p-10 lg:p-14"
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-300">Newsletter</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Nhận ưu đãi launch và bản cập nhật AI mới nhất.</h2>
          </div>
          <form onSubmit={onSubmit} className="space-y-3">
            <div className="flex flex-col gap-3 rounded-[26px] bg-white p-2 sm:flex-row">
              <input
                type="email"
                placeholder="you@example.com"
                className="min-h-14 flex-1 rounded-[20px] border-0 px-4 text-slate-950 outline-none"
                aria-label="Email"
                {...register('email')}
              />
              <button type="submit" disabled={isSubmitting} className="focus-ring inline-flex min-h-14 items-center justify-center gap-2 rounded-[20px] bg-slate-950 px-6 text-sm font-bold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60">
                {isSubmitting ? 'Đang gửi' : 'Đăng ký'} <Send size={17} />
              </button>
            </div>
            {errors.email ? <p className="text-sm font-semibold text-rose-200">{errors.email.message}</p> : null}
          </form>
        </div>
      </motion.div>
    </section>
  );
}
