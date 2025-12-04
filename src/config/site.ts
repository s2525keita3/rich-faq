/**
 * サイト全体の設定・外部URL
 * 変更が必要な場合はこのファイルのみ編集
 */

export const SITE_CONFIG = {
  /** サイト名 */
  name: "訪問看護 起業塾 & 経営研究協会",
  
  /** 著作権表示 */
  copyright: {
    year: 2025,
    owner: "じょん",
  },
  
  /** 外部リンク */
  links: {
    /** 無料相談予約URL */
    consultation: "https://timerex.net/s/s2525keita3_0912/470321af",
  },
} as const;

/** 型エクスポート */
export type SiteConfig = typeof SITE_CONFIG;

