"use client";

import { addFav, getAllFavList } from "@/app/api/wishlist";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getFormLocaleStorage } from "@/utils/localeStoratge";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import AutoCurrencyFormatter from "./AutoCurrencyFormatter/AutoCurrencyFormatter";
import { DetailsModal } from "./DetailsModal";
import { useLanguage } from "@/app/context/LanguageContext";

const Product = ({ product }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const token = getFormLocaleStorage("accessToken");
  const { currentLang } = useLanguage();

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

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        if (token) {
          const response = await getAllFavList(token);
          const data = Array.isArray(response?.data)
            ? response.data
            : Array.isArray(response)
            ? response
            : [];
          setIsInWishlist(data.some((item) => item.product_id === product.id));
        }
      } catch (error) {
        console.error("Error fetching wishlist:", error);
        setIsInWishlist(false);
      }
    };
    fetchWishlist();
  }, [token, product.id]);

  const toggleFavorite = async (e) => {
    e.stopPropagation();
    try {
      if (!token) return toast.error("Please login first.");
      const res = await addFav({ product_id: product.id }, token);
      if (res?.status) {
        toast.success(
          res.message ||
            (isInWishlist ? "Removed from wishlist" : "Added to wishlist")
        );
        setIsInWishlist((prev) => !prev);
      } else {
        toast.error("Failed to update wishlist.");
      }
    } catch (error) {
      console.error("Error toggling wishlist:", error);
    }
  };

  return (
    <>
      <Card
        className="group relative overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl bg-white flex flex-col cursor-pointer"
        onClick={() => setIsDetailsOpen(true)}
      >
        {/* IMAGE AREA */}
        <div className="relative overflow-hidden rounded-t-2xl">
          {/* Discount badge */}
          {product.discount > 0 && (
            <Badge className="absolute top-3 left-3 z-10 bg-purple-500 text-white text-xs px-2 py-1">
              -{product.discount}%
            </Badge>
          )}

          {/* Wishlist */}
          <Button
            size="icon"
            variant="ghost"
            onClick={toggleFavorite}
            className={`absolute top-3 right-3 z-10 rounded-full bg-white/80 backdrop-blur-md hover:bg-white transition ${
              isInWishlist
                ? "text-red-500"
                : "text-gray-400 hover:text-red-500"
            }`}
          >
            <Heart
              className="h-4 w-4"
              fill={isInWishlist ? "currentColor" : "none"}
            />
          </Button>

          {/* IMAGE */}
          <div className="aspect-square bg-gray-100 overflow-hidden">
            <Image
              src={product.media?.[0]?.original_url || "/placeholder.svg"}
              alt={getItemName(product)}
              width={300}
              height={300}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-[1px]"
            />
          </div>

          {/* HOVER OVERLAY */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300"></div>
        </div>

        {/* CONTENT */}
        <CardContent className="p-3 flex flex-col gap-1">
          <h3 className="font-medium text-gray-800 line-clamp-1 text-sm sm:text-base group-hover:text-red-500 transition">
            {getItemName(product)}
          </h3>

          {/* PRICE */}
          <div className="flex justify-between item-center">
            <span className="font-semibold text-base sm:text-lg text-gray-900">
              <AutoCurrencyFormatter
                price={product.discounted_price || product.converted_price}
              />
            </span>

            {product.discount > 0 && (
              <div className="flex items-center gap-1 text-xs sm:text-sm">
                <span className="text-gray-400 line-through">
                  <AutoCurrencyFormatter price={product.converted_price} />
                </span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* MODAL */}
      <DetailsModal
        product={product}
        open={isDetailsOpen}
        onOpenChange={setIsDetailsOpen}
        isInWishlist={isInWishlist}
        onToggleFavorite={toggleFavorite}
        getItemName={getItemName}
      />
    </>
  );
};

export default Product;