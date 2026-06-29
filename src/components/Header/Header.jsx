"use client";
import { getFormLocaleStorage, removeFromLocaleStorage } from "@/utils/localeStoratge";
import { ChevronLeft, Heart, Search, X } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LanguageDropdown } from "../HeaderCurrency";
import Logo from "../Logo";
import DesktopNavigatoin from "./DesktopNavigatoin";
import MobileMenu from "./MobileMenu";
import UserDropDown from "./UserDropDown";
import useTranslation from "@/hooks/useTranslation";
import { useLanguage } from "@/app/context/LanguageContext";

const GoogleTranslate = dynamic(() => import("../GoogleTranslate"), {
  ssr: false,
});

const translations = {
  en: {
    category: "Category",
    products: "Products",
    customers: "Customers",
    contact: "Contact Us",
    searchPlaceholder: "Search products...",
    profile: "Profile",
    logout: "Logout",
    login: "Login"
  },
  ru: {
    category: "Категория",
    products: "Продукты",
    customers: "Клиенты",
    contact: "Связаться с нами",
    searchPlaceholder: "Поиск продуктов...",
    profile: "Профиль",
    logout: "Выйти",
    login: "Войти"
  },
  ar: {
    category: "فئة",
    products: "منتجات",
    customers: "العملاء",
    contact: "اتصل بنا",
    searchPlaceholder: "ابحث عن المنتجات...",
    profile: "الملف الشخصي",
    logout: "تسجيل خروج",
    login: "تسجيل الدخول"
  },
  az: {
    category: "Kateqoriya",
    products: "Məhsullar",
    customers: "Müştərilər",
    contact: "Bizimlə əlaqə",
    searchPlaceholder: "Məhsul axtar...",
    profile: "Profil",
    logout: "Çıxış",
    login: "Daxil ol"
  },
  tr: {
    category: "Kategori",
    products: "Ürünler",
    customers: "Müşteriler",
    contact: "Bize Ulaşın",
    searchPlaceholder: "Ürün ara...",
    profile: "Profil",
    logout: "Çıkış Yap",
    login: "Giriş Yap"
  },
};

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [token, setToken] = useState(null);
  const router = useRouter();
  const t = useTranslation();
  // Handle logout
  const logout = () => {
    removeFromLocaleStorage("accessToken");
    setToken(null);
    router.push("/login");
  };
 
  const [labels, setLabels] = useState(translations.en);
 const { currentLang } = useLanguage(); // ✅ Context থেকে আনো
  // Check auth token
  useEffect(() => {
    const storedToken = getFormLocaleStorage("accessToken");
    setToken(storedToken);

    const handleStorageChange = () => {
      const newToken = getFormLocaleStorage("accessToken");
      setToken(newToken);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${searchQuery}`);
      setSearchQuery("");
      setShowMobileSearch(false);
    }
  };

  return (
    <header dir={currentLang === "ar" ? "rtl" : "ltr"} className="sticky top-0 bg-white dark:bg-gray-900 shadow-sm z-50 border-b">
      {/* Mobile Search Overlay */}
      {showMobileSearch && (
        <div className="lg:hidden fixed inset-0 bg-white z-50 p-4">
          <div className="flex items-center gap-2 mb-4">
            <button
              onClick={() => setShowMobileSearch(false)}
              className="p-2 rounded-full hover:bg-gray-100"
              aria-label="Close search"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <h2 className="text-lg font-medium">Search</h2>
          </div>
          
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              // placeholder={labels.searchPlaceholder}
              placeholder={t("navigation.search", "Search products...")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-12 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              autoFocus
              aria-label="Search input"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-green-600"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
          </form>
        </div>
      )}

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20 relative">
          {/* Logo */}
          <Link href="/" className="z-10 cursor-pointer hover:opacity-90">
            <Logo className="h-8 md:h-10" />
          </Link>

          {/* Desktop Navigation */}
          <DesktopNavigatoin  />

          {/* Desktop Search */}
          <form
            onSubmit={handleSearch}
            className="hidden lg:flex flex-1 mx-4 xl:mx-8 max-w-xl"
          >
            <div className="relative w-full">
              <input
                type="text"
                // placeholder={labels.searchPlaceholder}
                 placeholder={t("navigation.search", "Search products...")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-green-600 transition-colors"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
          </form>

          {/* Right Side Icons */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Mobile Search Button */}
            <button
              onClick={() => setShowMobileSearch(true)}
              className="lg:hidden p-2 text-gray-600 hover:text-green-600 transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Google Translate */}
            <div className="hidden lg:block">
              {/* <GoogleTranslate
                onLanguageChange={(langCode) => {
                  setLabels(translations[langCode] || translations.en);
                }}
              /> */}
               <GoogleTranslate />
            </div>
            
            {/* Currency */}
            <LanguageDropdown />

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors relative group"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5 text-gray-600 group-hover:text-green-600" />
            </Link>

            {/* User dropdown */}
            <UserDropDown labels={labels} />

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <MobileMenu
                labels={labels}
                onLanguageChange={(langCode) => {
                  setLabels(translations[langCode] || translations.en);
                }}
                token={token}
                logout={logout}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}