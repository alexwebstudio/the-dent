import { quality } from "@/content/copy";
import { Button } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { SectionCard } from "@/components/ui/SectionCard";
import { Tooth3D } from "@/components/ui/Tooth3D";
import { cx } from "@/lib/utils";

// Расположение карточек вокруг зуба — только с 1280px, где им хватает места.
// На ноутбуках 1024–1279 карточки идут рядом под зубом, чтобы не налезать на него и на подзаголовок.
const positions = ["xl:left-0 xl:top-[4%]", "xl:right-0 xl:top-0", "xl:left-[5%] xl:bottom-[2%]", "xl:right-[3%] xl:bottom-[8%]"];

export function Quality() {
  return (
    <SectionCard clip>
      <SectionHead eyebrow={quality.eyebrow} title={quality.title} lead={quality.lead} className="relative z-10 !mb-6 xl:!mb-0" />

      <div className="relative lg:mt-12 xl:mt-8 xl:h-[600px] 2xl:h-[640px]">
        <div className="rings hidden xl:block" aria-hidden="true" />
        <Tooth3D parallax={-30} sizes="(min-width: 1280px) 500px, (min-width: 1024px) 340px, 70vw" className="relative mx-auto w-[min(70vw,300px)] lg:w-[340px] xl:absolute xl:left-1/2 xl:top-1/2 xl:w-[420px] xl:-translate-x-1/2 xl:-translate-y-1/2 2xl:w-[500px]" />

        <Reveal group className="relative z-10 mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-4 xl:static xl:mt-0">
          {quality.cards.map((card, index) => (
            <div key={card.title} data-reveal-item="" className={cx("xl:absolute xl:w-[280px] 2xl:w-[300px]", positions[index])}>
              <article className="flex h-full flex-col gap-2 rounded-[18px] border border-line bg-surface p-5 shadow-[var(--shadow-soft)] xl:min-h-[176px] xl:justify-between xl:gap-6 xl:rounded-[22px] xl:border-0 xl:bg-surface-2 xl:p-6">
                <span className="font-display text-[30px] leading-none text-accent-word xl:hidden">0{index + 1}</span>
                <h3 className="text-[20px] font-semibold leading-tight">{card.title}</h3>
                <p className="text-[16px] leading-snug text-ink-muted xl:text-[15px]">{card.text}</p>
              </article>
            </div>
          ))}
        </Reveal>
      </div>

      <Reveal className="relative z-10 mt-6 lg:mt-8">
        <Button booking arrow className="!min-h-[60px] w-full">
          {quality.cta}
        </Button>
      </Reveal>
    </SectionCard>
  );
}
