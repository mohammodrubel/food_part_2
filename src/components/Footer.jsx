"use client"
import {
  Facebook,
  Send,
  Instagram,
  MessageCircle,
  Mail,
  Phone,
  ArrowUpRight,
  Info,
  CreditCard,
  RotateCcw,
  UserCheck,
  FileText,
  Shield,
  HelpCircle,
  Store,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import Logo from "./Logo";
import useTranslation from "@/hooks/useTranslation";
import { useLanguage } from "@/app/context/LanguageContext";
import Link from "next/link";

export function Footer() {
  const t=useTranslation();
  const { currentLang } = useLanguage()
  
  return (
    <footer
      className="bg-white border-t border-slate-200"
      dir={currentLang === "ar" ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Social Media */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-pink-500 flex items-center">
                <Logo />
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-slate-600">
                {t(
                  "navigation.foot",
                  "© 2021-2025 WEE HUB GENERAL TRADING LLC"
                )}
              </p>
              <p className="text-sm text-slate-500">
                {t("navigation.All", "All rights reserved")}
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-slate-700">
                {" "}
                {t(
                  "navigation.Stay",
                  "Stay in the loop with WEE news and offers"
                )}
              </p>
                <div className="flex space-x-3">
      <Link href="http://facebook.com/origin.az" target="_blank">
        <Button
          size="sm"
          variant="outline"
          className="p-2 bg-transparent"
        >
          <Facebook className="w-4 h-4 text-blue-600" />
        </Button>
      </Link>
      <Link href="http://telegram.com/origin.az" target="_blank">
        <Button
          size="sm"
          variant="outline"
          className="p-2 bg-transparent"
        >
          <Send className="w-4 h-4 text-blue-500" />
        </Button>
      </Link>
      <Link href="http://instagram.com/origin.az" target="_blank">
        <Button
          size="sm"
          variant="outline"
          className="p-2 bg-transparent"
        >
          <Instagram className="w-4 h-4 text-pink-600" />
        </Button>
      </Link>
    </div>
            </div>
          </div>

          {/* About Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-800 flex items-center">
              <Info className="w-4 h-4 mr-2" />
              {t("navigation.about", "About")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-slate-600 hover:text-slate-800 transition-colors"
                >
                  {t("navigation.AboutUs", "About Us")}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-slate-600 hover:text-slate-800 transition-colors flex items-center"
                >
                  <FileText className="w-3 h-3 mr-2" />
                  {t("navigation.Terms", "Terms of Use")}
                </Link>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-sm text-slate-600 hover:text-slate-800 transition-colors flex items-center"
                >
                  <Shield className="w-3 h-3 mr-2" />
                  {t("navigation.Privacy", "Privacy Policy")}
                </a>
              </li>

              {/* <li>
                <Link 
                  href="/support"
                  className="text-sm text-slate-600 hover:text-slate-800 transition-colors flex items-center"
                >
                  <HelpCircle className="w-3 h-3 mr-2" />
                  {t("navigation.helpSup", " Help & Support")}
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Customer Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-800">
              {t("navigation.Customer", "Customer ")}
            </h3>
            <ul className="space-y-3">
              {/* <li>
                <Link
                  href="/delivery"
                  className="text-sm text-slate-600 hover:text-slate-800 transition-colors flex items-center"
                >
                  <Phone className="w-3 h-3 mr-2" />
                  {t("navigation.Delivery", "Delivery Information")}
                </Link>
              </li> */}
              <li>
                <Link
                  href="/payment"
                  className="text-sm text-slate-600 hover:text-slate-800 transition-colors flex items-center"
                >
                  <CreditCard className="w-3 h-3 mr-2" />
                  {t("navigation.Payment", " Payment Method")}
                </Link>
              </li>
              <li>
                <Link
                  href="/return-policy"
                  className="text-sm text-slate-600 hover:text-slate-800 transition-colors flex items-center"
                >
                  <RotateCcw className="w-3 h-3 mr-2" />
                  {t("navigation.Return", "Return Policy")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Seller Section & Contact */}
          <div className="space-y-6">
            {/* <div className="space-y-4">
              <h3 className="font-semibold text-slate-800 flex items-center">
                <Store className="w-4 h-4 mr-2" />
                {t("navigation.Seller", "Seller ")}
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-600 hover:text-slate-800 transition-colors flex items-center"
                  >
                    <UserCheck className="w-3 h-3 mr-2" />
                    {t("navigation.logSeller", "Log in as Seller")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-600 hover:text-slate-800 transition-colors"
                  >
                    {t("navigation.Agreement", "Seller Agreement")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-slate-600 hover:text-slate-800 transition-colors"
                  >
                    {t("navigation.WEE", " Start selling on WEE")}
                  </a>
                </li>
              </ul>
            </div> */}

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="space-y-2">
                <a
                  href="mailto:help@wee.ae"
                  className="flex items-center text-sm font-medium text-slate-800 hover:text-pink-600 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Help@origin.az
                </a>
                <p className="text-xs text-slate-500 ml-6">
                  {t("navigation.CustomerSe", "Customer Service")}
                </p>
              </div>

              <div className="space-y-2">
                <a
                  href="mailto:mp@wee.ae"
                  className="flex items-center text-sm font-medium text-slate-800 hover:text-pink-600 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Info@origin.az
                </a>
                <p className="text-xs text-slate-500 ml-6">
                  {t("navigation.parSup", "Partner Support")}
                </p>
              </div>

              {/* <Button
                variant="outline"
                size="sm"
                className="w-full justify-start text-green-600 border-green-200 hover:bg-green-50 bg-transparent"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                {t("navigation.WhatsApp", "Get in touch via WhatsApp")}
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
