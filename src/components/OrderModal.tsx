import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';
import type { ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { product } from '../data/product';
import { submitOrder } from '../services/api';

const orderSchema = z.object({
  fullName: z.string().min(2, 'Vui lòng nhập họ tên.'),
  phone: z.string().min(9, 'Số điện thoại chưa hợp lệ.'),
  email: z.string().email('Email không hợp lệ.'),
  address: z.string().min(8, 'Vui lòng nhập địa chỉ giao hàng.'),
  quantity: z.coerce.number().min(1, 'Số lượng tối thiểu là 1.').max(10, 'Số lượng tối đa là 10.'),
  note: z.string().optional(),
});

type OrderForm = z.infer<typeof orderSchema>;

type OrderModalProps = {
  isOpen: boolean;
  quantity: number;
  onClose: () => void;
  onSubmitted: (email: string) => void;
};

export function OrderModal({ isOpen, quantity, onClose, onSubmitted }: OrderModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<OrderForm>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      address: '',
      quantity: Math.max(quantity, 1),
      note: '',
    },
  });

  const selectedQuantity = Math.max(Number(watch('quantity')) || quantity || 1, 1);

  useEffect(() => {
    if (isOpen) {
      reset((current) => ({ ...current, quantity: Math.max(quantity, 1) }));
      window.setTimeout(() => setFocus('fullName'), 200);
    }
  }, [isOpen, quantity, reset, setFocus]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      await submitOrder(data);
      onSubmitted(data.email);
      toast.success('Đã gửi thông tin đặt hàng.');
      reset({ fullName: '', phone: '', email: '', address: '', quantity: Math.max(quantity, 1), note: '' });
      onClose();
    } catch {
      toast.error('Chưa gửi được đơn đặt hàng. Vui lòng thử lại.');
    }
  });

  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.button
            type="button"
            aria-label="Close order overlay"
            className="fixed inset-0 z-[70] bg-slate-950/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <div className="fixed inset-0 z-[71] grid place-items-center p-4">
            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              className="max-h-[92vh] w-[min(720px,calc(100vw-32px))] overflow-y-auto rounded-[32px] border border-slate-200 bg-white p-5 shadow-2xl dark:border-white/10 dark:bg-slate-950 sm:p-7"
            >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-500">Preorder</p>
                <h2 className="mt-1 text-3xl font-black text-slate-950 dark:text-white">Thông tin đặt mua</h2>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{product.name} - ${product.price}/sản phẩm</p>
              </div>
              <button type="button" onClick={onClose} className="focus-ring grid h-10 w-10 shrink-0 place-items-center rounded-full bg-slate-100 dark:bg-white/10" aria-label="Close order form">
                <X size={18} />
              </button>
            </div>

            <form onSubmit={onSubmit} className="mt-7 grid gap-4 sm:grid-cols-2">
              <Field label="Họ và tên" error={errors.fullName?.message}>
                <input className="field-input" {...register('fullName')} placeholder="Nguyễn Văn A" />
              </Field>
              <Field label="Số điện thoại" error={errors.phone?.message}>
                <input className="field-input" {...register('phone')} placeholder="0901234567" />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <input type="email" className="field-input" {...register('email')} placeholder="you@example.com" />
              </Field>
              <Field label="Số lượng" error={errors.quantity?.message}>
                <input type="number" min={1} max={10} className="field-input" {...register('quantity')} />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Địa chỉ giao hàng" error={errors.address?.message}>
                  <input className="field-input" {...register('address')} placeholder="Số nhà, phường/xã, quận/huyện, tỉnh/thành" />
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field label="Ghi chú" error={errors.note?.message}>
                  <textarea className="field-input min-h-24 resize-none py-3" {...register('note')} placeholder="Màu dây, thời gian nhận hàng..." />
                </Field>
              </div>
              <div className="sm:col-span-2 flex flex-col gap-3 rounded-[24px] bg-slate-50 p-4 dark:bg-white/5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Tạm tính</p>
                  <p className="text-2xl font-black text-slate-950 dark:text-white">${product.price * selectedQuantity}</p>
                </div>
                <button type="submit" disabled={isSubmitting} className="focus-ring rounded-full bg-slate-950 px-7 py-4 text-sm font-bold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-slate-950">
                  {isSubmitting ? 'Đang gửi...' : 'Gửi đặt hàng'}
                </button>
              </div>
            </form>
            </motion.div>
          </div>
        </>
      ) : null}
    </AnimatePresence>
  );
}

type FieldProps = {
  label: string;
  error?: string;
  children: ReactNode;
};

function Field({ label, error, children }: FieldProps) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{label}</span>
      <div className="mt-2">{children}</div>
      {error ? <span className="mt-1 block text-sm font-semibold text-rose-500">{error}</span> : null}
    </label>
  );
}
