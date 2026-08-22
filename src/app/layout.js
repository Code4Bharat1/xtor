import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ClientNavbarWrapper from "@/layout/ClientNavbarWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://xtorcind.com/"),
  title: {
    default: "XTORC | Hydraulic Torque Wrenches & Industrial Bolting Tools",
    template: "%s | XTORC"
  },
  description:
    "XTORC supplies high-performance hydraulic torque wrenches, flange facing machines, and bolt tensioners for oil, gas, marine, and power industries.",
  keywords: [
    "Hydraulic Torque Wrench",
    "Flange Facing Machine",
    "Pipe Cutting Machine",
    "Bolt Tensioners",
    "Industrial Bolting Tools",
    "Controlled Bolting Equipment",
    "Hydraulic Torque Tools",
    "Flange Facing Equipment",
  ],
  openGraph: {
    title: "XTORC | Hydraulic Torque Wrenches & Industrial Bolting Tools",
    description:
      "Explore high-quality hydraulic torque wrenches, flange facing machines, bolt tensioners, and pipe cutting machines at XTORC. Serving oil & gas, petrochemical, marine, power plant, and construction industries.",
    url: "https://xtorcind.com/",
    siteName: "XTORC",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "XTORC Hydraulic Torque Tools and Industrial Bolting Equipment",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XTORC | Hydraulic Torque Wrenches & Industrial Bolting Tools",
    description:
      "Buy hydraulic torque wrenches, flange facing machines, bolt tensioners, and pipe cutting machines from XTORC. Trusted supplier for industrial projects in India.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://xtorcind.com/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const fbPixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

  return (
    <html lang="en" className="overflow-x-clip" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (sessionStorage.getItem('hasSeenSplash')) {
                  document.documentElement.classList.add('splash-hidden');
                }
              } catch (e) {}
            `,
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .splash-hidden #initial-splash-overlay {
                display: none !important;
              }
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-clip`}
      >
        {/* Instant 0ms SSR Splash Overlay (Zero Navbar Flash) */}
        <div
          id="initial-splash-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "#000000",
            zIndex: 999999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "opacity 0.6s ease, visibility 0.6s ease",
          }}
        >
          <img
            src="/XTORC_LOGO.png"
            alt="Splash Logo"
            style={{ width: "min(640px, 90vw)", height: "auto", objectFit: "contain" }}
          />
        </div>

        {/* Google Analytics (GA4) */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}

        {/* Facebook Pixel */}
        {fbPixelId && (
          <Script id="facebook-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${fbPixelId}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}

        <ClientNavbarWrapper>
          {children}
        </ClientNavbarWrapper>
      </body>
    </html>
  );
}
