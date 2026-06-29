"use server";

export const getAllCustomers = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/customers`,
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
