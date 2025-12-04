import { CheckCircle2, TrendingUp, Rocket, Sparkles, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

/** 回答セクションヘッダーの設定マップ */
const HEADER_CONFIG: Record<string, { icon: React.ReactNode; color: string }> = {
  結論: { icon: <CheckCircle2 className="h-4 w-4" />, color: "text-emerald-600" },
  根拠: { icon: <TrendingUp className="h-4 w-4" />, color: "text-blue-600" },
  行動: { icon: <Rocket className="h-4 w-4" />, color: "text-gold" },
  補足: { icon: <Sparkles className="h-4 w-4" />, color: "text-purple-600" },
  例え話: { icon: <MessageCircle className="h-4 w-4" />, color: "text-amber-600" },
};

interface FAQAnswerProps {
  answer: string;
}

/**
 * FAQ回答コンテンツの表示
 * Server Component - 静的なテキスト表示のみ
 */
export function FAQAnswer({ answer }: FAQAnswerProps) {
  const paragraphs = answer.split("\n\n");

  return (
    <div className="space-y-3">
      {paragraphs.map((paragraph, idx) => {
        // 【結論】【根拠】などのヘッダーをチェック
        const headerMatch = paragraph.match(/^【(.+?)】([\s\S]*)$/);

        if (headerMatch) {
          const [, header, content] = headerMatch;
          const config = HEADER_CONFIG[header] ?? { icon: null, color: "text-navy" };

          return (
            <div key={idx} className="rounded-lg bg-white/60 p-3 shadow-sm">
              <div className={cn("mb-1 flex items-center gap-2 text-sm font-bold", config.color)}>
                {config.icon}
                <span>【{header}】</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-700 md:text-base">
                {content.trim()}
              </p>
            </div>
          );
        }

        return (
          <p key={idx} className="text-sm leading-relaxed text-slate-700 md:text-base">
            {paragraph}
          </p>
        );
      })}
    </div>
  );
}

