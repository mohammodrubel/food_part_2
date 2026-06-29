// "use client";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import {
//   Phone,
//   Mail,
//   MessageCircle,
//   Clock,
//   Search,
//   HelpCircle,
//   Truck,
//   CreditCard,
//   RotateCcw,
//   User,
// } from "lucide-react";
// import useTranslation from "@/hooks/useTranslation";

// export default function SupportPage() {
//   const t = useTranslation();
//   const contactMethods = [
//     {
//       icon: <Phone className="h-8 w-8" />,
//       title: "Phone Support",
//       description: "Speak directly with our support team",
//       details: "(555) 123-FRUIT",
//       availability: "7 days a week, 8 AM - 8 PM EST",
//       responseTime: "Immediate",
//       primary: true,
//     },
//     {
//       icon: <MessageCircle className="h-8 w-8" />,
//       title: "Live Chat",
//       description: "Get instant help through live chat",
//       details: "Available on website",
//       availability: "7 days a week, 8 AM - 10 PM EST",
//       responseTime: "Under 2 minutes",
//       primary: true,
//     },

//   ];

//   const faqCategories = [
//     {
//       icon: <Truck className="h-5 w-5" />,
//       category: "Orders & Delivery",
//       questions: [
//         {
//           question: "How do I track my order?",
//           answer:
//             "Once your order ships, you'll receive a tracking number via email and SMS. You can also track your order by logging into your account and visiting the 'My Orders' section.",
//         },
//         {
//           question: "What if I'm not home for delivery?",
//           answer:
//             "Our delivery partners will attempt delivery and leave a notice if you're not available. For perishable items, we recommend scheduling delivery when someone will be home, or use our delivery instructions feature to specify a safe location.",
//         },
//         {
//           question: "Can I change my delivery address after ordering?",
//           answer:
//             "Yes, you can change your delivery address within 1 hour of placing your order. Contact our support team immediately, and we'll update your delivery details if the order hasn't been processed yet.",
//         },
//         {
//           question: "Do you deliver on weekends?",
//           answer:
//             "Yes! We offer delivery 7 days a week. Weekend delivery slots are popular, so we recommend booking in advance to secure your preferred time.",
//         },
//       ],
//     },
//     {
//       icon: <CreditCard className="h-5 w-5" />,
//       category: "Payment & Billing",
//       questions: [
//         {
//           question: "What payment methods do you accept?",
//           answer:
//             "We accept all major credit cards (Visa, Mastercard, American Express, Discover), digital wallets (Apple Pay, Google Pay, PayPal), and bank transfers for orders over $100.",
//         },
//         {
//           question: "When will I be charged?",
//           answer:
//             "Your payment method is charged when your order is prepared for shipping. For pre-orders, payment is processed when items become available.",
//         },
//         {
//           question: "Can I get a receipt for my order?",
//           answer:
//             "Yes! You'll automatically receive an email receipt after your order is placed. You can also download receipts from your account dashboard at any time.",
//         },
//         {
//           question: "Do you offer payment plans?",
//           answer:
//             "Currently, we don't offer payment plans, but we do offer subscription discounts for recurring orders and bulk order discounts for large purchases.",
//         },
//       ],
//     },
  
//   ];

//   const quickActions = [
//     {
//       title: "Track Order",
//       description: "Check your delivery status",
//       icon: <Truck className="!h-10 !w-10 !text-[#42b883]" />,
//     },
//     {
//       title: "Report Issue",
//       description: "Quality or delivery problems",
//       icon: <HelpCircle className="!h-10 !w-10 text-[#a8e6cf]" />,
//     },
//     {
//       title: "Manage Account",
//       description: "Update profile and preferences",
//       icon: <User className="!h-10 !w-10 text-[#7dd87d]" />,
//     },
//     {
//       title: "View Orders",
//       description: "See order history",
//       icon: <Search className="!h-10 !w-10 text-[#044a42]" />,
//     },
//   ];

