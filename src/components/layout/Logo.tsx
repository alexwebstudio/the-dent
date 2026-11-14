import Link from "next/link";
import { site } from "@/content/site";
import { LogoMark } from "@/components/ui/Icons";
import { cx } from "@/lib/utils";

// Логотип The Dent: знак, вертикальная черта и серифный вордмарк в две строки, как в фирменном знаке.
// tone="light" — белый вариант для тёмно-синих секций.
export function BrandLockup({ tone = "navy", className }: { tone?: "navy" | "light"; className?: string }) {
  return (
    <span className={cx("brand-lockup", tone === "light" ? "text-white [--mark-tooth:var(--accent)]" : "text-accent", className)}>
      <LogoMark className="brand-lockup-mark" />
      <span aria-hidden="true" className="brand-lockup-bar" />
      <span className="brand-lockup-word">
        <span>The</span>
        <span>Dent</span>
      </span>
    </span>
  );
}

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} className="flex items-center" aria-label={`${site.brand}, на главную`}>
      <BrandLockup />
    </Link>
  );
}
