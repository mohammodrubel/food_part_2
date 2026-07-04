"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import useTranslation from "@/hooks/useTranslation";
import { Phone } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Component() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessEmail: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
const { currentLang } = useLanguage()

  const handleSubmit = async (e) => {};
  const t = useTranslation();
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden"  dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-12 max-w-6xl mx-auto">
          {/* Left side - Form */}
          <div className="lg:col-span-2">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t("navigation.Get", " Get in touch with Sales")}
                <div className="w-16 h-1 bg-[#7CAE4D] mt-2"></div>
              </h1>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                {t(
                  "navigation.desc",
                  "Want to learn more about how BestFoodImporters can help your business?<br />Fill in the form below and a member of our sales team will be in touch."
                )}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="sr-only">
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    placeholder={t("navigation.name", "Full Name")}
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="h-12 bg-white border-gray-200 placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="businessEmail" className="sr-only">
                    Business Email
                  </Label>
                  <Input
                    id="businessEmail"
                    name="businessEmail"
                    type="email"
                    placeholder={t("navigation.Email", "Business Email")}
                    value={formData.businessEmail}
                    onChange={handleInputChange}
                    className="h-12 bg-white border-gray-200 placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company" className="sr-only">
                    Company
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder={t("navigation.Company", "Company")}
                    value={formData.company}
                    onChange={handleInputChange}
                    className="h-12 bg-white border-gray-200 placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="sr-only">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder={t("navigation.Phone", "Phone")}
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="h-12 bg-white border-gray-200 placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="sr-only">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t("navigation.Message", "Message")}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="min-h-32 bg-white border-gray-200 placeholder:text-gray-400 resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <Button
                  type="submit"
                  className="bg-[#7CAE4D] hover:bg-[#7CAE4D] text-white  font-semibold px-8 py-3 rounded-full h-auto"
                >
                  {t("navigation.sub", "Submit")}
                </Button>

                <div className="text-sm text-gray-500 max-w-md">
                 {" "} {t("navigation.by", " By submitting this form, you are agreeing to BestDataNet")}
                  <a href="#" className="text-gray-700 underline">
                    {t("navigation.Terms", "Terms of Use")}
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-gray-700 underline">
                    {t("navigation.Privacy", "Privacy Policy")}
                  </a>
                  .
                  <br />
                 {t("navigation.continfo", "You are also agreeing to receive information and offers relevant to BestFoodImporters service, and can opt-out at any time.")}
                </div>
              </div>
            </form>
          </div>

          {/* Right side - Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                  {t("navigation.givesale", " Give Our Sales Team a call ")}
              </h2>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#7CAE4D] rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-semibold text-gray-900">
                  +44 20 4572 5515
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                 {t("navigation.cont", "Contact Support")}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t("navigation.simply", "Simply leave a message using the chat button and we'll get backto you within 24 hours, Monday-Friday.")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
