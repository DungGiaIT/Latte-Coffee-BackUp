import { CartProvider } from "@/app/components/CartContext";
import DashboardSkeleton from "@/app/components/DashboardSkeleton";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Script from "next/script";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Latte Coffee - Premium Coffee Experience",
  description:
    "Discover our handcrafted selection of premium coffees, expertly prepared to delight your senses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8M7XTCXXEJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8M7XTCXXEJ');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <Suspense fallback={<DashboardSkeleton />}>
              <main className="flex-grow">{children}</main>
            </Suspense>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
