"use server";

export const bannerAPi = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/banners`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return { error: true, message: error.message };
  }
};
