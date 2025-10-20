'use client';

import Image from 'next/image';
import { Button } from './ui/Button';
import { WORKSHOP_CONFIG, WORKSHOP_CONTENT, WORKSHOP_DATES, WORKSHOP_LOCATIONS } from '../constants/workshop';

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="order-2 lg:order-1 flex flex-col h-full">
            <div className="flex-1 flex flex-col space-y-4 sm:space-y-6">
              <InfoCard title="اهم محتوای کارگاه:">
                <ul className="space-y-2 text-base sm:text-lg text-black dark:text-white list-none">
                  {WORKSHOP_CONTENT.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </InfoCard>

              <InfoCard>
                <div className="space-y-3 text-base sm:text-lg text-black dark:text-white">
                  <p>
                    <span className="font-bold">تاریخ برگزاری:</span> {WORKSHOP_DATES.workshop}
                  </p>
                  <p>
                    <span className="font-bold">تاریخ ثبت‌نام:</span> {WORKSHOP_DATES.registration}
                  </p>
                </div>
              </InfoCard>

              <InfoCard title="محل برگزاری:">
                <ul className="space-y-2 text-base sm:text-lg text-black dark:text-white list-none">
                  <li>• {WORKSHOP_LOCATIONS.onsite}</li>
                  <li>• {WORKSHOP_LOCATIONS.virtual}</li>
                </ul>
              </InfoCard>
            </div>

            <div className="w-full pt-6">
              <div className="flex flex-row gap-3 sm:gap-4">
                <Button href={WORKSHOP_CONFIG.registrationLinks.onsite} className="flex-1">
                  ثبت‌نام حضوری
                </Button>
                <Button href={WORKSHOP_CONFIG.registrationLinks.virtual} className="flex-1">
                  ثبت‌نام مجازی
                </Button>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl p-8 border border-gray-200 dark:border-gray-700">
              <Image
                src="/poster.jpg"
                alt="پوستر رسمی کارگاه آموزشی ریاضیات گسسته و ترکیبیات"
                width={600}
                height={800}
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({ title, children }: { title?: string; children: React.ReactNode }) => (
  <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl p-6 border border-gray-200 dark:border-gray-700 flex-1 flex flex-col items-center justify-center text-center">
    {title && (
      <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4">
        {title}
      </h3>
    )}
    {children}
  </div>
);
