import { AnimatePresence, motion } from 'framer-motion';
import { Bot, Send, X } from 'lucide-react';
import { useState } from 'react';

type ChatbotWidgetProps = {
  onOpen: () => void;
};

export function ChatbotWidget({ onOpen }: ChatbotWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((current) => {
      const next = !current;
      if (next) onOpen();
      return next;
    });
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            className="mb-3 w-[min(360px,calc(100vw-40px))] overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-slate-950"
          >
            <div className="flex items-center justify-between border-b border-slate-200 p-4 dark:border-white/10">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-950 text-white dark:bg-white dark:text-slate-950">
                  <Bot size={20} />
                </span>
                <div>
                  <p className="font-bold text-slate-950 dark:text-white">X Pro AI</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Ready for OpenAI/Gemini API</p>
                </div>
              </div>
              <button type="button" onClick={toggleOpen} className="focus-ring grid h-9 w-9 place-items-center rounded-full bg-slate-100 dark:bg-white/10" aria-label="Close chatbot">
                <X size={17} />
              </button>
            </div>
            <div className="space-y-3 p-4">
              <div className="max-w-[86%] rounded-2xl bg-slate-100 px-4 py-3 text-sm leading-6 text-slate-700 dark:bg-white/10 dark:text-slate-200">
                Chào bạn, tôi có thể tư vấn tính năng, cấu hình và gói đặt trước của X Pro.
              </div>
              <div className="ml-auto max-w-[86%] rounded-2xl bg-slate-950 px-4 py-3 text-sm leading-6 text-white dark:bg-white dark:text-slate-950">
                X Pro khác gì smartwatch thường?
              </div>
              <div className="max-w-[86%] rounded-2xl bg-slate-100 px-4 py-3 text-sm leading-6 text-slate-700 dark:bg-white/10 dark:text-slate-200">
                Điểm mạnh là AI health coach chạy theo ngữ cảnh, phân tích sức khỏe và lịch trình để đưa ra gợi ý cá nhân hóa.
              </div>
            </div>
            <div className="flex gap-2 border-t border-slate-200 p-3 dark:border-white/10">
              <input className="min-h-11 flex-1 rounded-2xl bg-slate-100 px-4 text-sm outline-none dark:bg-white/10 dark:text-white" placeholder="Nhập câu hỏi..." />
              <button className="focus-ring grid h-11 w-11 place-items-center rounded-2xl bg-sky-400 text-slate-950" aria-label="Send message">
                <Send size={17} />
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <button type="button" onClick={toggleOpen} className="focus-ring grid h-14 w-14 place-items-center rounded-full bg-slate-950 text-white shadow-2xl shadow-slate-900/30 transition hover:-translate-y-1 dark:bg-white dark:text-slate-950" aria-label="Open chatbot">
        <Bot size={24} />
      </button>
    </div>
  );
}
