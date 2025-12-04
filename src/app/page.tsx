import { HeroSection } from "@/components/features/hero";
import { FAQSection } from "@/components/features/faq";
import { StickyCTABar, FloatingCTAButton } from "@/components/features/cta";
import { Footer } from "@/components/layouts";

/**
 * メインページ
 * Server Component - セクションを組み合わせるだけの薄いレイヤー
 */
export default function Home() {
  return (
    <>
      <HeroSection />

      <div id="faq">
        <FAQSection />
      </div>

      <Footer />

      {/* Floating CTAs */}
      <StickyCTABar />
      <FloatingCTAButton />
    </>
  );
}
