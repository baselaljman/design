import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'ديزاين الرياض | أفضل مركز سمكرة ودهان سيارات في الرياض - ضمان 5 سنوات',
  description: 'مركز ديزاين الرياض الرائد في سمكرة ودهان السيارات بالكمبيوتر، تعديل بارد بدون رش، شفط صدمات، إصلاح صدمات، رش مطفي ولمعة، ميكانيكا، وكهرباء السيارات. جودة الوكالة مع ضمان معتمد في الصناعية القديمة.',
  keywords: [
    'سمكرة سيارات الرياض', 'دهان سيارات الرياض', 'ورشة سمكرة', 'ورشة دهان', 'رش بوية فرن', 
    'تعديل بارد', 'تعديل صدمات بدون رش', 'سمكرة على البارد', 'شفط صدمات بالليزر', 'إصلاح صدمات السيارات', 
    'تجديد سيارات قديمة', 'مطابقة ألوان بالكمبيوتر', 'صبغ سيارات', 'ورشة صيانة سيارات', 'سمكرة وكالة', 
    'دهان وكالة', 'إصلاح أيرباق', 'برمجة أيرباق', 'ميكانيكا سيارات الرياض', 'كهرباء سيارات الرياض', 
    'فحص كمبيوتر سيارات', 'صيانة مكيف سيارات', 'شحن فريون', 'تغيير زيت', 'توضيب محركات', 
    'توضيب جيربوكس', 'سمكرة مرسيدس', 'سمكرة بي ام دبليو', 'سمكرة لكزس', 'سمكرة تويوتا', 
    'سمكرة هيونداي', 'سمكرة جينيسيس', 'سمكرة لاندروفر', 'سمكرة رنج روفر', 'سمكرة اودي', 
    'سمكرة بورش', 'ورشة سمكرة في الصناعية القديمة', 'أفضل ورشة سمكرة بالرياض', 'أرخص سمكرة سيارات', 
    'ضمان 5 سنوات سمكرة', 'مركز ديزاين الرياض', 'صيانة سيارات فارهة', 'تعديل صدمات بسيط', 
    'إصلاح خدوش السيارات', 'تلميع سيارات', 'نانو سيراميك الرياض', 'حماية واجهة السيارة', 
    'افلام حماية', 'تظليل عازل حراري', 'تنجيد سيارات', 'إصلاح شواصي', 'سحب شاصي', 
    'وزن أذرعة', 'ميزان الكتروني', 'فحص سيارات قبل الشراء', 'تقديرات حوادث', 'شيخ المعارض', 
    'نجم', 'إصلاح صدمات قوية', 'تجديد صبغة السيارة', 'رش مطفي الرياض', 'رش لمعة وكالة', 
    'ورشة محترفة', 'فنيين فلبينيين سمكرة', 'فنيين مختصين دهان', 'جهاز خلط ألوان', 'بوية الماني', 
    'بوية جوتن سيارات', 'صيانة هيئة أمامية', 'مساعدات سيارات', 'مقصات سيارات', 'فرامل سيارات', 
    'خرط هوبات', 'بواجي سيارات', 'طرمبة بنزين', 'تنظيف بخاخات', 'فحص تهريب ماء', 
    'رديتر سيارات', 'مروحة تبريد', 'تهريب زيت', 'إصلاح زجاج سيارات', 'تلميع شمعات', 
    'ورشة مفتوحة الجمعة', 'صيانة سريعة', 'سطحة الرياض', 'سحب سيارات مجاني', 'ورشة قريبة مني', 
    'أفضل مركز صيانة بالرياض', 'ديزاين الرياض للسمكرة', 'صيانة سيارات كورية', 'صيانة سيارات يابانية', 
    'صيانة سيارات امريكية', 'صيانة سيارات المانية', 'ورشة متكاملة', 'اصلاح صدمات باب', 
    'اصلاح صدمات رفرف', 'اصلاح صدمات كبوت', 'اصلاح صدمات شنطة', 'تغيير قطع غيار اصلية', 
    'تشليح الرياض', 'مركز صيانة محترف', 'اصلاح صدمات الشاسيه', 'تعديل صدمات بدون بوية'
  ].join(', '),
  alternates: {
    canonical: 'https://design-riyadh.sa',
  },
  openGraph: {
    title: 'ديزاين الرياض - خبراء السمكرة والدهان وصيانة السيارات',
    description: 'نقدم خدمات السمكرة والدهان والميكانيكا والتعديل البارد بأعلى جودة مع ضمان 5 سنوات في الرياض.',
    url: 'https://design-riyadh.sa',
    siteName: 'ديزاين الرياض',
    images: [
      {
        url: 'https://i.postimg.cc/zvTBzNXw/desinbanar.jpg',
        width: 1200,
        height: 630,
        alt: 'مركز ديزاين الرياض لصيانة السيارات والسمكرة والدهان',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ديزاين الرياض - أفضل مركز سمكرة ودهان سيارات وتعديل بارد',
    description: 'صيانة احترافية، سمكرة، ودهان سيارات في قلب الرياض مع ضمان 5 سنوات وتعديل بارد بدون رش.',
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
    "name": "ديزاين الرياض لصيانة السيارات والسمكرة والدهان",
    "image": "https://i.postimg.cc/zvTBzNXw/desinbanar.jpg",
    "@id": "https://design-riyadh.sa",
    "url": "https://design-riyadh.sa",
    "telephone": "0504390007",
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
    "description": "أفضل مركز متخصص في سمكرة ودهان السيارات والتعديل البارد بدون رش في الرياض مع ضمان 5 سنوات ومطابقة ألوان بالكمبيوتر لجميع أنواع السيارات الفارهة والاقتصادية."
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
