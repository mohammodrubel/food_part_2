"use client";

import { Button } from "@/components/ui/button";
import {
  Heart,
  Minus,
  Plus,
  RotateCcw,
  Share2,
  Shield,
  ShoppingCart,
  Star,
  Truck,
} from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductPage() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  let descrioptin =
    "Experience the perfect blend of quality, style, and performance with this premium product. Designed with attention to detail and built using high-quality materials, it's made to meet your everyday needs effortlessly. Whether you're upgrading your essentials or looking for a reliable gift, this item offers durability, comfort, and modern design — making it a smart choice for anyone";
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API}/products/${params?.id}`,
          { cache: "no-store" }
        );
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Error loading product:", err);
      } finally {
        setLoading(false);
      }
    };
    if (params?.id) fetchProduct();
  }, [params?.id]);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (!product) return <p className="text-center py-10">Product not found.</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={
                product?.data?.product?.photo[0]?.original_url ||
                "/placeholder.svg"
              }
              alt="image"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="grid grid-cols-4 gap-2">
            {product?.data?.product?.photo.map((img, i) => (
              <button
                key={i}
                className="aspect-square relative overflow-hidden rounded-md border"
              >
                <Image
                  src={img?.original_url}
                  alt={`${product.name} ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              {product.data?.product?.name}
            </h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.reviews?.length || 0} reviews
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold">
              ${product.data?.product?.price}
            </span>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            {product.data?.product?.descrioptin || descrioptin}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              size="lg"
              className="flex-1 bg-[#7CAE4D] hover:bg-[#7CAE4D]"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            <Button variant="outline" size="lg">
              <Heart />
            </Button>
            <Button variant="outline" size="lg">
              <Share2 className="w-4 h-4" />
            </Button>
          </div>

          {/* Shipping Info */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center gap-2">
              <Truck className="w-6 h-6 text-primary" />
              <div>
                <p className="font-semibold text-sm">Free Shipping</p>
                <p className="text-xs text-muted-foreground">Orders over $50</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              <div>
                <p className="font-semibold text-sm">2 Year Warranty</p>
                <p className="text-xs text-muted-foreground">Full coverage</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <RotateCcw className="w-6 h-6 text-primary" />
              <div>
                <p className="font-semibold text-sm">30-Day Returns</p>
                <p className="text-xs text-muted-foreground">
                  No questions asked
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
