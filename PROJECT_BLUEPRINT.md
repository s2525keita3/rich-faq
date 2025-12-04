# PROJECT BLUEPRINT
## 訪問看護 LP一体型FAQセクション - 設計思想書

> このドキュメントは「なぜこのコードが存在するのか」を言語化し、  
> 抽象的なビジネス課題から具体的な技術実装への**思考の軌跡**を記録したものです。

---

## I. Business Context（ビジネス文脈）

### 1.1 クライアントプロファイル

| 項目 | 詳細 |
|------|------|
| **事業** | 訪問看護ステーション経営（5店舗、年商5億円、スタッフ50名） |
| **権威性** | SNS総フォロワー11万人、業界最大級のインフルエンサー |
| **商品** | ① 訪問看護起業塾（80万円+税）② 経営研究協会（月額1万円+税） |
| **哲学** | 「精度＞情緒」「論理性＞思い込み」結論ファースト |

### 1.2 真の目的（The Real Goal）

表面的には「FAQセクションを作る」だが、本質的な目的は：

```
「年商5億円の実績」という最強の武器を使い、
高額商品（80万円の起業塾）とサブスク（月1万円の協会）への
"心理的ハードル"を最小化し、CVを最大化する
```

### 1.3 解決すべき課題（Pain Points）

| 課題 | ユーザーの心理 | 影響 |
|------|--------------|------|
| **高額への恐怖** | 「80万円を払って失敗したらどうしよう」 | 起業塾への申込躊躇 |
| **自己効力感の欠如** | 「未経験の自分にできるわけない」 | そもそも問い合わせしない |
| **情報過多による混乱** | 「起業したい人と経営者、どっち向けの情報？」 | 離脱 |
| **信頼性への疑念** | 「また怪しい情報商材では？」 | ページ滞在時間の短縮 |

---

## II. Abstraction to Concrete: The Logic Trace
## （抽象→具体 変換プロセス）

> この章では、各機能が「なぜその形で実装されているのか」を  
> 【抽象:課題】→【翻訳:戦略】→【具体:実装】の3段階で解説します。

---

### Case 1: デュアルタブインターフェース

#### 【抽象:課題】
ターゲットユーザーが2種類存在する：
- **A群**：これから開業したい人（起業塾ターゲット）
- **B群**：すでに経営している人（協会ターゲット）

両者の悩みは根本的に異なる。A群は「できるかどうか」、B群は「もっと良くするには」。
混在した情報は**ノイズ**となり、「自分には関係ない」と離脱を招く。

#### 【翻訳:戦略】
心理学の「自分事化」理論を適用する。  
人は「自分のための情報」と認識した瞬間、注意力が300%向上する。

したがって：
1. 最初にユーザーに「自分はどちらか」を選択させる
2. 選択後は、完全に切り分けられた情報のみを表示する
3. 切り替え時のアニメーションで「別世界に入った」感覚を演出する

#### 【具体:実装】

```typescript
// src/components/features/faq/faq-tabs.client.tsx
const [activeTab, setActiveTab] = useState<FAQTabKey>("school");

// タブ切り替え時のアニメーション（横スライド）
<motion.div
  key="school"
  initial={{ opacity: 0, x: -20 }}  // 左から入る
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: 20 }}      // 右に抜ける
  transition={{ duration: 0.3 }}
>
```

**なぜ横スライドか？**  
縦スライドは「続きを読む」印象を与える。横スライドは「別のページに移動した」印象を与え、情報の独立性を強調する。

---

### Case 2: 結論ファーストの回答構造

#### 【抽象:課題】
ユーザーは「答え」を求めている。長い前置きは離脱を招く。  
しかし、結論だけでは納得感が生まれず、行動に至らない。

#### 【翻訳:戦略】
クライアントの哲学「精度＞情緒」「結論ファースト」をUIに反映する。

