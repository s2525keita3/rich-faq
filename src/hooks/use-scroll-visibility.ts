"use client";

import { useState, useEffect } from "react";

/**
 * スクロール位置に応じた表示制御フック
 * @param threshold - 表示開始のスクロール位置（px）
 * @param options - オプション設定
 */
export function useScrollVisibility(
  threshold: number,
  options?: {
    /** 非表示に戻すかどうか（デフォルト: false） */
    hideOnScrollUp?: boolean;
  }
) {
  const [isVisible, setIsVisible] = useState(false);
  const { hideOnScrollUp = false } = options ?? {};

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      if (hideOnScrollUp) {
        // スクロール位置が閾値以下なら非表示
        if (scrollY <= threshold) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        // 閾値を超えたら表示（戻らない）
        setIsVisible(scrollY > threshold);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold, hideOnScrollUp]);

  return isVisible;
}

/**
 * 閉じるボタン付きのスクロール表示制御フック
 * @param threshold - 表示開始のスクロール位置（px）
 */
export function useDismissibleScrollVisibility(threshold: number) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > threshold && !isDismissed) {
        setIsVisible(true);
      } else if (scrollY <= threshold) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold, isDismissed]);

  const dismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  return { isVisible, dismiss };
}