//   return (
//     <div className="container mx-auto px-4 py-12">
//       {/* Header */}
//       <div className="text-center py-10 bg-[#defcf9] rounded-2xl mb-12">
//         <h1 className="text-4xl font-bold text-foreground mb-4">
//           {t("support.zones.title", "Help & Support")}
//         </h1>
//         <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//           We're here to help! Find answers to common questions or get in touch
//           with our support team.
//         </p>
//       </div>

//       {/* Quick Actions */}
//       <section className="mb-12">
//         <h2 className="text-2xl font-bold text-foreground mb-6">
//           Quick Actions
//         </h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-4">
//           {quickActions.map((action, index) => (
//             <Card
//               key={index}
//               className="cursor-pointer text-center  hover:shadow-md transition-shadow"
//             >
//               <CardContent className="pt-6 ">
//                 <div className=" flex justify-center  text-primary mb-3">
//                   {action.icon}
//                 </div>
//                 <h3 className="font-semibold mb-1">{action.title}</h3>
//                 <p className="text-sm text-muted-foreground">
//                   {action.description}
//                 </p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </section>

//       {/* Contact Methods */}
//       <section className="mb-12">
//         <h2 className="text-2xl font-bold text-foreground mb-6">
//           Contact Our Support Team
//         </h2>
//         <div className="flex justify-center items-center">
//   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//     {contactMethods.map((method, index) => (
//       <Card
//         key={index}
//         className={`relative ${
//           method.primary ? "ring-2 ring-primary" : ""
//         }`}
//       >
//         {method.primary && (
//           <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
//             Recommended
//           </Badge>
//         )}
//         <CardHeader className="text-center">
//           <div className="flex justify-center text-primary mb-4">
//             {method.icon}
//           </div>
//           <CardTitle className="text-xl text-[#287D50]">
//             {method.title}
//           </CardTitle>
//           <CardDescription>{method.description}</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-3 text-center">
//             <div>
//               <p className="font-semibold text-primary">
//                 {method.details}
//               </p>
//             </div>
//             <div className="space-y-1">
//               <div className="flex items-center justify-center text-sm">
//                 <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
//                 <span className="text-muted-foreground">
//                   {method.availability}
//                 </span>
//               </div>
//               <p className="text-sm text-muted-foreground">
//                 Response: {method.responseTime}
//               </p>
//             </div>
//             <Button className="w-full bg-[#287D50] hover:bg-[#287D50]">
//               {method.title === "Phone Support" && "Call Now"}
//               {method.title === "Live Chat" && "Start Chat"}
//               {method.title === "Email Support" && "Send Email"}
//             </Button>
//           </div>
//         </CardContent>
//       </Card>
//     ))}
//   </div>
// </div>

//       </section>

//       {/* FAQ Section */}
//       <section className="mb-12">
//         <h2 className="text-2xl font-bold text-foreground mb-6">
//           Frequently Asked Questions
//         </h2>
//         <div className="space-y-6 grid grid-cols-1 lg:grid-cols-2 item-center gap-10">
//           {faqCategories.map((category, categoryIndex) => (
//             <Card key={categoryIndex}>
//               <CardHeader>
//                 <CardTitle className="flex items-center">
//                   <div className="text-primary mr-2">{category.icon}</div>
//                   {category.category}
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <Accordion type="single" collapsible className="w-full">
//                   {category.questions.map((faq, faqIndex) => (
//                     <AccordionItem
//                       key={faqIndex}
//                       value={`${categoryIndex}-${faqIndex}`}
//                     >
//                       <AccordionTrigger className="text-left">
//                         {faq.question}
//                       </AccordionTrigger>
//                       <AccordionContent>
//                         <p className="text-muted-foreground">{faq.answer}</p>
//                       </AccordionContent>
//                     </AccordionItem>
//                   ))}
//                 </Accordion>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </section>

