// src/app/api/category/index.js or /lib/server/category.js
"use server";
export const addFav = async (args, token) => {
  console.log("Sending to wishlist:", args, token);

  if (!token) {
    console.error("No token provided");
    return null;
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/wishlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        Accept: "application/json", // Explicitly ask for JSON
      },
      body: JSON.stringify(args),
      cache: "no-store",
    });

    console.log("Response status:", res.status, res.url); // Check if redirected

    const responseText = await res.text();
    console.log("Raw response:", responseText); // Log raw response

    if (!res.ok) {
      console.error("Server error response:", responseText);
      return null;
    }

    try {
      const data = JSON.parse(responseText);
      return data;
    } catch (jsonError) {
      console.error("Failed to parse JSON:", jsonError);
      console.error("Response was:", responseText);
      return null;
    }
  } catch (error) {
    console.error("Error adding to favorites:", error);
    return null;
  }
};
// To get all wishlist items for a user
export const getAllFavList = async (token) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/wishlist`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch wishlist: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching wishlist:", error);
    return null;
  }
};
