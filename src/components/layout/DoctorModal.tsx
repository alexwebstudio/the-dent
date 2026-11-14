"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { doctors, type Doctor } from "@/content/doctors";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Modal } from "@/components/ui/Modal";

const TITLE_ID = "doctor-title";

// Любой элемент с data-doctor="<slug>" открывает попап с информацией о враче.
// Кнопка записи внутри передаёт врача в форму (data-booking-doctor).
export function DoctorModal() {
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const close = useCallback(() => setDoctor(null), []);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const trigger = (event.target as Element | null)?.closest<HTMLElement>("[data-doctor]");
      const found = trigger && doctors.find((item) => item.slug === trigger.dataset.doctor);
      if (!found) return;
      event.preventDefault();
      setDoctor(found);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const doctorServices = doctor ? services.filter((service) => doctor.serviceSlugs.includes(service.slug)) : [];
  const pending = doctor && !doctor.roleConfirmed && site.isDemo;

  return (
    <Modal open={doctor !== null} onClose={close} labelledBy={TITLE_ID} wide>
      {doctor && (
        <div className="grid gap-6 sm:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] sm:gap-8">
          <div className="photo-card aspect-[4/5] sm:aspect-[3/4] sm:self-start">
            <Image src={doctor.image} alt={doctor.imageAlt} fill sizes="(min-width: 640px) 320px, 90vw" className="object-cover" style={{ objectPosition: doctor.objectPosition }} />
          </div>
          <div className="flex flex-col">
            <p className="t-eyebrow mb-3">Врач клиники {site.brand}</p>
            <h2 id={TITLE_ID} className="t-h2 !text-[clamp(34px,4vw,48px)] pr-12">
              {doctor.name}
            </h2>
            <dl className="mt-5">
              <div className="hair-row grid gap-0.5 py-3">
                <dt className="text-[13px] text-ink-muted">Направление</dt>
                <dd className="font-medium">
                  {doctor.specialization}
                  {pending && <span className="text-ink-muted"> (уточняется)</span>}
                </dd>
              </div>
              <div className="hair-row grid gap-0.5 py-3">
                <dt className="text-[13px] text-ink-muted">Стаж</dt>
                <dd className="font-medium">{doctor.experience}</dd>
              </div>
              <div className="hair-row grid gap-0.5 py-3">
                <dt className="text-[13px] text-ink-muted">Образование</dt>
                <dd className="text-[15px] text-ink-muted">{doctor.education.join(". ")}</dd>
              </div>
            </dl>
            <p className="mt-5 text-[16px] leading-relaxed">{doctor.about}</p>
            {doctorServices.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-2">
                {doctorServices.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`} onClick={close} className="inline-flex h-9 items-center gap-1.5 rounded-full bg-surface-2 px-3.5 text-[14px] font-medium transition-colors hover:bg-tint">
                      {service.title} <ArrowUpRight width={13} height={13} />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-7 sm:mt-auto sm:pt-7" data-booking-doctor={doctor.name} onClick={close}>
              <Button booking arrow className="w-full">
                Записаться к врачу
              </Button>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}
