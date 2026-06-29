


"use client";

import { useEffect, useState } from "react";
// import { FaDollarSign, FaRubleSign, FaLiraSign, FaMoneyBillWave } from "react-icons/fa";

const countries = [
  { name: "English", locale: "en-US", currency: "USD", symbol: "$" },
  { name: "Русский", locale: "ru-RU", currency: "RUB", symbol: "₽" },
  { name: "العربية", locale: "ar-SA", currency: "AED", symbol: "د.إ" },
  { name: "Azərbaycanca", locale: "az-AZ", currency: "AZN", symbol: "₼" },
  { name: "Türkçe", locale: "tr-TR", currency: "TRY", symbol: "₺" },
];
// const countries = [
//   {
//     name: "English",
//     locale: "en-US",
//     currency: "USD",
//     icon: <FaDollarSign className="inline h-4 w-4" />,
//   },
//   {
//     name: "Русский",
//     locale: "ru-RU",
//     currency: "RUB",
//     icon: <FaRubleSign className="inline h-4 w-4" />,
//   },
//   {
//     name: "العربية",
//     locale: "ar-SA",
//     currency: "AED",
//     icon: <FaMoneyBillWave className="inline h-4 w-4" />,
//   },
//   {
//     name: "Azərbaycanca",
//     locale: "az-AZ",
//     currency: "AZN",
//     icon: <FaMoneyBillWave className="inline h-4 w-4" />,
//   },
//   {
//     name: "Türkçe",
//     locale: "tr-TR",
//     currency: "TRY",
//     icon: <FaLiraSign className="inline h-4 w-4" />,
//   },
// ];
export default function AutoCurrencyFormatter({ price }) {
  const [currency, setCurrency] = useState("USD");

  const updateCurrency = () => {
    const savedLocale = localStorage.getItem("selected_locale");
    const matched = countries.find((c) => c.locale === savedLocale);
    setCurrency(matched?.currency || "USD");
  };

  useEffect(() => {
    updateCurrency();
    window.addEventListener("currencyChange", updateCurrency);
    return () => window.removeEventListener("currencyChange", updateCurrency);
  }, []);

  if (!price) return null;


  let value = 0;
  // if (typeof price === "number" || typeof price === "string") {
  //   value = Number(price);
  // } else if (typeof price === "object") {
  //   if (currency === "USD") value = Number(price.USD || 0);
  //   else if (price.converted) value = Number(price.converted[currency] || 0);
  //   else value = Number(price[currency] || 0);
  // }
  if (typeof price === "number" || typeof price === "string") {
  value = Number(price);
} else if (typeof price === "object") {
  if (currency === "USD") {
    value = Number(price.USD || 0);
  } else if (price.converted) {
    value = Number(price.converted[currency] || 0);
  } else if (price.convertedSaved) {
    value = Number(price.convertedSaved[currency] || 0);
  } else {
    value = Number(price[currency] || 0);
  }
}

  // Format number with 2 decimals
  const formatted = new Intl.NumberFormat(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

  const [integerPart, decimalPart] = formatted.split(".");
  const symbol = countries.find((c) => c.currency === currency)?.symbol;

  return (
    <span className="flex items-center gap-1">
      {/* <span className="font-semibold lowercase">{currency}</span>{" "} */}
      {/* lowercase currency code */}
      {symbol} {/* Currency icon */}
      <span>
        {integerPart}
        {decimalPart && <span className="text-xs">.{decimalPart}</span>}{" "}
        {/* smaller decimal */}
      </span>
    </span>
  );
}
