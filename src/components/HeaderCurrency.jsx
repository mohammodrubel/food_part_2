"use client";

import { useState, useEffect } from "react";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const countries = [
  // { name: "English", locale: "en-US", currency: "USD" },
  // { name: "Русский", locale: "ru-RU", currency: "RUB" },
  // { name: "العربية", locale: "ar-SA", currency: "AED" },
  // { name: "Azərbaycanca", locale: "az-AZ", currency: "AZN" },
  // { name: "Türkçe", locale: "tr-TR", currency: "TRY" },
  { name: "English", locale: "en-US", flag: "https://flagcdn.com/w20/us.png", currency: "USD" },
  { name: "Русский", locale: "ru-RU", flag: "https://flagcdn.com/w20/ru.png", currency: "RUB" },
  { name: "العربية", locale: "ar-SA", flag: "https://flagcdn.com/w20/sa.png", currency: "AED" },
  { name: "Azərbaycanca", locale: "az-AZ", flag: "https://flagcdn.com/w20/az.png", currency: "AZN" },
  { name: "Türkçe", locale: "tr-TR", flag: "https://flagcdn.com/w20/tr.png", currency: "TRY" },
];

export function LanguageDropdown() {
  const [selectedLocale, setSelectedLocale] = useState(countries[0]);

  useEffect(() => {
    const savedLocale = localStorage.getItem("selected_locale");
    if (savedLocale) {
      const matched = countries.find((c) => c.locale === savedLocale);
      if (matched) setSelectedLocale(matched);
    }
  }, []);

  const handleChange = (country) => {
    setSelectedLocale(country);
    localStorage.setItem("selected_locale", country.locale);
    window.dispatchEvent(new Event("currencyChange")); // update prices instantly
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 px-2">
          <div className="flex items-center space-x-1">
            <Globe className="h-4 w-4" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {countries.map((country) => (
          <DropdownMenuItem
            key={country.locale}
            onClick={() => handleChange(country)}
            className="cursor-pointer"
          >
            <div className="flex items-center space-x-2">
             <img 
               src={country.flag} 
                alt={country.name} 
               className="w-5 h-3.5 object-cover"
               />
            <span>{country.currency}</span>           </div> 
            {/* {country.name} ({country.currency}) */}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

