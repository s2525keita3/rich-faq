"use client";

import { motion } from "framer-motion";
import { CONTENT } from "@/config/content";

/**
 * FAQセクションのヘッダー
 * Client Component - アニメーションに必要
 */
export function FAQHeader() {
  const { title, subtitle } = CONTENT.faq;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12 text-center"
    >
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-navy md:text-4xl">
        <span className="relative">
          {title.prefix}
          <span className="relative inline-block">
            <span className="relative z-10">{title.highlight}</span>
            <span className="absolute bottom-1 left-0 -z-0 h-3 w-full bg-gold/20" />
          </span>
          {title.suffix}
        </span>
      </h2>
      <p className="mx-auto max-w-2xl text-base text-slate-600 md:text-lg">
        {subtitle.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            {i === 0 && <br className="hidden sm:block" />}
          </span>
        ))}
      </p>
    </motion.div>
  );
}

