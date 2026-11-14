"use client";

import { useEffect, useState } from "react";
import { bookingSlots } from "@/content/site";
import { cx } from "@/lib/utils";

const DAYS_AHEAD = 14;
export const ANY_TIME = "Любое";

type Day = { value: string; top: string; bottom: string };

// Даты считаются только в браузере: на сервере другой часовой пояс, и подписи «Сегодня/Завтра» разошлись бы.
function buildDays(): Day[] {
  const today = new Date();
  return Array.from({ length: DAYS_AHEAD }, (_, index) => {
    const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + index);
    const weekday = date.toLocaleDateString("ru-RU", { weekday: "short" });
    const dayMonth = date.toLocaleDateString("ru-RU", { day: "numeric", month: "short" }).replace(".", "");
    const top = index === 0 ? "Сегодня" : index === 1 ? "Завтра" : weekday.charAt(0).toUpperCase() + weekday.slice(1);
    const full = date.toLocaleDateString("ru-RU", { weekday: "short", day: "numeric", month: "long" });
    return { value: full, top, bottom: dayMonth };
  });
}

type Props = {
  date: string;
  time: string;
  onDate: (value: string) => void;
  onTime: (value: string) => void;
  dateLabelId: string;
  timeLabelId: string;
};

export function DateTimePicker({ date, time, onDate, onTime, dateLabelId, timeLabelId }: Props) {
  const [days, setDays] = useState<Day[] | null>(null);
  useEffect(() => setDays(buildDays()), []);

  return (
    <>
      <div className="sm:col-span-2">
        <p id={dateLabelId} className="mb-2 text-[14px] font-medium">
          Дата визита <span className="font-normal opacity-65">(необязательно)</span>
        </p>
        <div role="radiogroup" aria-labelledby={dateLabelId} data-lenis-prevent="" className="picker-row">
          {(days ?? Array.from({ length: 7 }, () => null)).map((day, index) =>
            day ? (
              <button key={day.value} type="button" role="radio" aria-checked={date === day.value} onClick={() => onDate(date === day.value ? "" : day.value)} className={cx("picker-chip picker-day", date === day.value && "is-on")}>
                <span className="text-[12px] opacity-75">{day.top}</span>
                <span className="text-[16px] font-semibold">{day.bottom}</span>
              </button>
            ) : (
              <span key={index} aria-hidden="true" className="picker-chip picker-day opacity-40" />
            ),
          )}
        </div>
      </div>

      <div className="sm:col-span-2">
        <p id={timeLabelId} className="mb-2 text-[14px] font-medium">
          Время <span className="font-normal opacity-65">(необязательно)</span>
        </p>
        <div role="radiogroup" aria-labelledby={timeLabelId} className="grid grid-cols-4 gap-2 sm:grid-cols-6">
          {[ANY_TIME, ...bookingSlots].map((slot) => (
            <button key={slot} type="button" role="radio" aria-checked={time === slot} onClick={() => onTime(time === slot ? "" : slot)} className={cx("picker-chip h-11 text-[16px] font-medium", time === slot && "is-on")}>
              {slot}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