//       {/* Additional Resources */}
//       <section className="mb-12">
//         <h2 className="text-2xl font-bold text-foreground mb-6">
//           Additional Resources
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           <Card>
//             <CardContent className="pt-6 text-center">
//               <Truck className="h-8 w-8 text-[#1bf5af] mx-auto mb-3 " />
//               <h3 className="font-semibold mb-2">Delivery Info</h3>
//               <p className="text-sm text-muted-foreground mb-3">
//                 Learn about our delivery zones and timing
//               </p>
//               <Button
//                 variant="outline"
//                 size="sm"
//                 className="w-full bg-[#287D50] text-white"
//               >
//                 View Details
//               </Button>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardContent className="pt-6 text-center">
//               <RotateCcw className="h-8 w-8 text-[#00b7c2] mx-auto mb-3" />
//               <h3 className="font-semibold mb-2">Return Policy</h3>
//               <p className="text-sm text-muted-foreground mb-3">
//                 Understand our quality guarantee
//               </p>
//               <Button
//                 variant="outline"
//                 size="sm"
//                 className="w-full bg-[#287D50] text-white"
//               >
//                 Read Policy
//               </Button>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardContent className="pt-6 text-center">
//               <CreditCard className="h-8 w-8 text-[#3a9679] mx-auto mb-3" />
//               <h3 className="font-semibold mb-2">Payment Methods</h3>
//               <p className="text-sm text-muted-foreground mb-3">
//                 See all accepted payment options
//               </p>
//               <Button
//                 variant="outline"
//                 size="sm"
//                 className="w-full bg-[#287D50] text-white"
//               >
//                 Learn More
//               </Button>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardContent className="pt-6 text-center">
//               <HelpCircle className="h-8 w-8 text-[#36d1c4] mx-auto mb-3" />
//               <h3 className="font-semibold mb-2">About Us</h3>
//               <p className="text-sm text-muted-foreground mb-3">
//                 Learn about our mission and values
//               </p>
//               <Button
//                 variant="outline"
//                 size="sm"
//                 className="w-full bg-[#287D50] text-white"
//               >
//                 Our Story
//               </Button>
//             </CardContent>
//           </Card>
//         </div>
//       </section>

     
//     </div>
//   );
// }




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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Search,
  HelpCircle,
  Truck,
  CreditCard,
  RotateCcw,
  User,
} from "lucide-react";
import useTranslation from "@/hooks/useTranslation";

export default function SupportPage() {
  const  t  = useTranslation();

  const contactMethods = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: t("support.contact_phone_title", "Phone Support"),
      description: t("support.contact.phone.description", "Speak directly with our support team"),
      details: "(555) 123-FRUIT",
      availability: t("support.contact.phone.availability", "7 days a week, 8 AM - 8 PM EST"),
      responseTime: t("support.contact.phone.response", "Immediate"),
      primary: true,
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: t("support.contact.chat.title", "Live Chat"),
      description: t("support.contact.chat.description", "Get instant help through live chat"),
      details: t("support.contact.chat.details", "Available on website"),
      availability: t("support.contact.chat.availability", "7 days a week, 8 AM - 10 PM EST"),
      responseTime: t("support.contact.chat.response", "Under 2 minutes"),
      primary: true,
    },
  ];



