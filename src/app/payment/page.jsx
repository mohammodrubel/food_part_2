"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CreditCard,
  Wallet,
  Shield,
  Lock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import useTranslation from "@/hooks/useTranslation";

export default function PaymentPage() {
  const t = useTranslation();

  const securityFeatures = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: t("payment.security_ssl", "SSL Encryption"),
      description: t(
        "payment.security_ssl_desc",
        "All transactions are protected with 256-bit SSL encryption"
      ),
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: t("payment.security_pci", "PCI Compliance"),
      description: t(
        "payment.security_pci_desc",
        "We meet the highest standards for payment card security"
      ),
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: t("payment.security_fraud", "Fraud Protection"),
      description: t(
        "payment.security_fraud_desc",
        "Advanced fraud detection systems monitor all transactions"
      ),
    },
  ];

  const billingInfo = [
    {
      title: t("payment.billing_address", "Billing Address"),
      details: [
        t("payment.billing_address_1", "Must match your payment method address"),
        t("payment.billing_address_2", "Required for all credit card transactions"),
        t("payment.billing_address_3", "Can be different from delivery address"),
        t("payment.billing_address_4", "Verified for security purposes"),
      ],
    },
    {
      title: t("payment.billing_processing", "Payment Processing"),
      details: [
        t("payment.billing_processing_1", "Charges processed when order ships"),
        t("payment.billing_processing_2", "Pre-authorization may appear immediately"),
        t("payment.billing_processing_3", "Refunds processed within 3-5 business days"),
        t("payment.billing_processing_4", "Currency: USD only"),
      ],
    },
    {
      title: t("payment.billing_subscription", "Subscription Billing"),
      details: [
        t("payment.billing_subscription_1", "Recurring orders billed automatically"),
        t("payment.billing_subscription_2", "5% discount on all subscription orders"),
        t("payment.billing_subscription_3", "Cancel or modify anytime before next billing"),
        t("payment.billing_subscription_4", "Email notifications before each charge"),
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          {t("payment.title", "Payment Methods")}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t(
            "payment.subtitle",
            "We accept multiple secure payment options to make your fresh fruit shopping experience convenient and safe."
          )}
        </p>
      </div>

      {/* Security Banner */}
      <div className="bg-[#defcf9] rounded-lg p-6 mb-12">
        <div className="flex items-center justify-center mb-4">
          <Shield className="h-8 w-8 text-primary mr-3" />
          <h2 className="text-2xl font-bold text-primary">
            {t("payment.secure_banner", "100% Secure Payments")}
          </h2>
        </div>
        <p className="text-center text-muted-foreground">
          {t(
            "payment.secure_banner_desc",
            "Your payment information is encrypted and secure. We never store your credit card details on our servers."
          )}
        </p>
      </div>

      {/* Security Features */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          {t("payment.security_title", "Security Features")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="bg-[#a8e6cf]">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 text-primary">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Billing Information */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          {t("payment.billing_title", "Billing Information")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {billingInfo.map((info, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {info.details.map((detail, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Payment Process */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          {t("payment.process_title", "How Payment Works")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              step: "1",
              title: t("payment.process_step1", "Add to Cart"),
              desc: t("payment.process_step1_desc", "Select your fresh fruits and proceed to checkout"),
            },
            {
              step: "2",
              title: t("payment.process_step2", "Choose Payment"),
              desc: t("payment.process_step2_desc", "Select your preferred payment method"),
            },
            {
              step: "3",
              title: t("payment.process_step3", "Secure Processing"),
              desc: t("payment.process_step3_desc", "Payment is encrypted and processed securely"),
            },
            {
              step: "4",
              title: t("payment.process_step4", "Order Confirmed"),
              desc: t("payment.process_step4_desc", "Receive confirmation and tracking information"),
            },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {item.step}
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Special Offers */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          {t("payment.offers_title", "Payment Offers")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-r from-green-100 to-green-200 border-green-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Wallet className="h-5 w-5 mr-2 text-green-600" />
                {t("payment.offers_first_time", "First-Time Customer Discount")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {t(
                  "payment.offers_first_time_desc",
                  "Get 15% off your first order when you pay with any digital wallet."
                )}
              </p>
              <Button
                variant="outline"
                className="w-full bg-transparent border-green-200 text-green-700"
              >
                {t("payment.offers_learn_more", "Learn More")}
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-100 to-green-200 border-green-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2 text-green-600" />
                {t("payment.offers_subscription", "Subscription Savings")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {t(
                  "payment.offers_subscription_desc",
                  "Save 5% on all recurring orders with automatic billing setup."
                )}
              </p>
              <Button
                variant="outline"
                className="w-full bg-transparent border-green-400 text-green-700"
              >
                {t("payment.offers_setup_subscription", "Set Up Subscription")}
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-6">
          {t("payment.faq_title", "Payment FAQ")}
        </h2>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-2 text-primary" />
                  {t("payment.faq_q1", "When will I be charged?")}
                </h3>
                <p className="text-sm text-muted-foreground ml-6">
                  {t(
                    "payment.faq_a1",
                    "Your payment method will be charged when your order is prepared for shipping. For pre-orders, payment is processed when items become available."
                  )}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-2 text-primary" />
                  {t("payment.faq_q2", "Can I change my payment method after ordering?")}
                </h3>
                <p className="text-sm text-muted-foreground ml-6">
                  {t(
                    "payment.faq_a2",
                    "Payment methods can be updated within 1 hour of placing your order. Contact our support team for assistance."
                  )}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-2 text-primary" />
                  {t("payment.faq_q3", "What if my payment fails?")}
                </h3>
                <p className="text-sm text-muted-foreground ml-6">
                  {t(
                    "payment.faq_a3",
                    "If payment fails, we'll notify you immediately and hold your order for 24 hours while you update your payment information."
                  )}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
