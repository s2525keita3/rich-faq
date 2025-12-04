"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Gift } from "lucide-react";
import { useDismissibleScrollVisibility } from "@/hooks/use-scroll-visibility";
import { CONTENT } from "@/config/content";
import { SITE_CONFIG } from "@/config/site";
import { CalendarIcon } from "@/components/ui/icons";

/**
 * モバイル用スティッキーCTAバー
 * Client Component - スクロール検知・閉じる機能に必要
 */
export function StickyCTABar() {
  const { isVisible, dismiss } = useDismissibleScrollVisibility(300);
  const { stickyCta } = CONTENT;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="pointer-events-none absolute inset-x-0 -top-8 h-8 bg-gradient-to-t from-white/80 to-transparent" />

          <div className="relative border-t border-slate-200 bg-white/95 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] backdrop-blur-lg">
            <button
              onClick={dismiss}
              className="absolute -top-3 right-3 flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-500 shadow-sm transition-colors hover:bg-slate-200"
              aria-label="閉じる"
            >
              <X className="h-3 w-3" />
            </button>

            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-1 items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold/20 to-gold/10">
                  <Gift className="h-5 w-5 text-gold" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-medium text-navy">{stickyCta.title}</p>
                  <p className="truncate text-[10px] text-slate-500">{stickyCta.subtitle}</p>
                </div>
              </div>

              <a
                href={SITE_CONFIG.links.consultation}
                target="_blank"
                rel="noopener noreferrer"
                className="flex shrink-0 items-center gap-1.5 rounded-full bg-gradient-to-r from-gold to-gold-light px-4 py-2.5 text-sm font-bold text-navy shadow-lg transition-transform active:scale-95"
              >
                <CalendarIcon className="h-4 w-4" />
                {stickyCta.button}
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

