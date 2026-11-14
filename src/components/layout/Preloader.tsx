import { MARK_FRAME, MARK_TOOTH, MARK_TOOTH_TRANSFORM } from "@/components/ui/Icons";

// Чистый CSS: работает до загрузки JS. Рамка и контур зуба прорисовываются (SVG draw-on),
// плашка заливается navy, зуб становится белым, затем проявляется вордмарк.
// Под логотипом — тонкая загрузочная линия без процентов.
export function Preloader() {
  return (
    <div className="preloader" aria-hidden="true">
      <div className="preloader-logo">
        <svg className="preloader-mark" viewBox="0 0 100 100" fill="none">
          <path className="pm-frame" d={MARK_FRAME} pathLength={1} stroke="currentColor" strokeWidth="3.5" />
          <rect className="pm-fill" x="10" y="10" width="80" height="80" rx="8" fill="currentColor" />
          <path className="pm-tooth" d={MARK_TOOTH} transform={MARK_TOOTH_TRANSFORM} pathLength={1} strokeWidth="2.2" strokeLinejoin="round" />
        </svg>
        <span className="preloader-bar" />
        <span className="preloader-word">
          <span>The</span>
          <span>Dent</span>
        </span>
      </div>
      <span className="preloader-line" />
    </div>
  );
}
