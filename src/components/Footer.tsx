import { Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white py-10 dark:bg-slate-950">
      <div className="section-shell flex flex-col justify-between gap-6 border-t border-slate-200 pt-8 md:flex-row md:items-center dark:border-white/10">
        <div>
          <p className="text-lg font-black text-slate-950 dark:text-white">AI Smart Watch X Pro</p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">© 2026 X Pro Labs. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-3">
          {[
            { label: 'Twitter', icon: Twitter },
            { label: 'LinkedIn', icon: Linkedin },
            { label: 'GitHub', icon: Github },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <a key={item.label} href="#" className="focus-ring grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-950 hover:text-white dark:bg-white/10 dark:text-slate-200 dark:hover:bg-white dark:hover:text-slate-950" aria-label={item.label}>
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