PREP法を応用：
1. **結論（Point）**: まず答えを提示（安心感）
2. **根拠（Reason）**: なぜそう言えるのか（納得感）
3. **行動（Action）/補足**: 次に何をすべきか（CV誘導）

#### 【具体:実装】

```typescript
// src/components/features/faq/faq-answer.tsx
const HEADER_CONFIG = {
  結論: { icon: <CheckCircle2 />, color: "text-emerald-600" },  // 緑=安心
  根拠: { icon: <TrendingUp />, color: "text-blue-600" },       // 青=論理
  行動: { icon: <Rocket />, color: "text-gold" },               // 金=行動促進
  補足: { icon: <Sparkles />, color: "text-purple-600" },       // 紫=付加価値
};
```

**なぜアイコン付きか？**  
スキャンリーディング（斜め読み）するユーザーに対し、視覚的なアンカーポイントを提供する。「結論だけ読みたい」ユーザーも迷わず目的の情報に到達できる。

---

### Case 3: Shimmerエフェクト vs Scale-up

#### 【抽象:課題】
「怪しい情報商材」に見られたくない。  
派手すぎるアニメーションは不信感を、地味すぎるデザインは印象に残らない。

#### 【翻訳:戦略】
医療・介護業界の「堅実さ」と、成功者の「権威性」を両立させる。

- `scale-105`（拡大）は「押し売り感」を生む
- 光沢が走る`shimmer`は「高級時計の輝き」を想起させる

#### 【具体:実装】

```css
/* src/app/globals.css */
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.shimmer-effect::before {
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(212, 175, 55, 0.08) 25%,   /* ゴールドの微光 */
    rgba(212, 175, 55, 0.15) 50%,
    rgba(212, 175, 55, 0.08) 75%,
    transparent 100%
  );
}
```

