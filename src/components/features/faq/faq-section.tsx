import { CONTENT } from "@/config/content";
import { FAQTabs } from "./faq-tabs.client";
import { FAQCta } from "./faq-cta";
import { FAQHeader } from "./faq-header";

/**
 * FAQセクション全体のレイアウト
 * Server Component - 静的な外枠
 */
export function FAQSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 md:py-24">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-navy/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FAQHeader />
        <FAQTabs />
        <FAQCta />
      </div>
    </section>
  );
}

