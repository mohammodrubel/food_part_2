"use server";

export const megaMenuAPi = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/product-categories`,
      {
        cache: "no-store",
      }
    );
    return await res.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    return null;
  }
};
