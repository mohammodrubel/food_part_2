"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Scale, FileText } from "lucide-react";
import useTranslation from "@/hooks/useTranslation";

export default function TermsPage() {
  const t = useTranslation();

  // Sections dynamic with translation keys
  const sections = [
    {
      title: t("terms.acceptance_title", "Acceptance of Terms"),
      content: [
        t(
          "terms.acceptance_1",
          "By accessing and using FreshFruit's website and services, you accept and agree to be bound by the terms and provision of this agreement."
        ),
        t(
          "terms.acceptance_2",
          "If you do not agree to abide by the above, please do not use this service."
        ),
        t(
          "terms.acceptance_3",
          "These terms apply to all visitors, users, and others who access or use the service."
        ),
      ],
    },
    {
      title: t("terms.use_license_title", "Use License"),
      content: [
        t(
          "terms.use_license_1",
          "Permission is granted to temporarily download one copy of the materials on FreshFruit's website for personal, non-commercial transitory viewing only."
        ),
        t(
          "terms.use_license_2",
          "This is the grant of a license, not a transfer of title, and under this license you may not:"
        ),
        t("terms.use_license_3", "• Modify or copy the materials"),
        t("terms.use_license_4", "• Use the materials for any commercial purpose or for any public display"),
        t("terms.use_license_5", "• Attempt to reverse engineer any software contained on the website"),
        t("terms.use_license_6", "• Remove any copyright or other proprietary notations from the materials"),
      ],
    },
    {
      title: t("terms.product_info_title", "Product Information"),
      content: [
        t(
          "terms.product_info_1",
          "We strive to provide accurate product information, including descriptions, images, and pricing."
        ),
        t(
          "terms.product_info_2",
          "However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free."
        ),
        t(
          "terms.product_info_3",
          "All fruits are subject to seasonal availability and may be substituted with similar quality alternatives."
        ),
        t(
          "terms.product_info_4",
          "Prices are subject to change without notice, but changes will not affect orders already placed."
        ),
      ],
    },
    {
      title: t("terms.orders_title", "Orders and Payment"),
      content: [
        t("terms.orders_1", "All orders are subject to acceptance and availability."),
        t("terms.orders_2", "We reserve the right to refuse or cancel any order for any reason at any time."),
        t("terms.orders_3", "Payment must be received before order processing and shipment."),
        t("terms.orders_4", "We accept major credit cards, digital wallets, and other payment methods as displayed at checkout."),
        t("terms.orders_5", "You are responsible for providing accurate billing and shipping information."),
      ],
    },
    {
      title: t("terms.delivery_title", "Delivery Terms"),
      content: [
        t("terms.delivery_1", "Delivery times are estimates and not guaranteed."),
        t("terms.delivery_2", "Risk of loss and title for items pass to you upon delivery to the carrier."),
        t("terms.delivery_3", "We are not responsible for delays caused by weather, natural disasters, or other circumstances beyond our control."),
        t("terms.delivery_4", "Someone must be available to receive perishable deliveries."),
        t("terms.delivery_5", "Delivery address changes may incur additional fees."),
      ],
    },
    {
      title: t("terms.returns_title", "Returns and Refunds"),
      content: [
        t("terms.returns_1", "Our return policy is detailed on our Return Policy page and is incorporated by reference into these terms."),
        t("terms.returns_2", "Returns must be reported within specified timeframes due to the perishable nature of our products."),
        t("terms.returns_3", "Refunds will be processed to the original payment method within 3-5 business days of approval."),
        t("terms.returns_4", "We reserve the right to refuse returns that do not meet our policy requirements."),
      ],
    },
    {
      title: t("terms.accounts_title", "User Accounts"),
      content: [
        t("terms.accounts_1", "You are responsible for maintaining the confidentiality of your account and password."),
        t("terms.accounts_2", "You agree to accept responsibility for all activities that occur under your account."),
        t("terms.accounts_3", "You must notify us immediately of any unauthorized use of your account."),
        t("terms.accounts_4", "We reserve the right to terminate accounts that violate these terms."),
      ],
    },
    {
      title: t("terms.prohibited_title", "Prohibited Uses"),
      content: [
        t("terms.prohibited_1", "You may not use our service:"),
        t("terms.prohibited_2", "• For any unlawful purpose or to solicit others to perform unlawful acts"),
        t("terms.prohibited_3", "• To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances"),
        t("terms.prohibited_4", "• To infringe upon or violate our intellectual property rights or the intellectual property rights of others"),
        t("terms.prohibited_5", "• To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate"),
     
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          {t("terms.terms_conditions_title", "Terms & Conditions")}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t(
            "terms.terms_desc",
            "Please read these terms and conditions carefully before using our service."
          )}
        </p>
      </div>

      {/* Important Notice */}
      <div className="bg-red-100 rounded-lg p-6 mb-12">
        <div className="flex items-start space-x-4">
          <AlertTriangle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
          <div>
            <h2 className="text-lg font-semibold text-primary mb-2">
              {t("terms.Legal", "Important Legal Information")}
            </h2>
            <p className="text-muted-foreground">
              {t(
                "terms.legal_desc",
                "These terms constitute a legally binding agreement between you and FreshFruit. By using our services, you agree to these terms in their entirety. Please contact us if you have any questions."
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          {t("terms.QuickNavigation", "Quick Navigation")}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {sections.map((section, index) => (
            <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <FileText className="h-5 w-5 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">{section.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Terms Sections */}
      <div className="space-y-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        {sections.map((section, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Scale className="h-5 w-5 mr-2 text-primary" />
                {index + 1}. {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
