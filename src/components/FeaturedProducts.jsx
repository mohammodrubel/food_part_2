"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useMemo, useState } from "react";
import Product from "./Product";
import { useLanguage } from "@/app/context/LanguageContext";
import useTranslation from "@/hooks/useTranslation";

export function FeaturedProducts() {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { currentLang, translations } = useLanguage(); 
  const plugin = useMemo(
    () => Autoplay({ delay: 2000, stopOnInteraction: true }),
    []
  );

  // Helper function: translation বা fallback
  const t = useTranslation();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API}/products`,
          { cache: "no-store" }
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setProductData(data?.data || []);
      } catch (error) {
        console.error("Failed to fetch products", error);
        setError("Failed to load products. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // ✅ Localized Name
  const getItemName = (item) => {
    switch (currentLang) {
      case "ru":
        return item.name_ru || item.name;
      case "ar":
        return item.name_ar || item.name;
      case "az":
        return item.name_az || item.name;
      case "tr":
        return item.name_tr || item.name;
      default:
        return item.name;
    }
  };

  // ✅ Localized Description
  const getItemDescription = (item) => {
    switch (currentLang) {
      case "ru":
        return item.description_ru || item.description;
      case "ar":
        return item.description_ar || item.description;
      case "az":
        return item.description_az || item.description;
      case "tr":
        return item.description_tr || item.description;
      default:
        return item.description;
    }
  };

  return (
    <div
      className="container mx-auto px-4 py-6 sm:py-10"
      dir={currentLang === "ar" ? "rtl" : "ltr"}
    >
      <div className="w-full">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-4">
          {t("navigation.Featured", "Featured Products")}
        </h2>

        {isLoading ? (
          <div>Loading products...</div>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : productData.length === 0 ? (
          <div>No products available</div>
        ) : (
          <Carousel
            plugins={[plugin]}
            className="w-full"
            onMouseEnter={plugin.stop}
            onMouseLeave={plugin.reset}
          >
            <CarouselContent>
              {productData.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="mt-2 mb-2 basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/7"
                >
                  <Product
                    product={{
                      ...item,
                      name: getItemName(item),
                      description: getItemDescription(item),
                    }}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="!left-2 sm:!left-4 md:!left-6 lg:!left-8 !top-[45%] z-10" />
            <CarouselNext className="!right-2 sm:!right-4 md:!right-6 lg:!right-8 !top-[45%] z-10" />
          </Carousel>
        )}
      </div>
    </div>
  );
}
