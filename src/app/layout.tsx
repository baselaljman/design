import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'ديزاين الرياض | مركز صيانة سيارات متكامل - سمكرة ودهان وميكانيكا',
  description: 'أفضل مركز صيانة سيارات في الرياض متخصص في السمكرة والدهان، تجديد السيارات، إصلاح الأيرباق، والميكانيكا. نضمن لك الجودة العالية ومطابقة الألوان بالكمبيوتر.',
  keywords: 'سمكرة سيارات الرياض, ورشة دهان سيارات, إصلاح أيرباق, ميكانيكا سيارات الرياض, تجديد سيارات, ديزاين الرياض',
  openGraph: {
    title: 'ديزاين الرياض - خبراء صيانة السيارات',
    description: 'مركزنا في الرياض يقدم خدمات السمكرة والدهان والميكانيكا بأعلى جودة مع ضمان 5 سنوات.',
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
    title: 'ديزاين الرياض - خبراء صيانة السيارات',
    description: 'صيانة احترافية، سمكرة، ودهان سيارات في قلب الرياض.',
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
    "@type": "AutomotiveBusiness",
    "name": "ديزاين الرياض لصيانة السيارات",
    "image": "https://i.postimg.cc/zvTBzNXw/desinbanar.jpg",
    "@id": "",
    "url": "https://design-riyadh.sa",
    "telephone": "+966533112111",
    "hasMap": "https://maps.app.goo.gl/LLBYi4yGaBtMqJpe7",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "صناعية الشمال",
      "addressLocality": "الرياض",
      "addressRegion": "الرياض",
      "postalCode": "11564",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.8193,
      "longitude": 46.6122
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
    }
  };

  return (
    <html lang="ar" dir="rtl">
      <head>
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
