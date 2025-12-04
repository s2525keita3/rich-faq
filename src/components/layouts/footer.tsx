import { CONTENT } from "@/config/content";
import { SITE_CONFIG } from "@/config/site";
import { CalendarIcon } from "@/components/ui/icons";

/**
 * フッターコンポーネント
 * Server Component - 静的コンテンツ
 */
export function Footer() {
  const { footer } = CONTENT;
  const { copyright } = SITE_CONFIG;

  return (
    <footer className="bg-navy py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="mb-1 text-lg font-bold text-white">{footer.title}</h3>
            <p className="text-sm text-slate-400">{footer.description}</p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={SITE_CONFIG.links.consultation}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-light px-5 py-2.5 text-sm font-bold text-navy transition-transform hover:scale-105"
            >
              <CalendarIcon className="h-4 w-4" />
              {footer.ctaButton}
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-slate-500">
            © {copyright.year} {copyright.owner}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

