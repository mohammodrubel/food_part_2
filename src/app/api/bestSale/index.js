"use server";

export const getbestproduct = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/best-selling`,
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

export const getbestSingle = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/best-selling/${id}`,
      {
        cache: "no-store",
      }
    );
    return await res.json();
  } catch (error) {
    console.error("Error fetching single category:", error);
    return null;
  }
};
