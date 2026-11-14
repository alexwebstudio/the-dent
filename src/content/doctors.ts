// Врачи The Dent — реальные, фото предоставлены клиникой.
// Специализации предварительные (по отзывам пациентов), стаж и образование — ПЛЕЙСХОЛДЕРЫ:
// подтвердит владелец. Пока roleConfirmed: false, рядом с ролью видна пометка «уточняется».

export type Doctor = {
  slug: string;
  name: string;
  headline: string;
  role: string;
  roleConfirmed: boolean;
  specialization: string;
  experience: string;
  about: string;
  education: string[];
  serviceSlugs: string[];
  image: string;
  imageAlt: string;
  objectPosition?: string;
};

const experience = "уточняется";
const education = ["Образование — данные передаст клиника", "Сертификаты и курсы — данные передаст клиника"];

export const doctors: Doctor[] = [
  {
    slug: "sanat-seidzhanuly",
    name: "Санат Сейджанулы",
    headline: "Санат *Сейджанулы*",
    role: "Хирург-имплантолог",
    roleConfirmed: false,
    specialization: "Имплантация и коронки",
    experience,
    about: "В отзывах пациенты благодарят Саната за имплантацию и коронки.",
    education,
    serviceSlugs: ["implantation", "prosthetics"],
    image: "/images/doctors/sanat.jpg",
    imageAlt: "Санат Сейджанулы, врач клиники The Dent",
    objectPosition: "50% 22%",
  },
  {
    slug: "elaman-zhangirov",
    name: "Жангиров Еламан Амантаевич",
    headline: "Еламан *Жангиров*",
    role: "Стоматолог-ортопед",
    roleConfirmed: false,
    specialization: "Протезирование и имплантация",
    experience,
    about: "Пациенты называют Еламана Амантаевича в отзывах об имплантации и протезировании.",
    education,
    serviceSlugs: ["prosthetics", "implantation"],
    image: "/images/doctors/zhangirov.jpg",
    imageAlt: "Еламан Жангиров, врач клиники The Dent",
    objectPosition: "50% 15%",
  },
  {
    slug: "daniyar-bakirov",
    name: "Бакиров Данияр Оралбайулы",
    headline: "Данияр *Бакиров*",
    role: "Стоматолог-терапевт",
    roleConfirmed: false,
    specialization: "Лечение кариеса и пульпита",
    experience,
    about: "В отзывах Данияра хвалят за бережное лечение кариеса.",
    education,
    serviceSlugs: ["therapy"],
    image: "/images/doctors/bakirov.jpg",
    imageAlt: "Данияр Бакиров, врач клиники The Dent",
    objectPosition: "50% 28%",
  },
];

export function getDoctor(slug: string) {
  return doctors.find((item) => item.slug === slug);
}
