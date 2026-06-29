"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Clock, MapPin, Package, Shield, Calendar } from "lucide-react";
import useTranslation from "@/hooks/useTranslation";

export default function DeliveryPage() {
  const t = useTranslation();

  const deliveryData = {
    header: {
      title: t("delivery.title", "Delivery Information"),
      desc: t(
        "delivery.desc",
        "Fresh fruits delivered to your doorstep with care and precision. Learn about our delivery zones, timing, and policies."
      ),
    },
    quickFacts: [
      {
        icon: Truck,
        title: t("delivery.quick.fastDelivery", "Fast Delivery"),
        desc: t("delivery.quick.sameDay", "Same-day available"),
        bgColor: "bg-[#e0ffcd]",
      },
      {
        icon: Package,
        title: t("delivery.quick.securePackaging", "Secure Packaging"),
        desc: t(
          "delivery.quick.tempControlled",
          "Temperature controlled"
        ),
        bgColor: "bg-[#93e4c1]",
      },
      {
        icon: Shield,
        title: t("delivery.quick.freshness", "Freshness Guarantee"),
        desc: t("delivery.quick.satisfaction", "100% satisfaction"),
        bgColor: "bg-[#feffdf]",
      },
      {
        icon: MapPin,
        title: t("delivery.quick.wideCoverage", "Wide Coverage"),
        desc: t("delivery.quick.zones", "3 delivery zones"),
        bgColor: "bg-[#ecfeff]",
      },
    ],
    zones: [
      {
        zone: t("delivery.zones.zone1", "Zone 1 - City Center"),
        areas: [
          t("delivery.zones.zone1.areas", [
            "Downtown",
            "Business District",
            "Central Park Area",
          ]),
        ],
        deliveryTime: t("delivery.zones.zone1.time", "Same Day"),
        cost: t("delivery.zones.zone1.cost", "Free over $50"),
        standardCost: t("delivery.zones.zone1.standardCost", "$4.99"),
      },
      {
        zone: t("delivery.zones.zone2", "Zone 2 - Suburbs"),
        areas: ["North Hills", "West End", "East Valley", "South Ridge"].map(
          (a) => t(`delivery.zones.zone2.areas.${a}`, a)
        ),
        deliveryTime: t("delivery.zones.zone2.time", "Next Day"),
        cost: t("delivery.zones.zone2.cost", "Free over $75"),
        standardCost: t("delivery.zones.zone2.standardCost", "$6.99"),
      },
      {
        zone: t("delivery.zones.zone3", "Zone 3 - Extended Areas"),
        areas: ["Outer Districts", "Rural Areas", "Mountain View"].map((a) =>
          t(`delivery.zones.zone3.areas.${a}`, a)
        ),
        deliveryTime: t("delivery.zones.zone3.time", "2-3 Days"),
        cost: t("delivery.zones.zone3.cost", "Free over $100"),
        standardCost: t("delivery.zones.zone3.standardCost", "$9.99"),
      },
    ],
    timeSlots: [
      {
        time: "8:00 AM - 12:00 PM",
        label: t("delivery.times.morning", "Morning Delivery"),
        popular: true,
      },
      {
        time: "12:00 PM - 4:00 PM",
        label: t("delivery.times.afternoon", "Afternoon Delivery"),
        popular: false,
      },
      {
        time: "4:00 PM - 8:00 PM",
        label: t("delivery.times.evening", "Evening Delivery"),
        popular: true,
      },
      {
        time: "6:00 PM - 10:00 PM",
        label: t("delivery.times.lateEvening", "Late Evening"),
        popular: false,
      },
    ],
    processSteps: [
      {
        step: 1,
        title: t("delivery.process.order", "Place Your Order"),
        desc: t(
          "delivery.process.selectFruits",
          "Select your fresh fruits and choose delivery time"
        ),
      },
      {
        step: 2,
        title: t("delivery.process.prepare", "We Prepare"),
        desc: t(
          "delivery.process.packing",
          "Fruits are carefully selected and packed"
        ),
      },
      {
        step: 3,
        title: t("delivery.process.onWay", "On The Way"),
        desc: t(
          "delivery.process.track",
          "Track your delivery in real-time"
        ),
      },
      {
        step: 4,
        title: t("delivery.process.delivered", "Delivered Fresh"),
        desc: t(
          "delivery.process.enjoy",
          "Enjoy your fresh, quality fruits"
        ),
      },
    ],
    specialServices: [
      {
        title: t("delivery.services.scheduled", "Scheduled Delivery"),
        icon: Calendar,
        bgColor: "bg-[#edf7fa]",
        desc: t(
          "delivery.services.scheduled.desc",
          "Set up recurring deliveries for your favorite fruits. Perfect for busy families and health-conscious individuals."
        ),
        items: [
          t(
            "delivery.services.scheduled.items.1",
            "Weekly, bi-weekly, or monthly options"
          ),
          t(
            "delivery.services.scheduled.items.2",
            "5% discount on recurring orders"
          ),
          t(
            "delivery.services.scheduled.items.3",
            "Skip or modify anytime"
          ),
        ],
      },
      {
        title: t("delivery.services.express", "Express Delivery"),
        icon: Package,
        bgColor: "bg-[#f4eeff]",
        desc: t(
          "delivery.services.express.desc",
          "Need fruits urgently? Our express service delivers within 2 hours in Zone 1 areas."
        ),
        items: [
          t(
            "delivery.services.express.items.1",
            "2-hour delivery window"
          ),
          t("delivery.services.express.items.2", "Additional $9.99 fee"),
          t("delivery.services.express.items.3", "Available 9 AM - 6 PM"),
        ],
      },
    ],
    importantInfo: [
      {
        title: t("delivery.info.requirements", "Delivery Requirements"),
        items: [
          t(
            "delivery.info.requirements.1",
            "Someone must be present to receive the delivery"
          ),
          t(
            "delivery.info.requirements.2",
            "We require a valid phone number for delivery updates"
          ),
         
        ],
      },
      {
        title: t("delivery.info.weather", "Weather & Delays"),
        items: [
          t(
            "delivery.info.weather.1",
            "Severe weather may cause delivery delays"
          ),
          t(
            "delivery.info.weather.2",
            "You'll be notified of any schedule changes"
          ),
         
        ],
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          {deliveryData.header.title}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {deliveryData.header.desc}
        </p>
      </div>

      {/* Quick Facts */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {deliveryData.quickFacts.map((fact, index) => {
          const Icon = fact.icon;
          return (
            <Card key={index} className={`text-center ${fact.bgColor}`}>
              <CardContent className="pt-6">
                <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold mb-1">{fact.title}</h3>
                <p className="text-sm text-muted-foreground">{fact.desc}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Delivery Zones */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          {t("delivery.zones.title", "Delivery Zones & Pricing")}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {deliveryData.zones.map((zone, index) => (
            <Card key={index} className="relative">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {zone.zone}
                  <Badge variant="outline">{zone.deliveryTime}</Badge>
                </CardTitle>
                <CardDescription>
                  <div className="space-y-2">
                    <p className="font-medium">
                      {t("delivery.zones.coverage", "Coverage Areas:")}
                    </p>
                    <ul className="text-sm space-y-1">
                      {zone.areas.map((area, areaIndex) => (
                        <li key={areaIndex} className="flex items-center">
                          <MapPin className="h-3 w-3 mr-2 text-primary" />
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">
                      {t("delivery.zones.standard", "Standard Delivery:")}
                    </span>
                    <span className="font-semibold">{zone.standardCost}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">
                      {t("delivery.zones.free", "Free Delivery:")}
                    </span>
                    <span className="font-semibold text-primary">{zone.cost}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Time Slots */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          {t("delivery.times.title", "Available Time Slots")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {deliveryData.timeSlots.map((slot, index) => (
            <Card
              key={index}
              className={`relative ${slot.popular ? "ring-2 ring-primary" : ""}`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Clock className="h-5 w-5 text-primary" />
                  {slot.popular && <Badge variant="secondary">{t("delivery.times.popular", "Popular")}</Badge>}
                </div>
                <CardTitle className="text-lg">{slot.label}</CardTitle>
                <CardDescription className="font-medium">{slot.time}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Delivery Process */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          {t("delivery.process.title", "How It Works")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {deliveryData.processSteps.map((step) => (
            <div key={step.step} className="text-center">
              <div className="w-12 h-12 rounded-full text-primary-foreground bg-[#42b883] flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {step.step}
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Special Services */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          {t("delivery.services.title", "Special Services")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {deliveryData.specialServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className={service.bgColor}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon className="h-5 w-5 mr-2 text-primary" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.desc}</p>
                  <ul className="space-y-2 text-sm">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Important Information */}
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-6">
          {t("delivery.info.title", "Important Information")}
        </h2>
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deliveryData.importantInfo.map((info, index) => (
                <div key={index}>
                  <h3 className="font-semibold mb-3">{info.title}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {info.items.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
