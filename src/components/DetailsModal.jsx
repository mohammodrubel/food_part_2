"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Heart, X } from "lucide-react";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import AutoCurrencyFormatter from "./AutoCurrencyFormatter/AutoCurrencyFormatter";

// ----------------------------------------------------------------------
// Helper: format markdown safely (no innerHTML)
// ----------------------------------------------------------------------
const MarkdownContent = ({ content, className = "" }) => {
  if (!content) return null;
  return (
    <div className={`prose prose-sm max-w-none ${className}`}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
};

// ----------------------------------------------------------------------
// Image Gallery Subcomponent - Vertical thumbnails + centered main image
// ----------------------------------------------------------------------
const ImageGallery = ({ images, selectedImage, onSelectImage, isNew = false }) => {
  if (!images?.length) {
    return (
      <div className="flex items-center justify-center bg-gray-100 rounded-2xl aspect-square">
        <span className="text-gray-400">No image available</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Thumbnails - horizontal scroll on mobile, vertical column on desktop */}
      {images.length > 1 && (
        <div className="order-2 md:order-1 flex flex-row md:flex-col gap-3 overflow-x-auto md:overflow-y-auto md:max-h-[480px] md:pr-2 pb-2 md:pb-0">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => onSelectImage(img.original_url)}
              className={`relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary ${
                selectedImage === img.original_url ? "ring-2 ring-primary" : ""
              }`}
              aria-label={`View product image ${idx + 1}`}
              aria-current={selectedImage === img.original_url ? "true" : "false"}
            >
              <Image
                src={img.original_url}
                alt={`Product thumbnail ${idx + 1}`}
                fill
                sizes="96px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Main image container - centered with badge */}
      <div className="order-1 md:order-2 relative flex-1 flex justify-center items-center">
        {isNew && (
          <Badge className="absolute top-3 left-3 z-10 bg-red-500">
            New
          </Badge>
        )}
        <div className="relative aspect-square w-full max-w-md mx-auto">
          <Image
            className="rounded-2xl object-contain"
            src={selectedImage}
            alt="Product main image"
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            priority
          />
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// Product Info Subcomponent (renders description / sections)
// ----------------------------------------------------------------------
const ProductInfo = ({ product }) => {
  const content = useMemo(() => {
    // Case: custom metadata sections
    if (product.metadata?.sections?.length) {
      return (
        <div className="mt-6 space-y-6">
          {product.metadata.sections.map((section, idx) => (
            <div key={idx} className="border-b pb-4 last:border-b-0">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                {section.title}
              </h3>
              <MarkdownContent content={section.content} />
            </div>
          ))}
        </div>
      );
    }

    // Case: plain description (treated as markdown)
    if (!product.description) {
      return (
        <div className="prose prose-sm max-w-none text-gray-600 mt-4">
          <p>This product has no description yet.</p>
        </div>
      );
    }

    return <MarkdownContent content={product.description} className="mt-4" />;
  }, [product]);

  return (
    <div className="space-y-4">
      <DialogTitle className="text-2xl font-bold">{product.name}</DialogTitle>

      <div className="flex items-center gap-3 flex-wrap">
        <h2 className="text-2xl font-bold text-green-500">
          <AutoCurrencyFormatter
            price={product.discounted_price || product.converted_price}
          />
        </h2>
        {product.discount > 0 && (
          <span className="text-sm text-gray-400 line-through">
            <AutoCurrencyFormatter price={product.converted_price} />
          </span>
        )}
        {product.discounted_price?.saved > 0 && (
          <span className="text-green-600 font-medium ml-1 flex items-center gap-1">
            Save
            <AutoCurrencyFormatter
              price={{
                USD: product.discounted_price.saved,
                converted: product.discounted_price.convertedSaved,
              }}
            />
          </span>
        )}
      </div>

      {content}
    </div>
  );
};

// ----------------------------------------------------------------------
// Action Buttons (Call & Wishlist)
// ----------------------------------------------------------------------
const ActionButtons = ({ isInWishlist, onToggleFavorite }) => {
  const handleFavoriteClick = useCallback(
    (e) => {
      e.stopPropagation();
      onToggleFavorite(e);
    },
    [onToggleFavorite]
  );

  return (
    <div className="flex gap-3 justify-center mx-4 mt-4">
      <TooltipProvider>
        <div className="flex flex-col sm:flex-row gap-4 px-4 sm:px-0">
          {/* Azerbaijan call */}
          <Tooltip>
            <TooltipTrigger asChild>
              <a href="tel:+994772171111" className="flex-1">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full bg-white text-black border shadow-lg hover:bg-gray-100"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src="https://hatscripts.github.io/circle-flags/flags/az.svg"
                      alt="Azerbaijan flag"
                      width={25}
                      height={25}
                    />
                    <span className="text-sm font-medium">Call Now</span>
                  </div>
                </Button>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Azerbaijan</p>
            </TooltipContent>
          </Tooltip>

          {/* UAE call */}
          <Tooltip>
            <TooltipTrigger asChild>
              <a href="tel:+971543627166" className="flex-1">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full bg-white text-black border shadow-lg hover:bg-gray-100"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src="https://hatscripts.github.io/circle-flags/flags/ae.svg"
                      alt="UAE flag"
                      width={25}
                      height={25}
                    />
                    <span className="text-sm font-medium">Call Now</span>
                  </div>
                </Button>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>United Arab Emirates</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>

      <Button
        variant="outline"
        size="lg"
        onClick={handleFavoriteClick}
        aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
      >
        <Heart className="h-4 w-4" fill={isInWishlist ? "currentColor" : "none"} />
      </Button>
    </div>
  );
};

// ----------------------------------------------------------------------
// Main Component
// ----------------------------------------------------------------------
export function DetailsModal({
  product,
  open,
  onOpenChange,
  isInWishlist,
  onToggleFavorite,
}) {
  const [selectedImage, setSelectedImage] = useState("");

  // Reset selected image when product changes
  useEffect(() => {
    if (product?.photo?.length) {
      setSelectedImage(product.photo[0].original_url);
    } else {
      setSelectedImage("");
    }
  }, [product]);

  const images = useMemo(() => product?.photo ?? [], [product]);

  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[90vw] md:max-w-7xl min-w-[310px] md:min-w-[900px] max-h-[95vh] overflow-y-auto">
        <DialogClose asChild>
          <button
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </DialogClose>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-8">
          {/* Left: Image Gallery */}
          <div className="relative">
            <ImageGallery
              images={images}
              selectedImage={selectedImage}
              onSelectImage={setSelectedImage}
              isNew={product.isNew}
            />
          </div>

          {/* Right: Product Details */}
          <ProductInfo product={product} />
        </div>

        <ActionButtons
          isInWishlist={isInWishlist}
          onToggleFavorite={onToggleFavorite}
        />
      </DialogContent>
    </Dialog>
  );
}