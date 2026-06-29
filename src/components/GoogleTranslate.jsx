"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { useState } from "react";

export const languages = [
  { code: "en", name: "English", flag: "https://flagcdn.com/w40/gb.png" },
  { code: "ru", name: "Russian", flag: "https://flagcdn.com/w40/ru.png" },
  { code: "ar", name: "Arabic", flag: "https://flagcdn.com/w40/sa.png" },
  { code: "az", name: "Azerbaijani", flag: "https://flagcdn.com/w40/az.png" },
  { code: "tr", name: "Turkish", flag: "https://flagcdn.com/w40/tr.png" },
];

export default function GoogleTranslate() {
  const { currentLang, isLoading, changeLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  const current = languages.find((l) => l.code === currentLang);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        disabled={isLoading}
        className="flex items-center border px-3 py-2 rounded-md text-sm gap-2"
      >
        <img src={current.flag} alt={current.name} className="w-5 h-5" />
        <span>{isLoading ? "Loading..." : current.name}</span>
      </button>

      {open && (
        <div className="absolute mt-1 w-40 bg-white border rounded-md shadow-lg z-50">
          {languages.map((l) => (
            <div
              key={l.code}
              onClick={() => {
                changeLanguage(l.code);
                setOpen(false);
              }}
              className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100"
            >
              <img src={l.flag} alt={l.name} className="w-5 h-5" />
              <span>{l.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
