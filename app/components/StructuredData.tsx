export const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalEvent",
    "name": "کارگاه آموزشی ریاضیات گسسته و ترکیبیات",
    "description": "اولین کارگاه آموزشی ریاضیات گسسته و ترکیبیات با هدف معرفی، آموزش و تعمیق مفاهیم بنیادی و قضایای کلاسیک این شاخه از ریاضیات برگزار می‌شود.",
    "url": "https://sharifmathworkshop.ir",
    "image": "https://sharifmathworkshop.ir/poster.jpg",
    "startDate": "2024-12-15",
    "endDate": "2024-12-15",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
    "location": [
      {
        "@type": "Place",
        "name": "دانشگاه صنعتی شریف",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "تهران",
          "addressCountry": "IR"
        }
      },
      {
        "@type": "VirtualLocation",
        "name": "برگزاری مجازی"
      }
    ],
    "organizer": {
      "@type": "Organization",
      "name": "دانشکده علوم ریاضی دانشگاه صنعتی شریف",
      "url": "https://math.sharif.edu",
      "logo": "https://sharifmathworkshop.ir/logo.svg"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "IRR",
      "availability": "https://schema.org/InStock"
    },
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student",
      "audienceType": "دانش‌آموزان در سطح‌های مقدماتی تا پیشرفته"
    },
    "inLanguage": "fa-IR",
    "keywords": [
      "ریاضیات گسسته",
      "ترکیبیات",
      "نظریه گراف",
      "شمارش",
      "توابع مولد",
      "مسابقات ریاضی"
    ],
    "about": [
      {
        "@type": "Thing",
        "name": "ریاضیات گسسته"
      },
      {
        "@type": "Thing", 
        "name": "ترکیبیات"
      },
      {
        "@type": "Thing",
        "name": "نظریه گراف"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};
