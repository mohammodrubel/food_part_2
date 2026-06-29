// "use client"
// import { getAllBlog, getSingleBlog } from "@/app/api/blog"
// import { useLanguage } from "@/app/context/LanguageContext"
// import { Calendar, MapPin, User } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"
// import { useParams } from "next/navigation"
// import { useEffect, useState } from "react"

// function BlogPage() {
//     const [blog, setBlog] = useState(null)
//     const [blogLoading, setBlogLoading] = useState(true)
//     const [error, setError] = useState(null)
//     const params = useParams()
//     const [allBlogs, setAllBlogs] = useState(null)
//     const [sidebarLoading, setSidebarLoading] = useState(true)

//     useEffect(() => {
//         const fetchBlog = async () => {
//             try {
//                 setBlogLoading(true)
//                 if (!params?.id) {
//                     throw new Error("Blog ID not found")
//                 }
//                 const data = await getSingleBlog(params.id)
//                 if (!data?.data) {
//                     throw new Error("Blog data not found")
//                 }
//                 setBlog(data.data)
//             } catch (err) {
//                 setError(err.message || "Failed to fetch blog")
//                 console.error(err)
//             } finally {
//                 setBlogLoading(false)
//             }
//         }
//         fetchBlog()
//     }, [params?.id])

//     useEffect(() => {
//         const fetchAllBlog = async () => {
//             try {
//                 setSidebarLoading(true)
//                 const data = await getAllBlog()
//                 if (!data?.data) {
//                     throw new Error("Blog data not found")
//                 }
//                 setAllBlogs(data.data)
//             } catch (err) {
//                 console.error(err)
//             } finally {
//                 setSidebarLoading(false)
//             }
//         }
//         fetchAllBlog()
//     }, [])
//  const { currentLang } = useLanguage();

//   const getTranslated = (item, field) => {
//     switch (currentLang) {
//       case "ru":
//         return item?.[`${field}_ru`] || item?.[field];
//       case "ar":
//         return item?.[`${field}_ar`] || item?.[field];
//       case "az":
//         return item?.[`${field}_az`] || item?.[field];
//       case "tr":
//         return item?.[`${field}_tr`] || item?.[field];
//       default:
//         return item?.[field];
//     }
//   };
//     // Filter out the current blog and limit to 4 recent blogs
//     const filteredBlogs = allBlogs
//         ?.filter(item => item.id !== blog?.id)

//     if (blogLoading) {
//         return <div className="min-h-screen flex items-center justify-center">Loading...</div>
//     }

//     if (error) {
//         return <div className="min-h-screen flex items-center justify-center">{error}</div>
//     }

//     if (!blog) {
//         return <div className="min-h-screen flex items-center justify-center">Blog not found</div>
//     }

//     return (
//         <div className="min-h-screen bg-gray-50">
//             {/* Main Content */}
//             <main className="container mx-auto px-4 py-8">
//                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//                     {/* 8-column main content */}
//                     <div className="lg:col-span-8">
//                         <article className="bg-white rounded-lg shadow-sm overflow-hidden">
//                             {/* Hero Image */}
//                             {blog?.media?.[0]?.original_url && (
//                                 <div className="relative h-64 md:h-80 lg:h-96">
//                                     <Image
//                                         src={blog.media[0].original_url}
//                                         alt={blog.title || "Blog image"}
//                                         fill={true}
//                                         className="object-cover"
//                                         priority
//                                     />
//                                     <div className="absolute inset-0 bg-opacity-20"></div>
//                                 </div>
//                             )}

//                             {/* Article Content */}
//                             <div className="p-6 md:p-8 lg:p-12">
//                                 {/* Title */}
//                                 <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
//                                     {blog.title}
//                                 </h1>

//                                 {/* Date */}
//                                 <div className="flex items-center space-x-1 text-gray-500 mb-6">
//                                     <Calendar className="w-4 h-4" />
//                                     <span>{new Date(blog.created_at).toLocaleDateString('en-US', {
//                                         year: 'numeric',
//                                         month: 'long',
//                                         day: 'numeric'
//                                     })}</span>
//                                 </div>

//                                 {/* Article Content */}
//                                 <div className="prose prose-lg max-w-none">
//                                     <div 
//                                         className="text-gray-700 leading-relaxed space-y-6"
//                                         dangerouslySetInnerHTML={{ __html: blog.description }}
//                                     />
//                                 </div>
//                             </div>
//                         </article>
//                     </div>

