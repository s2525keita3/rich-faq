"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift } from "lucide-react";
import { useScrollVisibility } from "@/hooks/use-scroll-visibility";
import { CONTENT } from "@/config/content";
import { SITE_CONFIG } from "@/config/site";
import { CalendarIcon } from "@/components/ui/icons";

/**
 * デスクトップ用フローティングCTAボタン
 * Client Component - スクロール検知・ホバー状態に必要
 */
export function FloatingCTAButton() {
  const isVisible = useScrollVisibility(500);
  const [isHovered, setIsHovered] = useState(false);
  const { floatingCta } = CONTENT;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="fixed bottom-6 right-6 z-50 hidden md:block"
        >
          <motion.a
            href={SITE_CONFIG.links.consultation}
            target="_blank"
            rel="noopener noreferrer"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="group relative flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-light py-4 pl-5 pr-6 font-bold text-navy shadow-xl transition-shadow hover:shadow-2xl"
          >
            <motion.span
              animate={{
                scale: isHovered ? [1, 1.2, 1] : 1,
                opacity: isHovered ? [0.5, 0, 0.5] : 0.5,
              }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="absolute inset-0 rounded-full bg-gold"
            />

            <CalendarIcon className="relative h-5 w-5" />
            <span className="relative">{floatingCta.button}</span>

            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
              className="absolute right-full mr-3 whitespace-nowrap rounded-lg bg-navy px-3 py-2 text-sm text-white shadow-lg"
            >
              <span className="flex items-center gap-1.5">
                <Gift className="h-4 w-4 text-gold" />
                {floatingCta.tooltip}
              </span>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 border-4 border-transparent border-l-navy" />
            </motion.div>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