const faqCategories = [
  {
    icon: <Truck className="h-5 w-5" />,
    category: t("support.faq.orders.category", "Orders & Delivery"),
    questions: [
      {
        question: t("support.faq.orders.q1", "How do I track my order?"),
        answer: t(
          "support.faq.orders.a1",
          "Once your order ships, you'll receive a tracking number via email and SMS. You can also track your order by logging into your account and visiting the 'My Orders' section."
        ),
      },
      {
        question: t("support.faq.orders.q2", "What if I'm not home for delivery?"),
        answer: t(
          "support.faq.orders.a2",
          "Our delivery partners will attempt delivery and leave a notice if you're not available. For perishable items, we recommend scheduling delivery when someone will be home, or use our delivery instructions feature to specify a safe location."
        ),
      },
      {
        question: t(
          "support.faq.orders.q3",
          "Can I change my delivery address after ordering?"
        ),
        answer: t(
          "support.faq.orders.a3",
          "Yes, you can change your delivery address within 1 hour of placing your order. Contact our support team immediately, and we'll update your delivery details if the order hasn't been processed yet."
        ),
      },
      {
        question: t("support.faq.orders.q4", "Do you deliver on weekends?"),
        answer: t(
          "support.faq.orders.a4",
          "Yes! We offer delivery 7 days a week. Weekend delivery slots are popular, so we recommend booking in advance to secure your preferred time."
        ),
      },
    ],
  },
  {
    icon: <CreditCard className="h-5 w-5" />,
    category: t("support.faq.payment.category", "Payment & Billing"),
    questions: [
      {
        question: t("support.faq.payment.q1", "What payment methods do you accept?"),
        answer: t(
          "support.faq.payment.a1",
          "We accept all major credit cards (Visa, Mastercard, American Express, Discover), digital wallets (Apple Pay, Google Pay, PayPal), and bank transfers for orders over $100."
        ),
      },
      {
        question: t("support.faq.payment.q2", "When will I be charged?"),
        answer: t(
          "support.faq.payment.a2",
          "Your payment method is charged when your order is prepared for shipping. For pre-orders, payment is processed when items become available."
        ),
      },
      {
        question: t("support.faq.payment.q3", "Can I get a receipt for my order?"),
        answer: t(
          "support.faq.payment.a3",
          "Yes! You'll automatically receive an email receipt after your order is placed. You can also download receipts from your account dashboard at any time."
        ),
      },
      {
        question: t("support.faq.payment.q4", "Do you offer payment plans?"),
        answer: t(
          "support.faq.payment.a4",
          "Currently, we don't offer payment plans, but we do offer subscription discounts for recurring orders and bulk order discounts for large purchases."
        ),
      },
    ],
  },
];

const quickActions = [
  {
    title: t("support.quick.track.title", "Track Order"),
    description: t("support.quick.track.desc", "Check your delivery status"),
    icon: <Truck className="!h-10 !w-10 !text-[#42b883]" />,
  },
  {
    title: t("support.quick.report.title", "Report Issue"),
    description: t("support.quick.report.desc", "Quality or delivery problems"),
    icon: <HelpCircle className="!h-10 !w-10 text-[#a8e6cf]" />,
  },
  {
    title: t("support.quick.account.title", "Manage Account"),
    description: t("support.quick.account.desc", "Update profile and preferences"),
    icon: <User className="!h-10 !w-10 text-[#7dd87d]" />,
  },
  {
    title: t("support.quick.orders.title", "View Orders"),
    description: t("support.quick.orders.desc", "See order history"),
    icon: <Search className="!h-10 !w-10 text-[#044a42]" />,
  },
];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center py-10 bg-[#defcf9] rounded-2xl mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          {t("support.header_title", "Help & Support")}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t("support.header.subtitle", "We're here to help! Find answers to common questions or get in touch with our support team.")}
        </p>
      </div>

      {/* Quick Actions */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          {t("support.quick.title", "Quick Actions")}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-4">
          {quickActions.map((action, index) => (
            <Card key={index} className="cursor-pointer text-center hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-center text-primary mb-3">{action.icon}</div>
                <h3 className="font-semibold mb-1">{action.title}</h3>
                <p className="text-sm text-muted-foreground">{action.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Methods */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          {t("support.contact.title", "Contact Our Support Team")}
        </h2>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className={`relative ${method.primary ? "ring-2 ring-primary" : ""}`}>
                {method.primary && (
                  <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    {t("support.contact.recommended", "Recommended")}
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="flex justify-center text-primary mb-4">{method.icon}</div>
                  <CardTitle className="text-xl text-[#287D50]">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-center">
                    <p className="font-semibold text-primary">{method.details}</p>
                    <div className="space-y-1">
                      <div className="flex items-center justify-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-muted-foreground">{method.availability}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {t("support.contact.response", "Response")}: {method.responseTime}
                      </p>
                    </div>
                    <Button className="w-full bg-[#287D50] hover:bg-[#287D50]">
                      {method.title.includes("Phone") && t("support.contact.actions.call", "Call Now")}
                      {method.title.includes("Chat") && t("support.contact.actions.chat", "Start Chat")}
                      {method.title.includes("Email") && t("support.contact.actions.email", "Send Email")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          {t("support.faq.title", "Frequently Asked Questions")}
        </h2>
        <div className="space-y-6 grid grid-cols-1 lg:grid-cols-2 item-center gap-10">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="text-primary mr-2">{category.icon}</div>
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
