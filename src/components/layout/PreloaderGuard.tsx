"use client";

import { useEffect } from "react";

// Прелоадер уходит по CSS-анимации. Если браузер её притормозил (фоновая вкладка, энергосбережение),
// через 3,5 с после гидрации слой убирается принудительно — сайт не остаётся закрытым.
export function PreloaderGuard() {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      document.querySelector(".preloader")?.setAttribute("data-done", "");
    }, 3500);
    return () => window.clearTimeout(timer);
  }, []);
  return null;
}
