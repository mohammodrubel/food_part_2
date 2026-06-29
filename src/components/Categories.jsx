"use client";

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";

function Categories({ data }) {
  return (
    <Card>
      <CardContent>
        <h3 className="font-semibold mb-3">Categories</h3>
        <ul className="space-y-2 text-sm">
          {data?.map((item) => (
            <li key={item?.id} className="flex mt-4">
              <Link href={`/products?id=${item?.id}`} className="flex items-center">
                {item?.photo?.thumbnail ? (
                  <Image
                    src={item.photo.thumbnail}
                    width={20}
                    height={20}
                    className="rounded-full"
                    alt="category photo"
                  />
                ) : (
                  <div className="w-5 h-5 rounded-full bg-gray-200" />
                )}
                <div className="mx-2 font-medium">{item?.name}</div>
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default Categories;
