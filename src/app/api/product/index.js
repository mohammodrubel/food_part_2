"use server";

export const getProduct = async (args = []) => {
  const queryParams = args.reduce((acc, { name, value }) => {
    if (value) acc[name] = value;
    return acc;
  }, {});

  try {
    const queryString = new URLSearchParams(queryParams).toString();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/products/?${queryString}`,
      {
        cache: "no-cache",
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return {
      success: true,
      data: data.data || [], // Ensure we return the actual product array
      pagination: data.pagination || null, // Include pagination if available
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      success: false,
      error: error.message,
      data: [],
    };
  }
};

export const getSingleProduct = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/products/${id}`,
      {
        cache: "no-store",
      }
    );
    console.log(res);
    return await res.json();
  } catch (error) {
    console.error("Error fetching single category:", error);
    return null;
  }
};
