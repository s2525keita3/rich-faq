import { CONTENT } from "@/config/content";

/**
 * ヒーローセクションの実績数値表示
 * Server Component - 静的コンテンツ
 */
export function HeroStats() {
  return (
    <div className="mx-auto mb-12 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
      {CONTENT.stats.map((stat, idx) => (
        <div
          key={idx}
          className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
        >
          <div className="text-2xl font-bold text-gold md:text-3xl">
            {stat.value}
            <span className="text-base font-normal text-gold/80">{stat.unit}</span>
          </div>
          <div className="mt-1 text-xs text-slate-400">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

