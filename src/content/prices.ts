// ПЛЕЙСХОЛДЕР: прайс клиники ещё не получен. Цены не выдумываем:
// пока у позиции нет price, на сайте показывается «после осмотра».
// Когда владелец пришлёт прайс — проставить price (в тенге) у каждой позиции.

export type PriceItem = { name: string; includes: string; price?: number };
export type PriceSection = { id: string; title: string; items: PriceItem[] };

export const priceNote = "Стоимость зависит от диагноза и объёма работы — врач назовёт её после осмотра. Актуальный прайс уточняйте у администратора.";

export const PRICE_PENDING = "после осмотра";

export const prices: PriceSection[] = [
  {
    id: "diagnostics",
    title: "Консультация",
    items: [
      { name: "Консультация врача", includes: "осмотр, первичный план" },
      { name: "Снимок зуба", includes: "по показаниям" },
    ],
  },
  {
    id: "implantation",
    title: "Имплантация",
    items: [
      { name: "Установка импланта", includes: "хирургический этап" },
      { name: "Коронка на импланте", includes: "абатмент, коронка" },
    ],
  },
  {
    id: "prosthetics",
    title: "Протезирование",
    items: [
      { name: "Коронка", includes: "примерка, фиксация" },
      { name: "Мостовидный протез", includes: "за единицу" },
    ],
  },
  {
    id: "therapy",
    title: "Терапия",
    items: [
      { name: "Лечение кариеса", includes: "анестезия, пломба" },
      { name: "Лечение пульпита", includes: "лечение каналов, пломба" },
    ],
  },
  {
    id: "surgery",
    title: "Хирургия",
    items: [
      { name: "Удаление зуба", includes: "анестезия, рекомендации" },
      { name: "Удаление зуба мудрости", includes: "анестезия, контроль" },
    ],
  },
  {
    id: "orthodontics",
    title: "Ортодонтия",
    items: [
      { name: "Консультация ортодонта", includes: "осмотр, план лечения" },
      { name: "Брекет-система", includes: "одна челюсть" },
    ],
  },
];

export function priceSection(id: string) {
  const section = prices.find((item) => item.id === id);
  if (!section) throw new Error(`Нет раздела цен: ${id}`);
  return section;
}

function formatTenge(value: number) {
  return `${value.toLocaleString("ru-RU").replace(/ |\s/g, " ")} ₸`;
}

export function priceLabel(item: PriceItem) {
  return item.price === undefined ? PRICE_PENDING : `от ${formatTenge(item.price)}`;
}

/** «от N ₸» по минимальной известной цене раздела, иначе «цена после осмотра». */
export function minPriceLabel(id: string) {
  const known = priceSection(id).items.flatMap((item) => (item.price === undefined ? [] : [item.price]));
  return known.length ? `от ${formatTenge(Math.min(...known))}` : `цена ${PRICE_PENDING}`;
}
