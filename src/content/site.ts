// ЕДИНАЯ ТОЧКА ПРАВКИ ДАННЫХ КЛИНИКИ The Dent (Шымкент).
// Реальное: название, телефон/WhatsApp, Instagram, рейтинг и число отзывов (2ГИС), адрес из карточки 2ГИС.
// ПЛЕЙСХОЛДЕРЫ (подтвердит владелец): часы работы, реквизиты, лицензия, домен, ссылка на карту.
// Пока isDemo: true, на сайте видны пометки о неподтверждённых данных.

export const site = {
  isDemo: true,

  brand: "The Dent",
  descriptor: "The Dent · стоматология",
  slogan: "Стоматология, которой доверяют",
  domain: "https://the-dent.vercel.app", // ПЛЕЙСХОЛДЕР: заменить на домен клиники
  city: "Шымкент",

  phone: "+7 777 918 1819",
  phoneHref: "tel:+77779181819",
  whatsapp: "https://wa.me/77779181819",
  instagram: "https://www.instagram.com/thedent_shymkent/",
  instagramHandle: "@thedent_shymkent",
  // Видеоотзывы. Когда клиника пришлёт ссылки на конкретные reels — подставить в content/reviews.ts.
  instagramReviews: "https://www.instagram.com/thedent_shymkent/reels/",
  map2gis: "https://2gis.kz/shymkent/search/The%20Dent%20%D1%81%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F",

  address: "мкр. Нурсат, 173Б", // из карточки 2ГИС — подтвердит владелец
  addressRegion: "Шымкент",
  country: "KZ",
  hours: "Часы работы уточняются", // ПЛЕЙСХОЛДЕР

  hoursSchema: [] as string[], // ПЛЕЙСХОЛДЕР: например ["Mo-Sa 09:00-20:00"]
  directions: "Ориентиры и описание входа добавит клиника.", // ПЛЕЙСХОЛДЕР
  mapEmbed: "", // ПЛЕЙСХОЛДЕР: ссылка на iframe 2ГИС или Яндекс Карт

  developer: { label: "Разработка сайта", name: "AlexWebStudio", href: "https://alexwebstudio.ru" },

  legal: "ТОО / ИП — реквизиты клиники уточняются", // ПЛЕЙСХОЛДЕР
  license: "Лицензия на медицинскую деятельность — номер уточняется", // ПЛЕЙСХОЛДЕР

  // Реальные цифры из 2ГИС (ноябрь 2026).
  stats: {
    rating: 5.0,
    reviews: 485,
  },
} as const;

// Слоты времени в форме записи. ПЛЕЙСХОЛДЕР: подогнать под реальные часы работы клиники.
export const bookingSlots = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];

export const demoNote = "Прототип: специализации и стаж врачей, цены, часы работы и реквизиты уточняются у клиники.";

export function formatPrice(value: number) {
  return `${value.toLocaleString("ru-RU").replace(/ |\s/g, " ")} ₸`;
}

export function formatCount(value: number) {
  return value.toLocaleString("ru-RU").replace(/ |\s/g, " ");
}