**なぜゴールドか？**  
- 白(#ffffff) = 清潔感、医療の信頼
- ネイビー(#0f172a) = 堅実さ、プロフェッショナル
- ゴールド(#d4af37) = 成功、年商5億の権威性

この3色の組み合わせは「成功した医療経営者」のイメージを構築する。

---

### Case 4: 間欠シェイク（プルプル）アニメーション

#### 【抽象:課題】
CTAボタンは目立たせたいが、常に動いていると「ウザい」と感じられる。

#### 【翻訳:戦略】
人間の注意力は「変化」に反応する。  
常時動作は「変化がない」状態と同義になり、やがて無視される。

解決策：**間欠的な動作**  
5秒に1回だけ動くことで、ユーザーの無意識に働きかける。

#### 【具体:実装】

```css
/* 5秒サイクルの最後10%だけ動く */
@keyframes shake {
  0%, 90%, 100% { transform: translateX(0); }
  92% { transform: translateX(-4px) rotate(-1deg); }
  94% { transform: translateX(4px) rotate(1deg); }
  96% { transform: translateX(-4px) rotate(-1deg); }
  98% { transform: translateX(4px) rotate(1deg); }
}

.cta-shake {
  animation: shake 5s ease-in-out infinite;
}

/* ホバー時は停止（意図的な操作を邪魔しない） */
.cta-shake:hover {
  animation: none;
  transform: scale(1.05);
}
```

---

### Case 5: スクロール連動CTA

#### 【抽象:課題】
モバイルユーザーは、FAQを読み終えた後にページ最上部のCTAまで戻らない。

#### 【翻訳:戦略】
「思い立った瞬間に行動できる」環境を整える。  
ただし、最初から表示するとコンテンツ閲覧の邪魔になる。

解決策：スクロール300px以降に出現、閉じるボタンで非表示可能。

#### 【具体:実装】

```typescript
// src/hooks/use-scroll-visibility.ts
export function useDismissibleScrollVisibility(threshold: number) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > threshold && !isDismissed) {
        setIsVisible(true);
      }
    };
    // ...
  }, [threshold, isDismissed]);

  return { isVisible, dismiss };
}
```

**なぜカスタムフックか？**  
同じロジックが `StickyCTABar`（モバイル）と `FloatingCTAButton`（デスクトップ）で必要。DRY原則に従い、共通化することで保守性を向上。

---

### Case 6: 特典の「条件強調」デザイン

#### 【抽象:課題】
「特典をあげます」だけでは、ユーザーは行動しない。  
また、条件を見落として「もらえなかった」とクレームになるリスク。

#### 【翻訳:戦略】
行動経済学の「損失回避」を活用。  
「もらえる」より「もらえなくなる」方が強い動機付けになる。

#### 【具体:実装】

```tsx
// 条件を目立たせるデザイン
<div className="rounded-xl border border-gold/30 bg-gold/10 p-4">
  <p className="text-sm font-bold text-gold">
    🎁 予約特典：開業ロードマップをプレゼント！
  </p>
  <p className="text-xs text-slate-300">
    ※ 予約フォームの備考欄に
    <span className="font-bold text-white">「ロードマップ希望」</span>
    とご記入ください。
    <strong>記載がない場合はお渡しできません。</strong>
  </p>
</div>
```

**なぜ警告調か？**  
「書かないともらえない」という明確な条件提示により：
1. ユーザーは確実に条件を認識する
2. 実際に「ロードマップ希望」と書く確率が上がる
3. 書いた人は「行動した」という小さなコミットメントを経験し、その後の成約率も上がる

---

## III. Future Scalability（拡張性の設計）

### 3.1 CMS統合時のデータ構造

現在の`faq-data.ts`は静的だが、将来的にHeadless CMS（Contentful, microCMS等）に移行可能な構造で設計済み。

```typescript
// 現在の構造（そのままAPIレスポンスに置換可能）
interface FAQItem {
  question: string;
  answer: string;  // Markdown対応も容易
}

// 将来の拡張例
interface FAQItemExtended extends FAQItem {
  id: string;
  category: "money" | "fear" | "comparison";
  publishedAt: Date;
  sortOrder: number;
}
```

### 3.2 A/Bテスト対応

`config/content.ts`に文言を集約しているため、A/Bテストツール（Optimizely等）との連携が容易。

```typescript
// 将来の実装例
const CONTENT = {
  cta: {
    button: process.env.AB_VARIANT === "B" 
      ? "今すぐ相談する" 
      : "無料相談を予約する",
  },
};
```

### 3.3 多言語対応

同様に、`content.ts`を言語別ファイルに分割するだけで対応可能。

```
config/
├── content.ja.ts
├── content.en.ts
└── content.ts (ルーティングに応じて動的import)
```

---

## IV. Design Decisions Log（設計判断の記録）

| 日付 | 判断 | 理由 | 代替案 |
|------|------|------|--------|
| - | タブUIを採用 | ターゲット分離のため | アコーディオン（却下：一覧性が低い） |
| - | Framer Motion採用 | 物理演算ベースの自然な動き | CSS Animation（却下：細かい制御が困難） |
| - | Server/Client分離 | JSバンドル削減 | 全てClient（却下：パフォーマンス悪化） |
| - | 文言を`config/`に集約 | 非エンジニアでも編集可能に | コンポーネント内にハードコード（却下：保守性低下） |

---

## V. Success Metrics（成功指標）

このプロジェクトの成功は以下で測定される：

| 指標 | 目標 | 測定方法 |
|------|------|----------|
| FAQ閲覧率 | ページ訪問者の70%以上がFAQを開く | GA4 スクロールイベント |
| タブ切り替え率 | 50%以上が両方のタブを閲覧 | カスタムイベント |
| CTA クリック率 | FAQ下部CTAのクリック率 5%以上 | GA4 クリックイベント |
| 無料相談予約率 | 月間予約数の前月比 +30% | TimeRexデータ |

---

*このドキュメントは、プロジェクトの「なぜ」を未来の自分や他の開発者に伝えるために作成されました。*

