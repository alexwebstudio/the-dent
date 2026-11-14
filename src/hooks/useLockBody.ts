"use client";

import { useEffect } from "react";
import { getLenis } from "@/lib/lenis";

// Счётчик: попап врача сразу сменяется формой записи, и блокировка не должна сниматься между ними.
let locks = 0;
let applied = false;
let saved = { overflow: "", paddingRight: "" };

export function useLockBody(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    if (!applied) {
      applied = true;
      saved = { overflow: document.body.style.overflow, paddingRight: document.body.style.paddingRight };
      const gap = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      if (gap > 0) document.body.style.paddingRight = `${gap}px`;
      getLenis()?.stop();
    }
    locks += 1;
    return () => {
      locks -= 1;
      // Новая блокировка может прийти в том же коммите: проверяем после него.
      queueMicrotask(() => {
        if (locks > 0 || !applied) return;
        applied = false;
        document.body.style.overflow = saved.overflow;
        document.body.style.paddingRight = saved.paddingRight;
        getLenis()?.start();
      });
    };
  }, [locked]);
}
