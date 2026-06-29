"use client";

import { createContext, useState, useEffect, useRef, useContext } from "react";

const LanguageContext = createContext();

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }) {
  const [currentLang, setCurrentLang] = useState("en");
  const [translations, setTranslations] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const translationCache = useRef({});

  useEffect(() => {
    // Load saved language from localStorage
    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      setCurrentLang(savedLang);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    const fetchTranslations = async (lang) => {
      setIsLoading(true);

      try {
        if (translationCache.current[lang]) {
          setTranslations(translationCache.current[lang]);
          setIsLoading(false);
          return;
        }

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API}/lang/${lang}`,
          {
            signal: controller.signal,
          }
        );

        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("API returned non-JSON response");
        }

        const data = await res.json();

        if (data.success && data.translations) {
          translationCache.current[lang] = data.translations;
          setTranslations(data.translations);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Translation error:", error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (currentLang) {
      fetchTranslations(currentLang);
    }

    return () => controller.abort();
  }, [currentLang]);

  const changeLanguage = (lang) => {
    setCurrentLang(lang);
    localStorage.setItem("language", lang); // Save selected language
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLang,
        translations,
        isLoading,
        changeLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
