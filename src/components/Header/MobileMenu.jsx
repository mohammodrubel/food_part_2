"use client";
import { useState } from "react";
import { CircleUserRound, Heart, Menu, Search, X } from "lucide-react";
import Link from "next/link";
import Logo from "../Logo";
import useTranslation from "@/hooks/useTranslation";

function MobileMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  const t = useTranslation();

  return (
    <div className="lg:hidden relative z-[100]">
      {/* Top button */}
      <div className="flex items-end gap-4 relative z-[100]">
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="p-2 text-gray-600 hover:text-green-600"
        >
          {openMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          openMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 space-y-4">
          <Logo />
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-black"
              onClick={() => setOpenMenu(false)}
            >
              {t("header.home", "Home")}
            </Link>
            <Link
              href="/category"
              className="text-gray-700 hover:text-black"
              onClick={() => setOpenMenu(false)}
            >
              {t("header.category", "Category")}
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-black"
              onClick={() => setOpenMenu(false)}
            >
              {t("header.products", "Products")}
            </Link>
            <Link
              href="/customers"
              className="text-gray-700 hover:text-black"
              onClick={() => setOpenMenu(false)}
            >
              {t("header.customers", "Customers")}
            </Link>
            <Link
              href="/contact-us"
              className="text-gray-700 hover:text-black"
              onClick={() => setOpenMenu(false)}
            >
              {t("header.contact", "Contact")}
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
