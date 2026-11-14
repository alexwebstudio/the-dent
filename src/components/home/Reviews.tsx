import Image from "next/image";
import { reviewsBlock } from "@/content/copy";
import { textReviews, videoReviews } from "@/content/reviews";
import { site } from "@/content/site";
import { SectionHead } from "@/components/ui/Heading";
import { ArrowUpRight, Instagram, LogoMark, Play, Star } from "@/components/ui/Icons";
import { Mono } from "@/components/ui/Mono";
import { Reveal } from "@/components/ui/Reveal";
import { SectionCard } from "@/components/ui/SectionCard";

const handle = site.instagramHandle.replace("@", "");
const rating = site.stats.rating.toFixed(1);

// Концепция блока — из проекта ortodent: якорь доверия (рейтинг 2ГИС), лента видеоотзывов
// со ссылкой в Instagram и кнопка «Перейти в Instagram» справа от заголовка.
export function Reviews() {
  return (
    <SectionCard id="reviews" clip>
      <SectionHead
        eyebrow={reviewsBlock.eyebrow}
        title={reviewsBlock.title}
        lead={reviewsBlock.lead}
        className="lg:[&>div:first-child]:col-span-8 lg:[&>div:last-child]:col-span-4"
        action={
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn ig-btn w-full sm:w-auto" data-variant="primary">
            <Instagram /> {reviewsBlock.instagramCta}
            <ArrowUpRight />
          </a>
        }
      />

      {/* Якорь доверия: реальные цифры из 2ГИС, крупно. */}
      <Reveal className="trust-strip mb-6 lg:mb-8">
        <span className="trust-score">{rating}</span>
        <span className="flex min-w-0 flex-col gap-1.5">
          <span className="flex gap-0.5 text-white" role="img" aria-label={`Оценка ${rating} из 5`}>
            {Array.from({ length: 5 }, (_, star) => (
              <Star key={star} width={20} height={20} />
            ))}
          </span>
          <span className="text-[17px] font-semibold leading-tight lg:text-[20px]">
            {site.stats.reviews} отзывов в 2ГИС
          </span>
          <span className="text-[14px] leading-snug text-on-accent-muted">Средняя оценка пациентов клиники {site.brand}</span>
        </span>
        <a href={site.map2gis} target="_blank" rel="noopener noreferrer" className="btn trust-link" data-variant="light">
          {reviewsBlock.readAll} <ArrowUpRight />
        </a>
      </Reveal>

      <Reveal group className="reels-row">
        {videoReviews.map((review) => (
          <a key={review.cover} href={review.href} target="_blank" rel="noopener noreferrer" data-reveal-item="" aria-label={`Смотреть видеоотзыв в Instagram, врач ${review.doctor}`} className="reel-card group">
            <span className="reel">
              <Image src={review.cover} alt={review.coverAlt} fill sizes="(min-width: 1024px) 24vw, 72vw" className="reel-cover" />
              <span className="reel-shade" aria-hidden="true" />
              <span className="reel-top">
                <span className="reel-avatar">
                  <LogoMark width={20} height={20} className="text-accent" />
                </span>
                <span className="text-[13px] font-semibold">{handle}</span>
              </span>
              <span className="reel-play" aria-hidden="true">
                <Play width={24} height={24} />
              </span>
            </span>
            <span className="mt-3 flex items-center justify-between gap-3">
              <span className="min-w-0">
                <span className="block text-[15px] font-semibold leading-tight">Видеоотзыв</span>
                <span className="mt-0.5 block truncate text-[13px] text-ink-muted">Врач: {review.doctor}</span>
              </span>
              <Instagram className="flex-none text-ink-muted transition-colors group-hover:text-accent" />
            </span>
          </a>
        ))}
      </Reveal>

      <div className="mt-12 lg:mt-16">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h3 className="font-display text-[32px] uppercase leading-none lg:text-[44px]">{reviewsBlock.textTitle}</h3>
            <p className="mt-1 text-[14px] text-ink-muted">{reviewsBlock.textNote}</p>
          </div>
          <a href={site.map2gis} target="_blank" rel="noopener noreferrer" className="text-link">
            {reviewsBlock.readAll} <ArrowUpRight />
          </a>
        </div>
        <Reveal group className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {textReviews.map((review) => (
            <figure key={review.text} data-reveal-item="" className="flex flex-col justify-between gap-6 rounded-[18px] bg-surface-2 p-5 lg:rounded-[22px] lg:p-6">
              <div>
                <div className="mb-4 flex gap-0.5 text-accent" role="img" aria-label={`Оценка ${review.rating} из 5`}>
                  {Array.from({ length: review.rating }, (_, star) => (
                    <Star key={star} width={16} height={16} />
                  ))}
                </div>
                <blockquote className="whitespace-pre-line text-[16px] leading-relaxed">{review.text}</blockquote>
              </div>
              <figcaption className="flex items-center justify-between gap-3 border-t border-line pt-4">
                <span className="text-[14px] font-medium">Пациент клиники</span>
                <Mono className="!text-[12px] text-ink-muted">
                  {review.source} · {review.date}
                </Mono>
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </SectionCard>
  );
}
