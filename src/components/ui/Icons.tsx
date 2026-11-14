import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export function ArrowRight(props: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" {...base} {...props}>
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

export function ArrowLeft(props: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" {...base} {...props}>
      <path d="M13.5 8h-11M7 3.5 2.5 8 7 12.5" />
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" {...base} {...props}>
      <path d="M4 12 12 4M5.5 4H12v6.5" />
    </svg>
  );
}

export function Chevron(props: IconProps) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" {...base} {...props}>
      <path d="m2.5 4.5 3.5 3.5 3.5-3.5" />
    </svg>
  );
}

export function Star(props: IconProps) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="m12 2.6 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.5l-5.9 3.1 1.2-6.5L2.5 9.5l6.6-.9z" />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" {...base} {...props}>
      <path d="m3 8.5 3.2 3.2L13 4.8" />
    </svg>
  );
}

export function Telegram(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}>
      <path d="M21 4.5 3 11.2l5.6 2 2.2 6.3 3.2-4 5 3.5z" />
      <path d="m8.6 13.2 7.9-5.4-5.7 7" />
    </svg>
  );
}

export function WhatsApp(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}>
      <path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3.1 3.1z" />
      <path d="M9 8.5c-.4 2.7 3.3 6.4 6 6l.8-1.5-2-1-.9.8c-.8-.3-1.7-1.2-2-2l.8-.9-1-2z" />
    </svg>
  );
}

export function Instagram(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17 7h.01" />
    </svg>
  );
}

export function Phone(props: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}>
      <path d="M5 4h3.5l1.5 4.5-2 1.5a12 12 0 0 0 6 6l1.5-2 4.5 1.5V19a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  );
}

// Знак The Dent: зуб в скруглённом квадрате с рамкой.
// Рамка и плашка — currentColor, зуб — var(--mark-tooth): белый на светлом фоне,
// navy в белом варианте на тёмных секциях.
export const MARK_FRAME = "M17.5 3.5H82.5A14 14 0 0 1 96.5 17.5V82.5A14 14 0 0 1 82.5 96.5H17.5A14 14 0 0 1 3.5 82.5V17.5A14 14 0 0 1 17.5 3.5Z";
export const MARK_TOOTH =
  "M50 22C44 17 36 15 30 16C22 17.5 20 25 20.5 33C21 42 25 48 27 56C29 64 29 76 32 81C34 85 38 84 39.5 79C41.5 72 43 63 50 63C57 63 58.5 72 60.5 79C62 84 66 85 68 81C71 76 71 64 73 56C75 48 79 42 79.5 33C80 25 78 17.5 70 16C64 15 56 17 50 22Z";
export const MARK_TOOTH_TRANSFORM = "translate(5 6) scale(0.9)";

export function LogoMark(props: IconProps) {
  return (
    <svg width="40" height="40" viewBox="0 0 100 100" aria-hidden="true" fill="none" {...props}>
      <path d={MARK_FRAME} stroke="currentColor" strokeWidth="3.5" />
      <rect x="10" y="10" width="80" height="80" rx="8" fill="currentColor" />
      <path d={MARK_TOOTH} transform={MARK_TOOTH_TRANSFORM} style={{ fill: "var(--mark-tooth, #fff)" }} />
    </svg>
  );
}

export function Play(props: IconProps) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M8 5.2v13.6a.8.8 0 0 0 1.2.7l10.6-6.8a.8.8 0 0 0 0-1.4L9.2 4.5A.8.8 0 0 0 8 5.2z" />
    </svg>
  );
}
