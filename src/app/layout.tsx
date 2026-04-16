import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'ديزاين الرياض | أفضل مركز سمكرة ودهان سيارات في الرياض - ضمان 5 سنوات',
  description: 'مركز ديزاين الرياض المتخصص في سمكرة ودهان السيارات بالكمبيوتر، إصلاح الصدمات، رش مطفي ولمعة، ميكانيكا، وكهرباء السيارات. جودة الوكالة مع ضمان معتمد.',
  keywords: 'سمكرة سيارات الرياض، ورشة دهان سيارات، رش بوية فرن، إصلاح صدمات، تجديد سيارات، ميكانيكا سيارات، كهرباء سيارات، مركز ديزاين الرياض، صيانة سيارات الرياض، ورشة سمكرة محترفة',
  alternates: {
    canonical: 'https://design-riyadh.sa',
  },
  openGraph: {
    title: 'ديزاين الرياض - خبراء السمكرة والدهان وصيانة السيارات',
    description: 'نقدم خدمات السمكرة والدهان والميكانيكا بأعلى جودة مع ضمان 5 سنوات في الرياض.',
    url: 'https://design-riyadh.sa',
    siteName: 'ديزاين الرياض',
    images: [
      {
        url: 'https://i.postimg.cc/zvTBzNXw/desinbanar.jpg',
        width: 1200,
        height: 630,
        alt: 'مركز ديزاين الرياض لصيانة السيارات',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ديزاين الرياض - أفضل مركز سمكرة ودهان سيارات',
    description: 'صيانة احترافية، سمكرة، ودهان سيارات في قلب الرياض مع ضمان 5 سنوات.',
    images: ['https://i.postimg.cc/zvTBzNXw/desinbanar.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "ديزاين الرياض لصيانة السيارات",
    "image": "https://i.postimg.cc/zvTBzNXw/desinbanar.jpg",
    "@id": "https://design-riyadh.sa",
    "url": "https://design-riyadh.sa",
    "telephone": "+966533112111",
    "priceRange": "$$",
    "hasMap": "https://maps.app.goo.gl/LLBYi4yGaBtMqJpe7",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "الصناعية القديمة",
      "addressLocality": "الرياض",
      "addressRegion": "الرياض",
      "postalCode": "11564",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.6333,
      "longitude": 46.7333
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "opens": "08:00",
      "closes": "21:00"
    },
    "description": "أفضل مركز متخصص في سمكرة ودهان السيارات في الرياض مع ضمان 5 سنوات ومطابقة ألوان بالكمبيوتر."
  };

  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* Google Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18086622285"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18086622285');
          `}
        </Script>
        
        {/* Event snippet for مشاهدة صفحة conversion page */}
        <Script id="google-conversion-tag" strategy="afterInteractive">
          {`
            gtag('event', 'conversion', {'send_to': 'AW-18086622285/PFOKCKf2j50cEM3or7BD'});
          `}
        </Script>
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
