import type { Metadata } from "next";
import Image from "next/image";
import { CtaForm } from "@/components/home/CtaForm";
import { Guarantees } from "@/components/home/Guarantees";
import { Tech } from "@/components/home/Tech";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { DemoNote } from "@/components/ui/DemoNote";
import { AnimatedTitle, SectionHead } from "@/components/ui/Heading";
import { Mono } from "@/components/ui/Mono";
import { Reveal } from "@/components/ui/Reveal";
import { SectionCard } from "@/components/ui/SectionCard";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: `О клинике, ${site.city}`,
  description: `Клиника ${site.brand} в Шымкенте: рейтинг ${site.stats.rating.toFixed(1)} в 2ГИС по ${site.stats.reviews} отзывам. Как мы работаем и почему нам доверяют.`,
  path: "/about",
});

const figures = [
  { value: site.stats.rating.toFixed(1), label: "рейтинг в 2ГИС" },
  { value: `${site.stats.reviews}`, label: "отзывов пациентов" },
  { value: "24/7", label: "онлайн-заявка" },
];

const sterilization = [
  { title: "Обработка", text: "Сразу после приёма инструмент замачивают и моют." },
  { title: "Упаковка", text: "Каждый набор запечатывают в индивидуальный пакет." },
  { title: "Стерилизация", text: "Инструмент проходит стерилизацию по установленному режиму." },
  { title: "Вскрытие", text: "Пакет открываем при вас, прямо перед работой." },
];

const documents = ["Лицензия на медицинскую деятельность", "Сертификаты врачей", "Договор на оказание услуг", "Условия обслуживания"];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Клиника, где *сначала* думают"
        lead="Ставим диагноз, объясняем план и только потом лечим."
        crumbs={[{ name: "О клинике", path: "/about" }]}
        image="/images/clinic/lobby.jpg"
        imageAlt="Холл клиники The Dent со входом и фотообоями с улыбкой"
        objectPosition="50% 45%"
      >
        <Button booking arrow>
          Записаться на приём
        </Button>
      </PageHero>

      <SectionCard>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="t-eyebrow mb-4">О нас</p>
            <AnimatedTitle text="Спокойная *медицина* без спешки" />
            <Reveal delay={0.15} className="t-lead mt-6 max-w-[54ch] text-ink-muted">
              <p>Мы не обещаем чудес. Обещаем другое: вы поймёте диагноз, услышите варианты лечения и заранее узнаете стоимость.</p>
            </Reveal>
          </div>
          <Reveal group className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
            {figures.map((item) => (
              <div key={item.label} data-reveal-item="" className="hair-row flex items-baseline justify-between gap-4 py-3">
                <span className="t-stat" data-count="">
                  {item.value}
                </span>
                <span className="text-right text-ink-muted">{item.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
        <Reveal className="photo-card mt-10 aspect-[16/9] lg:aspect-[21/9]">
          <Image src="/images/hero/chair.jpg" alt="Белое стоматологическое кресло в светлом кабинете" fill sizes="100vw" className="object-cover" />
        </Reveal>
      </SectionCard>

      <Tech id="tech" />

      <SectionCard>
        <SectionHead eyebrow="Стерильность" title="Четыре шага *чистоты*" lead="Протокол для каждого инструмента. Спросите об этом на приёме, мы покажем." />
        <Reveal as="ol" group className="grid gap-3 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {sterilization.map((item, index) => (
            <li key={item.title} data-reveal-item="" className="inner-card p-5 lg:p-6">
              <Mono className="text-accent-press">0{index + 1}</Mono>
              <h3 className="mt-6 text-[19px] font-semibold leading-tight">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-snug text-ink-muted">{item.text}</p>
            </li>
          ))}
        </Reveal>
      </SectionCard>

      <Guarantees id="guarantees" />

      <SectionCard tone="surface-2" id="documents">
        <SectionHead eyebrow="Документы" title="Лицензии и *допуски*" lead="Попросите оригиналы у администратора клиники." />
        <Reveal group className="grid gap-3 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {documents.map((item) => (
            <div key={item} data-reveal-item="" className="dash-card flex min-h-[150px] items-end rounded-[18px] bg-surface p-5 font-medium leading-snug lg:rounded-[22px]">
              {item}
            </div>
          ))}
        </Reveal>
        <DemoNote className="mt-5">{`Сканы документов добавит клиника. ${site.license}`}</DemoNote>
      </SectionCard>

      <CtaForm />
    </>
  );
}
