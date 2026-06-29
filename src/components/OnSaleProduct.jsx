"use client";

import { getOnSaleProduct } from "@/app/api/0nSale";
import { bannerAPi } from "@/app/api/banner/bannerApi";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Product from "./Product";
import { useLanguage } from "@/app/context/LanguageContext";
import useTranslation from "@/hooks/useTranslation";

const OnSaleProduct = () => {
  const [onSaleProduct, setOnSaleProduct] = useState([]);
  const [bannerPhoto, setBannerPhoto] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const t = useTranslation();
  const { currentLang, translations } = useLanguage();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [onSaleRes, bannerRes] = await Promise.all([
          getOnSaleProduct(),
          bannerAPi(),
        ]);
        setOnSaleProduct(onSaleRes?.data || []);
        setBannerPhoto(bannerRes?.data || []);
      } catch (err) {
        console.error(err);
        setError("failed_to_load");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

  if (loading) {
    return (
      <div className="container mx-auto p-6 text-center">
        <p className="text-gray-500">
          {translations["loading"] || "Loading..."}
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-6 text-center text-red-500">
        {translations[error] || "Failed to load data"}
      </div>
    );
  }

  return (
    <div
      className="container mx-auto px-4"
      dir={currentLang === "ar" ? "rtl" : "ltr"}
    >
      <div className="mb-6 p-4 bg-white rounded-2xl shadow-sm">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* LEFT: BANNER (NO EMPTY SPACE) */}
          <div className="lg:col-span-2 flex flex-col gap-4 h-full">
            {bannerPhoto.map((item) => {
              const imageSrc =
                item?.media?.[0]?.original_url ||
                "https://via.placeholder.com/500x600";

              return (
                <div
                  key={item.id}
                  className="relative group w-full flex-1 min-h-[120px]"
                >
                  <Link href={item?.url || "#"}>
                    <div className="relative w-full h-full overflow-hidden rounded-2xl transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg">
                      <Image
                        fill
                        className="object-cover rounded-2xl"
                        src={imageSrc}
                        alt={item?.name || "Banner image"}
                        unoptimized
                      />
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* RIGHT: PRODUCTS */}
          <div className="lg:col-span-10 flex flex-col">
            {/* HEADER */}
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-bold text-2xl bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                {t("navigation.Sale", "On Sale")}
              </h2>
              <div className="h-0.5 w-12 bg-red-500 rounded-full hidden sm:block"></div>
            </div>

            {/* PRODUCT GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5 flex-grow">
              {onSaleProduct.slice(0, 8).map((product) => (
                <Product
                  key={product.id}
                  product={{
                    ...product,
                    name: getItemName(product),
                    description: getItemDescription(product),
                  }}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OnSaleProduct;