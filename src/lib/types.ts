/**
 * 共通型定義
 */

/** FAQアイテムの型 */
export interface FAQItem {
  question: string;
  answer: string;
}

/** FAQデータ全体の型 */
export interface FAQData {
  school: FAQItem[];
  association: FAQItem[];
}

/** FAQタブのキー */
export type FAQTabKey = keyof FAQData;

/** 回答セクションヘッダーの設定 */
export interface AnswerHeaderConfig {
  icon: React.ReactNode;
  color: string;
}

/** 統計アイテムの型 */
export interface StatItem {
  value: string;
  unit: string;
  label: string;
}