//                     {/* 4-column sidebar */}
//                     <div className="lg:col-span-4 space-y-6">
//                         {/* Recent Blogs */}
//                         <div className="bg-white rounded-lg shadow-sm p-6">
//                             <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Posts</h2>
//                             {sidebarLoading ? (
//                                 <div className="space-y-4">
//                                     {[...Array(4)].map((_, i) => (
//                                         <div key={i} className="animate-pulse">
//                                             <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
//                                             <div className="h-3 bg-gray-200 rounded w-full"></div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             ) : filteredBlogs?.length > 0 ? (
//                                 <div className="space-y-4">
//                                     {filteredBlogs.map((item) => (
//                                         <Link 
//                                             key={item.id} 
//                                             href={`/blog/${item.id}`}
//                                             className="group block hover:bg-gray-50 p-2 rounded transition"
//                                         >
//                                             <div className="flex items-start space-x-3">
//                                                 {item.media?.[0]?.original_url && (
//                                                     <div className="relative w-16 h-16 flex-shrink-0 rounded overflow-hidden">
//                                                         <Image
//                                                             src={item.media[0].original_url}
//                                                             alt={item.title}
//                                                             fill
//                                                             className="object-cover"
//                                                         />
//                                                     </div>
//                                                 )}
//                                                 <div>
//                                                     <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition">
//                                                         {item.title}
//                                                     </h3>
//                                                     <p className="text-sm text-gray-500 mt-1">
//                                                         {new Date(item.created_at).toLocaleDateString('en-US', {
//                                                             month: 'short',
//                                                             day: 'numeric',
//                                                             year: 'numeric'
//                                                         })}
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </Link>
//                                     ))}
//                                 </div>
//                             ) : (
//                                 <p className="text-gray-500">No other blogs found</p>
//                             )}
//                         </div>

//                     </div>
//                 </div>
//             </main>
//         </div>
//     )
// }

// export default BlogPage













"use client";
import { getAllBlog, getSingleBlog } from "@/app/api/blog";
import { useLanguage } from "@/app/context/LanguageContext";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function BlogPage() {
  const [blog, setBlog] = useState(null);
  const [blogLoading, setBlogLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();
  const [allBlogs, setAllBlogs] = useState(null);
  const [sidebarLoading, setSidebarLoading] = useState(true);

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

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setBlogLoading(true);
        if (!params?.id) {
          throw new Error("Blog ID not found");
        }
        const data = await getSingleBlog(params.id);
        if (!data?.data) {
          throw new Error("Blog data not found");
        }
        setBlog(data.data);
      } catch (err) {
        setError(err.message || "Failed to fetch blog");
        console.error(err);
      } finally {
        setBlogLoading(false);
      }
    };
    fetchBlog();
  }, [params?.id]);

  useEffect(() => {
    const fetchAllBlog = async () => {
      try {
        setSidebarLoading(true);
        const data = await getAllBlog();
        if (!data?.data) {
          throw new Error("Blog data not found");
        }
        setAllBlogs(data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setSidebarLoading(false);
      }
    };
    fetchAllBlog();
  }, []);

  // Filter out the current blog
  const filteredBlogs = allBlogs?.filter((item) => item.id !== blog?.id);

  if (blogLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        {error}
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Blog not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" dir={currentLang === "ar" ? "rtl" : "ltr"}>
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 8-column main content */}
          <div className="lg:col-span-8">
            <article className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Hero Image*/}
              {blog?.media?.[0]?.original_url && (
                <div className="relative h-64 md:h-80 lg:h-96">
                  <Image
                    src={blog.media[0].original_url}
                    alt={getTranslated(blog, "title") || "Blog image"}
                    fill={true}
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-opacity-20"></div>
                </div>
              )}

              {/* Article Content */}
              <div
                className="p-6 md:p-8 lg:p-12"
                dir={currentLang === "ar" ? "rtl" : "ltr"}
              >
                {/* Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {getTranslated(blog, "title")}
                </h1>

                {/* Date */}
                <div className="flex items-center space-x-1 text-gray-500 mb-6">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {new Date(blog.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>

                {/* Article Content */}
                <div className="prose prose-lg max-w-none">
                  <div
                    className="text-gray-700 leading-relaxed space-y-6"
                    dangerouslySetInnerHTML={{
                      __html: getTranslated(blog, "description"),
                    }}
                  />
                </div>
              </div>
            </article>
          </div>

          {/* 4-column sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Recent Blogs */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Recent Posts
              </h2>
              {sidebarLoading ? (
                <div className="space-y-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="animate-pulse">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-full"></div>
                    </div>
                  ))}
                </div>
              ) : filteredBlogs?.length > 0 ? (
                <div className="space-y-4">
                  {filteredBlogs.map((item) => (
                    <Link
                      key={item.id}
                      href={`/blog/${item.id}`}
                      className="group block hover:bg-gray-50 p-2 rounded transition"
                    >
                      <div className="flex items-start space-x-3">
                        {item.media?.[0]?.original_url && (
                          <div className="relative w-16 h-16 flex-shrink-0 rounded overflow-hidden">
                            <Image
                              src={item.media[0].original_url}
                              alt={getTranslated(item, "title")}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div>
                          <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition">
                            {getTranslated(item, "title")}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            {new Date(item.created_at).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              }
                            )}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No other blogs found</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BlogPage;
