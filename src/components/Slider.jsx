// "use client";

// import { Card } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";
// import Image from "next/image";
// import Link from "next/link";
// import { useRef } from "react";
// import { Button } from "./ui/button";
// import { Skeleton } from "@/components/ui/skeleton";
// import { useLanguage } from "@/app/context/LanguageContext";

// export function CarouselPlugin({ data = [], loading = false }) {
//   const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
//  const { currentLang } = useLanguage();

//   const getItemName = (item) => {
//     switch (currentLang) {
//       case "ru": return item.name_ru || item.name;
//       case "ar": return item.name_ar || item.name;
//       case "az": return item.name_az || item.name;
//       case "tr": return item.name_tr || item.name;
//       default: return item.name;
//     }
//   };
//   // 🔹 Show skeletons instead of text while loading
//   if (loading) {
//     return (
//       <div className="relative container mx-auto">
//         <Carousel className="w-full">
//           <CarouselContent>
//             {[...Array(4)].map((_, i) => (
//               <CarouselItem
//                 key={i}
//                 className="sm:basis-1/1 md:basis-1/2 xl:basis-1/4"
//               >
//                 <div className="p-2 h-[500px]">
//                   <Card className="h-full gap-2 py-0 w-full rounded-2xl overflow-hidden flex flex-col">
//                     {/* Image skeleton */}
//                     <Skeleton className="h-[300px] w-full rounded-t-2xl" />

//                     {/* Content skeleton */}
//                     <div className="p-5 flex-grow flex flex-col">
//                       <Skeleton className="h-5 w-2/3 mb-2" />
//                       <Skeleton className="h-6 w-full mb-2" />
//                       <Skeleton className="h-4 w-5/6 mb-4" />

//                       <div className="mt-auto pt-4 border-t border-gray-200">
//                         <div className="flex items-center justify-between gap-2">
//                           <div className="flex items-center gap-2">
//                             <Skeleton className="h-10 w-10 rounded-full" />
//                             <Skeleton className="h-4 w-20" />
//                           </div>
//                           <Skeleton className="h-6 w-16 rounded-md" />
//                         </div>
//                       </div>
//                     </div>
//                   </Card>
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//         </Carousel>
//       </div>
//     );
//   }

// //   if (!data || data.length === 0) {
// //     return (
// //       <div className="container mx-auto py-10 text-center">
// //         No items to display
// //       </div>
// //     );
// //   }

//   return (
//     <div className="relative container mx-auto">
//       <Carousel
//         plugins={[plugin.current]}
//         className="w-full"
//         onMouseEnter={plugin.current.stop}
//         onMouseLeave={plugin.current.reset}
//       >
//         <CarouselContent>
//           {data.map((item) => {
//             const fullName = `${item?.author?.first_name || ""} ${
//               item?.author?.last_name || ""
//             }`.trim();
//             const cleanDescription = item?.description
//               ? item.description.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ")
//               : "";

//             return (
//               <CarouselItem
//                 key={item?.id}
//                 className="sm:basis-1/1 md:basis-1/2 xl:basis-1/4"
//               >
//                 <Link href={`/blog/${item?.id}`}>
//                   <div className="p-2 h-[500px]">
//                     <Card className="h-full gap-2 py-0 w-full rounded-2xl overflow-hidden flex flex-col">
//                       {/* Image Section */}
//                       <div className="relative h-[300px] w-full flex-shrink-0">
//                         {item?.photo?.original_url && (
//                           <Image
//                             src={item.photo.original_url}
//                             className="rounded-t-2xl object-cover"
//                             fill
//                             alt={item.title || "Carousel item image"}
//                           />
//                         )}
//                         {item?.logo?.original_url && (
//                           <div className="absolute bottom-2 right-4 bg-white shadow rounded-2xl p-1">
//                             <Image
//                               src={item.logo.original_url}
//                               className="rounded-2xl"
//                               width={50}
//                               height={50}
//                               alt="Company logo"
//                             />
//                           </div>
//                         )}
//                       </div>

//                       {/* Content Section */}
//                       <div className="p-5 flex-grow flex flex-col">
//                         {item?.placeName && (
//                           <div className="font-bold text-[18px] mb-2">
//                             {item.placeName}
//                           </div>
//                         )}

//                         {item?.title && (
//                           <p className="text-gray-900 text-[20px] line-clamp-1 mb-2">
//                             {item.title}
//                           </p>
//                         )}

//                         {cleanDescription && (
//                           <p className="text-gray-600 text-sm line-clamp-2 mb-4">
//                             {cleanDescription}
//                           </p>
//                         )}

//                         {/* Author Section */}
//                         <div className="mt-auto pt-4 border-t border-gray-200">
//                           <div className="flex items-center justify-between gap-2">
//                             <div className="flex items-center gap-2">
//                               {item?.author?.photo?.thumbnail && (
//                                 <Image
//                                   src={item.author.photo.thumbnail}
//                                   className="rounded-full"
//                                   width={40}
//                                   height={40}
//                                   alt={fullName || "Author image"}
//                                 />
//                               )}
//                               {fullName && (
//                                 <div className="text-[16px] font-medium">
//                                   {fullName}
//                                 </div>
//                               )}
//                             </div>
//                             {item?.author?.address && (
//                               <Button
//                                 className="bg-[#f8f3f3] hover:bg-[#f8f3f3] shadow text-gray-700 capitalize"
//                                 variant="ghost"
//                               >
//                                 {item.author.address}
//                               </Button>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     </Card>
//                   </div>
//                 </Link>
//               </CarouselItem>
//             );
//           })}
//         </CarouselContent>
//         <CarouselPrevious className="!left-2 !top-[45%] z-10" />
//         <CarouselNext className="!right-2 !top-[45%] z-10" />
//       </Carousel>
//     </div>
//   );
// }







