"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Eye, Lock, Database, Users, Globe } from "lucide-react";
import useTranslation from "@/hooks/useTranslation";

export default function PrivacyPage() {
  const t = useTranslation();

  const dataTypes = [
    {
      icon: <Users className="h-5 w-5" />,
      type: t("privacy.dataTypes_personalInfo_type", "Personal Information"),
      examples1: t(
        "privacy.dataTypes_personalInfo_name",
        "Name, email address, phone number"
      ),
      examples2: t(
        "privacy.dataTypes_personalInfo_address",
        "Billing and shipping addresses"
      ),
      examples3: t(
        "privacy.dataTypes_personalInfo_payment",
        "Payment information"
      ),

      purpose: t(
        "privacy.dataTypes_personalInfo_purpose",
        "Account creation, order processing, customer service"
      ),
    },
    {
      icon: <Database className="h-5 w-5" />,
      type: t("privacy.dataTypes_usageData_type", "Usage Data"),
      examples1: t(
        "privacy.dataTypes_usageData_pages",
        "Pages visited, time spent on site"
      ),
      examples2: t(
        "privacy.dataTypes_usageData_device",
        "Device information, IP address"
      ),
      examples3: t(
        "privacy.dataTypes_usageData_browser",
        "Browser type and version"
      ),

      purpose: t(
        "privacy.dataTypes_usageData_purpose",
        "Website improvement, analytics, security"
      ),
    },
    {
      icon: <Globe className="h-5 w-5" />,
      type: t("privacy.dataTypes_communicationData_type", "Communication Data"),
      examples1: t(
        "privacy.dataTypes_communicationData_email",
        "Email communications"
      ),
      examples2: t(
        "privacy.dataTypes_communicationData_customerService",
        "Customer service interactions"
      ),
      examples3: t(
        "privacy.dataTypes_communicationData_marketing",
        "Marketing preferences"
      ),

      purpose: t(
        "privacy.dataTypes_communicationData_purpose",
        "Customer support, marketing communications, service updates"
      ),
    },
  ];

  const privacyRights = t("privacy.privacyRights", [
    {
      right: "Access",
      description: "Request a copy of the personal data we hold about you",
    },
    {
      right: "Correction",
      description:
        "Request correction of inaccurate or incomplete personal data",
    },
    {
      right: "Deletion",
      description:
        "Request deletion of your personal data under certain circumstances",
    },
  ]);

  const securityMeasures = t("privacy.securityMeasures", [
    "SSL encryption for all data transmission",
    "Secure payment processing with PCI compliance",
    "Regular security audits and vulnerability assessments",
    "Access controls and employee training",
    "Data backup and disaster recovery procedures",
    "Incident response and breach notification protocols",
  ]);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          {t("privacy.privacy_title", "Privacy Policy")}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t(
            "privacy.privacy_description",
            "We are committed to protecting your privacy and ensuring the security of your personal information."
          )}
        </p>
        {/* <div className="flex items-center justify-center mt-6">
          <Badge variant="outline" className="text-sm">
            {t("privacy.lastUpdated", "Last updated: December 2024")}
          </Badge>
        </div> */}
      </div>

      {/* Privacy Commitment */}
      <div className="bg-[#e0ffcd] rounded-lg p-6 mb-12">
        <div className="flex items-start space-x-4">
          <Shield className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">
              {t("privacy.commitment_title", "Our Privacy Commitment")}
            </h2>
            <p className="text-muted-foreground">
              {t(
                "privacy.commitment_description",
                "At FreshFruit, we respect your privacy and are committed to protecting your personal information. This policy explains how we collect, use, and safeguard your data when you use our services."
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Information We Collect */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          {t("privacy.dataTypes_title", "Information We Collect")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dataTypes.map((data, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <div className="text-primary mr-2">{data.icon}</div>
                  {data.type}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">
                      {t("privacy.dataTypes_examples", "Examples:")}
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {data.examples ? (
                        data.examples.map((example, eIndex) => (
                          <li key={eIndex}>• {example}</li>
                        ))
                      ) : (
                        <>
                          {data.examples1 && <li>• {data.examples1}</li>}
                          {data.examples2 && <li>• {data.examples2}</li>}
                          {data.examples3 && <li>• {data.examples3}</li>}
                        </>
                      )}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      {t("privacy.dataTypes_purpose", "Purpose:")}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {data.purpose}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How We Use Information */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          {t("privacy.useInfo_title", "How We Use Your Information")}
        </h2>
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 flex items-center">
                  <Eye className="h-4 w-4 mr-2 text-primary" />
                  {t("privacy.useInfo_serviceProvision", "Service Provision")}
                </h3>
               <ul className="space-y-2 text-sm text-muted-foreground">
    <li>• {t("privacy.serviceProvision_order", "Process and fulfill your orders")}</li>
    <li>• {t("privacy.serviceProvision_support", "Provide customer support and service")}</li>
    <li>• {t("privacy.serviceProvision_updates", "Send order confirmations and updates")}</li>
    <li>• {t("privacy.serviceProvision_account", "Manage your account and preferences")}</li>
    <li>• {t("privacy.serviceProvision_payments", "Process payments and prevent fraud")}</li>
  </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 flex items-center">
                  <Globe className="h-4 w-4 mr-2 text-primary" />
                  {t(
                    "privacy.useInfo_communicationMarketing",
                    "Communication & Marketing"
                  )}
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
  <li>• {t("privacy.communicationMarketing_offers", "Send promotional offers and newsletters")}</li>
  <li>• {t("privacy.communicationMarketing_notifications", "Notify you about new products and services")}</li>
  <li>• {t("privacy.communicationMarketing_surveys", "Conduct surveys and gather feedback")}</li>
  <li>• {t("privacy.communicationMarketing_recommendations", "Provide personalized recommendations")}</li>
  <li>• {t("privacy.communicationMarketing_announcements", "Send important service announcements")}</li>
</ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Remaining sections (Information Sharing, Privacy Rights, Data Security, Cookies, Retention, Contact) */}
      {/* You can similarly replace all static texts with t("...") keys for full dynamism */}
    </div>
  );
}
