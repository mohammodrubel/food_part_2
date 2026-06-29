import Header from "@/components/Header/Header";
import "flag-icons/css/flag-icons.min.css";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

export const metadata = {
  metadataBase: new URL("https://originaz.com"),

  title: {
    default: "Originaz - Fresh Fruits Online | Organic & Farm Fresh Fruits",
    template: "%s | Originaz",
  },

  description:
    "Originaz is an online fruit marketplace where you can buy fresh, organic, and farm-picked fruits delivered directly to your home.",

  keywords: [
    "buy fruits online",
    "fresh fruits",
    "organic fruits",
    "fruit delivery",
    "online fruit shop",
  ],

  icons: {
    icon: [
      { url: "/favicon.jpg", type: "image/jpeg" },
      { url: "/favicon.jpg", sizes: "32x32", type: "image/jpeg" },
      { url: "/favicon.jpg", sizes: "16x16", type: "image/jpeg" },
    ],
    shortcut: "/favicon.jpg",
    apple: "/favicon.jpg",
  },

  openGraph: {
    title: "Originaz - Fresh Fruits Delivered to Your Door",
    description: "Buy fresh and organic fruits online.",
    url: "https://originaz.com",
    siteName: "Originaz",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}