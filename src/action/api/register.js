"use server";

export const registerUser = async (data) => {
  console.log("Sending data:", data);
  const url = `${process.env.NEXT_PUBLIC_BASE_API}/register`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    });

    const responseBody = await res.json();

    if (!res.ok) {
      console.error("Server error:", responseBody);
      throw new Error(responseBody?.message || "Server returned an error.");
    }

    return responseBody;
  } catch (err) {
    console.error("Request failed:", err);
    return { error: err.message || "Unknown error" };
  }
};
