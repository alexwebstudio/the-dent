import { site } from "@/content/site";
import { hero } from "@/content/copy";
import { cx } from "@/lib/utils";
import { ArrowUpRight, Star } from "./Icons";

// Главный показатель доверия: реальный рейтинг и число отзывов из 2ГИС, крупно.
export function RatingCard({ className }: { className?: string }) {
  return (
    <a href={site.map2gis} target="_blank" rel="noopener noreferrer" className={cx("rating-card group", className)} aria-label={`Рейтинг ${site.stats.rating.toFixed(1)} из 5, ${hero.ratingLabel}. Открыть в 2ГИС`}>
      {/* Без счётчика: перезапись текста на первом экране сдвигает LCP. */}
      <span className="rating-score">{site.stats.rating.toFixed(1)}</span>
      <span className="min-w-0 flex-1 border-l border-line pl-4 sm:pl-5">
        <span className="flex gap-0.5 text-accent" aria-hidden="true">
          {Array.from({ length: 5 }, (_, star) => (
            <Star key={star} width={17} height={17} />
          ))}
        </span>
        <span className="mt-1.5 block text-[16px] font-semibold leading-tight">{hero.ratingLabel}</span>
        <span className="mt-0.5 block text-[13px] text-ink-muted">{hero.ratingHint}</span>
      </span>
      <ArrowUpRight className="flex-none self-start text-ink-muted transition-transform duration-500 group-hover:rotate-45" />
    </a>
  );
}
