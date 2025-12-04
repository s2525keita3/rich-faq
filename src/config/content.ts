/**
 * LP文言の一元管理
 * ライターが編集しやすいように構造化
 */

export const CONTENT = {
  /** ヒーローセクション */
  hero: {
    title: {
      line1: "訪問看護で",
      highlight: "成功する",
      line2: "すべての答えがここに",
    },
    subtitle: "5店舗・年商5億円・スタッフ50名の現役経営者が\nあなたの不安をすべて解消します。",
    cta: {
      primary: "よくある質問を見る",
      secondary: "無料相談を予約する",
    },
  },

  /** 実績数値 */
  stats: [
    { value: "5", unit: "店舗", label: "展開実績" },
    { value: "5", unit: "億円", label: "年商" },
    { value: "50", unit: "名", label: "スタッフ数" },
    { value: "3500", unit: "件/月", label: "訪問件数" },
  ] as const,

  /** FAQセクション */
  faq: {
    title: {
      prefix: "あなたの",
      highlight: "不安",
      suffix: "に、すべて答えます",
    },
    subtitle: "5店舗・年商5億円・スタッフ50名の実績をベースに、\nあなたの疑問を解消します。",
    tabs: {
      school: {
        label: "起業塾",
        description: "（これから開業）",
      },
      association: {
        label: "協会会員",
        description: "（運営・採用）",
      },
    },
  },

  /** CTAセクション */
  cta: {
    title: "まずは無料相談から始めませんか？",
    subtitle: "あなたの状況に合わせて、",
    subtitleHighlight: "最適な一歩",
    subtitleSuffix: "をご提案します。",
    button: "無料相談を予約する",
    bonus: {
      title: "🎁 予約特典：開業ロードマップをプレゼント！",
      note: "※ 予約フォームの備考欄に「ロードマップ希望」と\nご記入ください。記載がない場合はお渡しできません。",
      keyword: "ロードマップ希望",
    },
  },

  /** フッター */
  footer: {
    title: "訪問看護 起業塾 & 経営研究協会",
    description: "あなたの訪問看護ビジネスの成功をサポートします",
    ctaButton: "無料相談",
  },

  /** スティッキーCTA（モバイル） */
  stickyCta: {
    title: "まずは無料相談から",
    subtitle: "あなたに最適な一歩をご提案",
    button: "予約する",
  },

  /** フローティングCTA（デスクトップ） */
  floatingCta: {
    button: "無料相談",
    tooltip: "特典：開業ロードマップ",
  },
} as const;

/** 型エクスポート */
export type Content = typeof CONTENT;
export type StatItem = (typeof CONTENT.stats)[number];

