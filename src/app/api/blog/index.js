"use server";

export const getAllBlog = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs`, {
      cache: "no-store",
    });
    return await res.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    return null;
  }
};

export const getSingleBlog = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/blogs/${id}`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching blog:", error);
    throw error;
  }
};
