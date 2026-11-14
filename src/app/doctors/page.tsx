import type { Metadata } from "next";
import { CtaForm } from "@/components/home/CtaForm";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { DemoNote } from "@/components/ui/DemoNote";
import { DoctorCard } from "@/components/ui/DoctorCard";
import { SectionHead } from "@/components/ui/Heading";
import { Mono } from "@/components/ui/Mono";
import { Reveal } from "@/components/ui/Reveal";
import { SectionCard } from "@/components/ui/SectionCard";
import { doctorsBlock } from "@/content/copy";
import { doctors } from "@/content/doctors";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: `Врачи клиники, ${site.city}`,
  description: `Врачи клиники ${site.brand}, ${site.city}: имплантация, протезирование, лечение кариеса. Выберите врача и запишитесь на приём.`,
  path: "/doctors",
});

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        title="Команда, которой *доверяют*"
        lead="Выберите врача по специализации и запишитесь на первый приём."
        crumbs={[{ name: "Врачи", path: "/doctors" }]}
        image={doctorsBlock.teamPhoto.src}
        imageAlt={doctorsBlock.teamPhoto.alt}
        objectPosition="50% 35%"
      >
        <Button booking arrow>
          Записаться к врачу
        </Button>
      </PageHero>

      <SectionCard>
        <SectionHead eyebrow="Врачи" title="Найдите *своего* врача" lead="Откройте карточку врача, чтобы записаться." />
        <Reveal group className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-8">
          {doctors.map((doctor) => (
            <div key={doctor.slug} data-reveal-item="">
              <DoctorCard doctor={doctor} sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 100vw" />
              <p className="mt-3 text-[15px] leading-snug text-ink-muted">{doctor.specialization}</p>
              <Mono className="mt-1 block !text-[13px]">стаж {doctor.experience}</Mono>
            </div>
          ))}
        </Reveal>
        <DemoNote className="mt-8">Специализации и стаж врачей уточняются: клиника подтвердит данные.</DemoNote>
      </SectionCard>

      <CtaForm />
    </>
  );
}
