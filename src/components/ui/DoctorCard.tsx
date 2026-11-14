import Image from "next/image";
import Link from "next/link";
import type { Doctor } from "@/content/doctors";
import { site } from "@/content/site";
import { ArrowButton } from "./ArrowButton";

export function DoctorCard({ doctor, sizes }: { doctor: Doctor; sizes: string }) {
  return (
    <Link href={`/doctors/${doctor.slug}`} aria-label={`${doctor.name}, ${doctor.specialization.toLowerCase()}`} className="group block">
      <span className="photo-card aspect-[3/4]">
        <Image src={doctor.image} alt={doctor.imageAlt} fill sizes={sizes} className="object-cover" style={{ objectPosition: doctor.objectPosition }} />
      </span>
      <span className="mt-3 flex items-center justify-between gap-3">
        <span className="min-w-0">
          <span className="block text-[16px] font-semibold leading-tight lg:text-[17px]">{doctor.name}</span>
          <span className="mt-1 block text-[14px] leading-tight text-ink-muted">
            {doctor.specialization}
            {!doctor.roleConfirmed && site.isDemo && <span className="t-mono ml-1.5 !text-[11px] text-ink-muted/80">· уточняется</span>}
          </span>
        </span>
        <span>
          <ArrowButton tone="fill" />
        </span>
      </span>
    </Link>
  );
}
