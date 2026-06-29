"use client";

import { getProductCategory } from "@/app/api/category";
import { useEffect, useState } from "react";
import Categories from "./Categories";

const CategoriesWarpar = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [categoryLoading, setCategoryLoading] = useState(true);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const data = await getProductCategory();
        setCategoryData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setCategoryLoading(false);
      }
    };
    fetchCategory();
  }, []);

  return categoryLoading ? (
    <p>Loading...</p>
  ) : (
    <Categories data={categoryData?.data} />
  );
};

export default CategoriesWarpar;
