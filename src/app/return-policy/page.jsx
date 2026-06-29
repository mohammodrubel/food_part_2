"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Clock,
  XCircle,
  AlertTriangle,
} from "lucide-react";
import useTranslation from "@/hooks/useTranslation";

export default function ReturnPolicyPage() {
  const t = useTranslation();

  const returnReasons = [
    {
      reason: t("returnReasons.quality_title", "Quality Issues"),
      icon: <AlertTriangle className="h-8 w-8" />,
      timeframe: t("returnReasons.quality_timeframe", "24 hours"),
      refundType: t("returnReasons.quality_refund", "Full refund + credit"),
      description: t(
        "returnReasons.quality_description",
        "Damaged, spoiled, or not fresh upon delivery"
      ),
      color: "text-red-500",
    },
    {
      reason: t("returnReasons.wrong_title", "Wrong Item"),
      icon: <XCircle className="h-8 w-8" />,
      timeframe: t("returnReasons.wrong_timeframe", "48 hours"),
      refundType: t("returnReasons.wrong_refund", "Full refund"),
      description: t(
        "returnReasons.wrong_description",
        "Received different fruits than ordered"
      ),
      color: "text-orange-500",
    },
    {
      reason: t("returnReasons.delivery_titlee", "Delivery Issues"),
      icon: <Clock className="h-8 w-8" />,
      timeframe: t("returnReasons.delivery_timeframe", "72 hours"),
      refundType: t("returnReasons.delivery_refund", "Full refund"),
      description: t(
        "returnReasons.delivery_description",
        "Late delivery causing spoilage"
      ),
      color: "text-blue-500",
    },
  ];

  const returnProcess = [
    {
      step: 1,
      title: t("returnProcess.step1_title", "Contact Us"),
      description: t(
        "returnProcess.step1_description",
        "Report the issue within the specified timeframe"
      ),
      action: t("returnProcess.step1_action", "Call, email, or use our online form"),
    },
    {
      step: 2,
      title: t("returnProcess.step2_title", "Provide Details"),
      description: t(
        "returnProcess.step2_description",
        "Share photos and order information"
      ),
      action: t("returnProcess.step2_action", "Upload photos of the issue"),
    },
    {
      step: 3,
      title: t("returnProcess.step3_title", "Get Approval"),
      description: t(
        "returnProcess.step3_description",
        "We'll review and approve your return request"
      ),
      action: t("returnProcess.step3_action", "Receive confirmation within 2 hours"),
    },
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-20">
        <h1 className="text-5xl font-extrabold text-primary mb-6 tracking-tight drop-shadow-sm">
          {t("returnPrivacy.return_title", "Return Policy")}
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {t(
            "returnPrivacy.return_subtitle",
            "Your satisfaction is our priority. We stand behind the quality of our fresh fruits with a comprehensive return and refund policy."
          )}
        </p>
      </div>

      {/* Quality Guarantee Banner */}
      <div className="relative bg-gradient-to-r from-[#defcf9] via-[#c8f6e7] to-[#93e4c1] rounded-3xl p-12 mb-20 shadow-xl overflow-hidden">
        <div className="flex items-center justify-center mb-6 relative z-10">
          <Shield className="h-12 w-12 text-primary mr-4" />
          <h2 className="text-4xl font-bold text-primary">
            {t("returnPrivacy.banner_title", "100% Freshness Guarantee")}
          </h2>
        </div>
        <p className="text-center text-muted-foreground text-lg relative z-10">
          {t(
            "returnPrivacy.banner_description",
            "If you're not completely satisfied with the quality and freshness of your fruits, we'll make it right with a full refund or replacement."
          )}
        </p>
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
      </div>

      {/* Return Reasons */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
          {t("returnReasons.Reasons_title", "Valid Return Reasons")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {returnReasons.map((item, index) => (
            <Card
              key={index}
              className="bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl p-6"
            >
              <CardHeader className="text-center">
                <div className={`flex justify-center mb-5 ${item.color}`}>
                  <div className="p-4 rounded-full bg-gray-50 shadow-inner">
                    {item.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold mb-2">
                  {item.reason}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="text-sm font-medium">
                      {t("returnReasons.timeframe", "Timeframe:")}
                    </span>
                    <Badge variant="outline" className="px-3 py-1 text-xs">
                      {item.timeframe}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">
                      {t("returnReasons.refund", "Refund:")}
                    </span>
                    <span className="text-sm text-primary font-semibold">
                      {item.refundType}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Return Process */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
          {t("returnProcess.returnProcesstitle", "How to Return")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {returnProcess.map((step, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-white to-gray-50 rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-md">
                {step.step}
              </div>
              <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                {step.description}
              </p>
              <p className="text-xs text-primary font-medium uppercase tracking-wide">
                {step.action}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