"use client";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "./ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useLanguage } from "@/app/context/LanguageContext";

export function CarouselPlugin({ data = [], loading = false }) {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const { currentLang } = useLanguage();

  // language অনুযায়ী ডেটা রিটার্ন
  const getTranslated = (item, field) => {
    switch (currentLang) {
      case "ru": return item?.[`${field}_ru`] || item?.[field];
      case "ar": return item?.[`${field}_ar`] || item?.[field];
      case "az": return item?.[`${field}_az`] || item?.[field];
      case "tr": return item?.[`${field}_tr`] || item?.[field];
      default: return item?.[field];
    }
  };

  // 🔹 Show skeletons instead of text while loading
  if (loading) {
    return (
      <div className="relative container mx-auto"  >
        <Carousel className="w-full">
          <CarouselContent>
            {[...Array(4)].map((_, i) => (
              <CarouselItem
                key={i}
                className="sm:basis-1/1 md:basis-1/2 xl:basis-1/4"
              >
                <div className="p-2 h-[500px]">
                  <Card className="h-full gap-2 py-0 w-full rounded-2xl overflow-hidden flex flex-col">
                    {/* Image skeleton */}
                    <Skeleton className="h-[300px] w-full rounded-t-2xl" />

                    {/* Content skeleton */}
                    <div className="p-5 flex-grow flex flex-col">
                      <Skeleton className="h-5 w-2/3 mb-2" />
                      <Skeleton className="h-6 w-full mb-2" />
                      <Skeleton className="h-4 w-5/6 mb-4" />

                      <div className="mt-auto pt-4 border-t border-gray-200">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <Skeleton className="h-10 w-10 rounded-full" />
                            <Skeleton className="h-4 w-20" />
                          </div>
                          <Skeleton className="h-6 w-16 rounded-md" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    );
  }

  return (
    <div className="relative container mx-auto"  dir={currentLang === "ar" ? "rtl" : "ltr"}>
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {data.map((item) => {
            const fullName = `${item?.author?.first_name || ""} ${
              item?.author?.last_name || ""
            }`.trim();

            const cleanDescription = getTranslated(item, "description")
              ? getTranslated(item, "description")
                  .replace(/<[^>]*>/g, "")
                  .replace(/&nbsp;/g, " ")
              : "";

            return (
              <CarouselItem
                key={item?.id}
                className="sm:basis-1/1 md:basis-1/2 xl:basis-1/4"
               >
                <Link href={`/blog/${item?.id}`} >
                  <div className="p-2 h-[500px]" >
                    <Card className="h-full gap-2 py-0 w-full rounded-2xl overflow-hidden flex flex-col">
                      {/* Image Section */}
                      <div className="relative h-[300px] w-full flex-shrink-0">
                        {item?.photo?.original_url && (
                          <Image
                            src={item.photo.original_url}
                            className="rounded-t-2xl object-cover"
                            fill
                            alt={getTranslated(item, "title") || "Carousel item image"}
                          />
                        )}
                        {item?.logo?.original_url && (
                          <div className="absolute bottom-2 right-4 bg-white shadow rounded-2xl p-1">
                            <Image
                              src={item.logo.original_url}
                              className="rounded-2xl"
                              width={50}
                              height={50}
                              alt="Company logo"
                            />
                          </div>
                        )}
                      </div>

                      {/* Content Section */}
                      <div className="p-5 flex-grow flex flex-col"  >
                        {getTranslated(item, "placeName") && (
                          <div className="font-bold text-[18px] mb-2">
                            {getTranslated(item, "placeName")}
                          </div>
                        )}

                        {getTranslated(item, "title") && (
                          <p className="text-gray-900 text-[20px] line-clamp-1 mb-2">
                            {getTranslated(item, "title")}
                          </p>
                        )}

                        {cleanDescription && (
                          <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                            {cleanDescription}
                          </p>
                        )}

                        {/* Author Section */}
                        <div className="mt-auto pt-4 border-t border-gray-200">
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              {item?.author?.photo?.thumbnail && (
                                <Image
                                  src={item.author.photo.thumbnail}
                                  className="rounded-full"
                                  width={40}
                                  height={40}
                                  alt={fullName || "Author image"}
                                />
                              )}
                              {fullName && (
                                <div className="text-[16px] font-medium">
                                  {fullName}
                                </div>
                              )}
                            </div>
                            {item?.author?.address && (
                              <Button
                                className="bg-[#f8f3f3] hover:bg-[#f8f3f3] shadow text-gray-700 capitalize"
                                variant="ghost"
                              >
                                {item.author.address}
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Link>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="!left-2 !top-[45%] z-10" />
        <CarouselNext className="!right-2 !top-[45%] z-10" />
      </Carousel>
    </div>
  );
}
