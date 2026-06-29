"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { getFormLocaleStorage } from "@/utils/localeStoratge";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { addFav, getAllFavList } from "../api/wishlist";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";

export default function WishlistTablePage() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [removingIds, setRemovingIds] = useState(new Set());
  const token = getFormLocaleStorage("accessToken");
  const router = useRouter();

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

          setWishlistItems(data);
        }
      } catch (error) {
        console.error("Error fetching wishlist:", error);
        setWishlistItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, [token]);

  const toggleFavorite = async (product) => {
    try {
      if (!token) return toast.error("Please login first.");

      // Optimistic update - remove from UI immediately
      setWishlistItems((prev) => prev.filter((item) => item.id !== product.id));
      setRemovingIds((prev) => new Set(prev).add(product.id));

      const res = await addFav({ product_id: product.id }, token);

      if (!res?.status) {
        // If API call fails, revert the UI change
        setWishlistItems((prev) => [...prev, product]);
        toast.error(res?.message || "Failed to update wishlist.");
      } else {
        toast.success(res.message || "Removed from wishlist");
      }
    } catch (error) {
      console.error("Error toggling wishlist:", error);
      // Revert on error
      setWishlistItems((prev) => [...prev, product]);
      toast.error("An error occurred while updating wishlist");
    } finally {
      setRemovingIds((prev) => {
        const newSet = new Set(prev);
        newSet.delete(product.id);
        return newSet;
      });
    }
  };

  // Skeleton loading component
  const SkeletonRow = () => (
    <tr>
      <td className="px-6 py-4 flex items-center gap-4">
        <Skeleton className="w-16 h-16 rounded" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-16" />
        </div>
      </td>
      <td className="px-6 py-4">
        <Skeleton className="h-6 w-24" />
      </td>
      <td className="px-6 py-4">
        <Skeleton className="h-4 w-16" />
      </td>
      <td className="px-6 py-4">
        <Skeleton className="h-9 w-9 rounded-md" />
      </td>
    </tr>
  );

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-9 w-64 mb-6" />
        <Card className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left font-medium text-gray-700">
                  Product
                </th>
                <th className="px-6 py-3 text-left font-medium text-gray-700">
                  Date Added
                </th>
                <th className="px-6 py-3 text-left font-medium text-gray-700">
                  Price
                </th>
                <th className="px-6 py-3 text-left font-medium text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {Array.from({ length: 5 }).map((_, index) => (
                <SkeletonRow key={index} />
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    );
  }

  if (wishlistItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-16">
          <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Your wishlist is empty
          </h2>
          <p className="text-gray-600 mb-6">
            Start adding items you love to your wishlist
          </p>
          <Button onClick={() => router.push("/products")}>
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">My Wishlist</h1>
      <Card className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left font-medium text-gray-700">
                Product
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-700">
                Date Added
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-700">
                Price
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {wishlistItems.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 flex items-center gap-4">
                  <img
                    src={
                      item.photo[0]?.original_url || "/placeholder-product.jpg"
                    }
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded border"
                    onError={(e) => {
                      e.target.src = "/placeholder-product.jpg";
                    }}
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {item.name}
                    </div>
                    <div className="text-gray-500 text-xs">#{item.id}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <Badge variant="secondary">
                    {format(new Date(item.created_at), "MMM dd, yyyy")}
                  </Badge>
                </td>
                <td className="px-6 py-4">
                  <div className="text-gray-900 font-medium">${item.price}</div>
                  {item.originalPrice && (
                    <div className="text-gray-500 text-sm line-through">
                      ${item.originalPrice}
                    </div>
                  )}
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => toggleFavorite(item)}
                      disabled={removingIds.has(item.id)}
                    >
                      {removingIds.has(item.id) ? (
                        <div className="animate-spin">...</div>
                      ) : (
                        <Trash2 className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
