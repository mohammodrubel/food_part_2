"use server";

export const loginUser = async (data) => {
  console.log("Sending data:", data);
  const url = `${process.env.NEXT_PUBLIC_BASE_API}/login`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    });

    const text = await res.text(); // get raw response

    if (!res.ok) {
      console.error("Server error:", text);
    }

    const userInfo = JSON.parse(text); // parse manually if needed
    console.log("Registered user:", userInfo);
    return userInfo;
  } catch (err) {
    console.error("Failed to login:", err.message);
    throw new Error("Failed to login user.");
  }
};
