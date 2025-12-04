import { CONTENT } from "@/config/content";
import { SITE_CONFIG } from "@/config/site";
import { CalendarIcon, ArrowDownIcon } from "@/components/ui/icons";
import { HeroStats } from "./hero-stats";

/**
 * ヒーローセクション
 * Server Component - 静的コンテンツ中心
 */
export function HeroSection() {
  const { hero } = CONTENT;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-light to-navy pb-20 pt-32">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(212,175,55,0.08)_0%,transparent_50%)]" />
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        {/* Main Title */}
        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
          <span className="block">{hero.title.line1}</span>
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
              {hero.title.highlight}
            </span>
            <span className="absolute -bottom-2 left-0 h-3 w-full bg-gold/20 blur-sm" />
          </span>
          <span className="block">{hero.title.line2}</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
          {hero.subtitle.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i === 0 && <br className="hidden sm:block" />}
            </span>
          ))}
        </p>

        {/* Stats */}
        <HeroStats />

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#faq"
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-light px-8 py-4 text-base font-bold text-navy shadow-xl shadow-gold/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gold/30"
          >
            <span>{hero.cta.primary}</span>
            <ArrowDownIcon className="transition-transform group-hover:translate-y-1" />
          </a>
          <a
            href={SITE_CONFIG.links.consultation}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-shake inline-flex items-center gap-3 rounded-full border-2 border-gold/50 bg-gold/10 px-10 py-5 text-lg font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-gold hover:bg-gold/20"
          >
            <CalendarIcon className="h-6 w-6 text-gold" />
            {hero.cta.secondary}
          </a>
        </div>
      </div>
    </section>
  );
}

