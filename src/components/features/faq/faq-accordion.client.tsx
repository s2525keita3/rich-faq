"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FAQItem } from "@/lib/types";
import { FAQAnswer } from "./faq-answer";

interface FAQAccordionItemProps {
  item: FAQItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

/**
 * FAQアコーディオンアイテム
 * Client Component - 開閉アニメーションに必要
 */
function FAQAccordionItem({ item, index, isOpen, onToggle }: FAQAccordionItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
      className="mb-4"
    >
      <div
        className={cn(
          "shimmer-effect rounded-xl border bg-white transition-all duration-300",
          isOpen
            ? "border-gold/30 shadow-lg shadow-gold/5"
            : "border-slate-200 hover:border-gold/20 hover:shadow-md"
        )}
      >
        {/* Question Header */}
        <button
          onClick={onToggle}
          className="flex w-full items-start justify-between gap-4 p-5 text-left"
          aria-expanded={isOpen}
        >
          <div className="flex items-start gap-4">
            <span
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors duration-300",
                isOpen ? "bg-gold text-white" : "bg-slate-100 text-navy"
              )}
            >
              Q{index + 1}
            </span>
            <span
              className={cn(
                "pt-0.5 text-base font-semibold leading-relaxed transition-colors duration-300 md:text-lg",
                isOpen ? "text-navy" : "text-navy/80"
              )}
            >
              {item.question}
            </span>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={cn(
              "mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors duration-300",
              isOpen ? "bg-gold/10 text-gold" : "bg-slate-100 text-slate-500"
            )}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </button>

        {/* Answer Content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="border-t border-slate-100 bg-gradient-to-br from-slate-50/50 to-white px-5 pb-5 pt-4">
                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                    A
                  </span>
                  <div className="flex-1 pt-0.5">
                    <FAQAnswer answer={item.answer} />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

interface FAQAccordionListProps {
  items: FAQItem[];
  tabKey: string;
}

/**
 * FAQアコーディオンリスト
 * Client Component - 開閉状態の管理に必要
 */
export function FAQAccordionList({ items, tabKey }: FAQAccordionListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-0">
      {items.map((item, index) => (
        <FAQAccordionItem
          key={`${tabKey}-${index}`}
          item={item}
          index={index}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}

