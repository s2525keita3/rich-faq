import { CONTENT } from "@/config/content";
import { SITE_CONFIG } from "@/config/site";
import { CalendarIcon } from "@/components/ui/icons";

/**
 * FAQ下部のCTAセクション
 * Server Component - 静的コンテンツ（アニメーションはCSS）
 */
export function FAQCta() {
  const { cta } = CONTENT;

  return (
    <div className="mt-12 rounded-2xl bg-gradient-to-br from-navy to-navy-light p-8 text-center shadow-2xl md:p-10">
      <h3 className="mb-3 text-xl font-bold text-white md:text-2xl">{cta.title}</h3>
      <p className="mb-6 text-sm text-slate-300 md:text-base">
        {cta.subtitle}
        <span className="text-gold">{cta.subtitleHighlight}</span>
        {cta.subtitleSuffix}
      </p>
      <a
        href={SITE_CONFIG.links.consultation}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-shake inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-gold to-gold-light px-12 py-5 text-lg font-bold text-navy shadow-xl transition-all duration-300 hover:shadow-2xl md:text-xl"
      >
        <CalendarIcon className="h-6 w-6" />
        {cta.button}
      </a>

      {/* 特典案内 */}
      <div className="mt-6 rounded-xl border border-gold/30 bg-gold/10 p-4">
        <p className="mb-2 text-sm font-bold text-gold">{cta.bonus.title}</p>
        <p className="text-xs leading-relaxed text-slate-300">
          {cta.bonus.note.split("\n").map((line, i) => (
            <span key={i}>
              {line.includes(cta.bonus.keyword) ? (
                <>
                  {line.split(cta.bonus.keyword)[0]}
                  <span className="font-bold text-white">「{cta.bonus.keyword}」</span>
                  {line.split(cta.bonus.keyword)[1]}
                </>
              ) : (
                line
              )}
              {i === 0 && <br className="sm:hidden" />}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

