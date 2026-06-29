// "use client";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { getAllBlog } from "../api/blog";
// import Link from "next/link";
// import { useLanguage } from "../context/LanguageContext";

// function Page() {
//   const [blog, setBlog] = useState(null);
//   const [blogLoading, setBlogLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         const data = await getAllBlog();
//         setBlog(data);
//       } catch (error) {
//         setError("Failed to fetch blogs");
//         console.error(error);
//       } finally {
//         setBlogLoading(false);
//       }
//     };
//     fetchBlog();
//   }, []);
//   const { currentLang } = useLanguage();
//     const getTranslated = (item, field) => {
//     switch (currentLang) {
//       case "ru": return item?.[`${field}_ru`] || item?.[field];
//       case "ar": return item?.[`${field}_ar`] || item?.[field];
//       case "az": return item?.[`${field}_az`] || item?.[field];
//       case "tr": return item?.[`${field}_tr`] || item?.[field];
//       default: return item?.[field];
//     }
//   };
//   if (blogLoading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;
//   if (!blog?.data?.length) return <div>No blogs found</div>;

//   return (
//     <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mx-auto">
//       {blog.data.map((item) => (
//         <div className="p-2" key={item.id}>
//           <Link href={`/blog/${item.id}`}>
//             <Card className="h-full gap-0 py-0 w-full rounded-2xl overflow-hidden flex flex-col">
//               {/* Image Section */}
//               <div className="relative h-[300px] w-full flex-shrink-0">
//                 {item?.photo?.original_url && (
//                   <Image
//                     src={item.photo.original_url}
//                     className="rounded-t-2xl object-cover"
//                     fill
//                     alt={item.title || "Blog image"}
//                   />
//                 )}
//                 {item?.logo?.original_url && (
//                   <div className="absolute bottom-2 right-4 bg-white shadow rounded-2xl p-1">
//                     <Image
//                       src={item.logo.original_url}
//                       className="rounded-2xl"
//                       width={50}
//                       height={50}
//                       alt="Company logo"
//                     />
//                   </div>
//                 )}
//               </div>

//               {/* Content Section */}
//               <div className="p-5 flex-grow flex flex-col">
//                 {item?.placeName && (
//                   <div className="font-bold text-[18px] mb-2">
//                     {item.placeName}
//                   </div>
//                 )}

//                 {item?.title && (
//                   <p className="text-gray-900 text-[20px] line-clamp-1 mb-2">
//                     {item.title}
//                   </p>
//                 )}

//                 <p className="text-gray-600 text-sm line-clamp-2 mb-4">
//                   {item.description
//                     .replace(/<[^>]*>/g, "")
//                     .replace(/&nbsp;/g, " ")}
//                 </p>

//                 {/* Author Section */}
//                 <div className="mt-auto pt-4 border-t border-gray-200">
//                   <div className="flex items-center justify-between gap-2">
//                     <div className="flex items-center gap-2">
//                       {item?.author?.photo?.thumbnail && (
//                         <Image
//                           src={item.author.photo.thumbnail}
//                           className="rounded-full"
//                           width={40}
//                           height={40}
//                           alt="Author"
//                         />
//                       )}
//                     </div>
//                     {item?.author?.address && (
//                       <Button
//                         className="bg-[#f8f3f3] hover:bg-[#f8f3f3] shadow text-gray-700 capitalize"
//                         variant="ghost"
//                       >
//                         {item.author.address}
//                       </Button>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </Card>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Page;




















"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getAllBlog } from "../api/blog";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

function Page() {
  const [blog, setBlog] = useState(null);
  const [blogLoading, setBlogLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await getAllBlog();
        setBlog(data);
      } catch (error) {
        setError("Failed to fetch blogs");
        console.error(error);
      } finally {
        setBlogLoading(false);
      }
    };
    fetchBlog();
  }, []);

  const { currentLang } = useLanguage();

  const getTranslated = (item, field) => {
    switch (currentLang) {
      case "ru":
        return item?.[`${field}_ru`] || item?.[field];
      case "ar":
        return item?.[`${field}_ar`] || item?.[field];
      case "az":
        return item?.[`${field}_az`] || item?.[field];
      case "tr":
        return item?.[`${field}_tr`] || item?.[field];
      default:
        return item?.[field];
    }
  };

  if (blogLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!blog?.data?.length) return <div>No blogs found</div>;

  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mx-auto" dir={currentLang === "ar" ? "rtl" : "ltr"}>
      {blog.data.map((item) => {
        const cleanDescription = getTranslated(item, "description")
          ?.replace(/<[^>]*>/g, "")
          .replace(/&nbsp;/g, " ");

        return (
          <div className="p-2" key={item.id}>
            <Link href={`/blog/${item.id}`}>
              <Card className="h-full gap-0 py-0 w-full rounded-2xl overflow-hidden flex flex-col">
                {/* Image Section */}
                <div className="relative h-[300px] w-full flex-shrink-0">
                  {item?.photo?.original_url && (
                    <Image
                      src={item.photo.original_url}
                      className="rounded-t-2xl object-cover"
                      fill
                      alt={getTranslated(item, "title") || "Blog image"}
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
                <div
                  className="p-5 flex-grow flex flex-col"
                  dir={currentLang === "ar" ? "rtl" : "ltr"}
                >
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
                            alt="Author"
                          />
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
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Page;

