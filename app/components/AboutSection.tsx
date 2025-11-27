'use client';

import Image from 'next/image';
import { Button } from './ui/Button';
import { WORKSHOP_CONFIG, WORKSHOP_CONTENT, WORKSHOP_DATES, WORKSHOP_LOCATIONS } from '../constants/workshop';

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div className="order-2 lg:order-1 flex flex-col h-full">
            <div className="flex flex-col space-y-4 sm:space-y-6 h-full">
              

              <InfoCard>
                <div className="space-y-3 text-base sm:text-lg text-black">
                  <p>
                    <span className="font-bold">تاریخ برگزاری:</span> {WORKSHOP_DATES.workshop}
                  </p>
                  <p>
                    <span className="font-bold">تاریخ ثبت‌نام:</span> {WORKSHOP_DATES.registration}
                  </p>
                </div>
              </InfoCard>

              <InfoCard title="محل برگزاری:">
                <ul className="space-y-2 text-base sm:text-lg text-black list-none">
                  <li>• {WORKSHOP_LOCATIONS.onsite}</li>
                  <li>• {WORKSHOP_LOCATIONS.virtual}</li>
                </ul>
              </InfoCard>

              <InfoCard>
                <div className="text-sm sm:text-base text-black text-center">
                  <p>
                    برای اطلاعات بیشتر لطفا با شماره تلفن{' '}
                    <a 
                      href="tel:02166165612" 
                      className="font-bold text-red-500 hover:text-red-700 transition-colors"
                    >
                      ۶۶۱۶۵۶۱۲
                    </a>
                  </p>
                  <p>
                    یا با آدرس ایمیل{' '}
                    <a 
                      href="mailto:discretemathematics1404@gmail.com" 
                      className="font-bold text-red-500 hover:text-red-700 transition-colors"
                    >
                      discretemathematics1404@gmail.com
                    </a>
                  </p>
                  <p>
                    تماس حاصل فرمایید.
                  </p>
                </div>
              </InfoCard>
            </div>

            {/* <div className="w-full pt-6">
              <div className="flex flex-row gap-3 sm:gap-4">
                <Button href={WORKSHOP_CONFIG.registrationLinks.onsite} className="flex-1">
                  ثبت‌نام حضوری
                </Button>
                <Button href={WORKSHOP_CONFIG.registrationLinks.virtual} className="flex-1">
                  ثبت‌نام مجازی
                </Button>
              </div>
            </div> */}
          </div>

          <div className="order-1 lg:order-2">
            <div className="rounded-lg shadow-xl p-8 border border-gray-200" style={{ backgroundColor: '#F7F7F7' }}>
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
        <div className="max-w-7xl mx-auto">
          {/* Workshop Objectives Card */}
          <div className="mt-12">
            <InfoCard title="اهداف کارگاه آموزشی ریاضیات گسسته و ترکیبیات">
              <div className="text-sm sm:text-base text-black text-right leading-relaxed space-y-4">
                <p>
                  کارگاه ریاضیات گسسته و ترکیبیات با هدف معرفی، آموزش و تعمیق مفاهیم بنیادی و قضایای کلاسیک این شاخه از ریاضیات برگزار می‌شود. در این کارگاه، دانش‌آموزان در سطح‌های مقدماتی تا پیشرفته با ایده‌ها و روش‌های گوناگون در زمینه ریاضیات گسسته و ترکیبیات، که یکی از ارکان اصلی موضوعات پرکاربردی همچون هوش مصنوعی و علوم داده است، آشنا خواهند شد.
                </p>
                
                <p>
                  در بخش‌های آغازین، به مباحث پایه‌ای شمارش از جمله اصل لانه‌کبوتری، اصل شمول و عدم شمول و سایر اصول مقدماتی مرتبط پرداخته می‌شود. سپس شرکت‌کنندگان با روش‌های پیشرفته‌تر شمارشی، مانند استفاده از توابع مولد و تکنیک‌های ترکیبیاتی نوین، آشنا می‌شوند و می‌آموزند چگونه این ابزارها را در حل مسائل گوناگون به کار گیرند.
                </p>
                
                <p>
                  یکی از بخش‌های مهم و جالب این کارگاه، آشنایی با نظریه گراف است. در این بخش، اصول، تعاریف و برخی از قضایای کلاسیک نظریه گراف ارائه می‌شود و نیز کاربردهای گرافها در حل مسائل مسابقات مورد بررسی قرار می‌گیرد. همچنین، شیوه‌های تحلیل و مدل‌سازی مسائل با استفاده از گراف‌ها و نحوه به‌کارگیری نتایج این نظریه جذاب آموزش داده خواهد شد.
                </p>
                
                <p>
                  در ادامه کارگاه، نمونه‌هایی از مسائل ترکیبیاتی و گرافی به صورت گام به گام تحلیل می‌شوند تا شرکت‌کنندگان ضمن درک بهتر مفاهیم نظری، توانایی خود را در حل مسائل خلاقانه افزایش دهند. در پایان، برخی از اساتید کارگاه تعدادی مسائل تحقیقاتی در زمینه ریاضیات گسسته را معرفی خواهند کرد تا دانش‌آموزان علاقه‌مند بتوانند مسیر آشنایی خود را با فعالیت‌های پژوهشی و مطالعات عمیق‌تر در این حوزه آغاز کنند.
                </p>
                
                <p>
                  اساتید این کارگاه که از محققین دانشگاه و مدرسین حوزه ترکیبیات در کشور هستند، این رویداد را با همکاری دانشکده علوم ریاضی دانشگاه صنعتی شریف برگزار می‌کنند.
                </p>
                
                <p>
                  این کارگاه فرصتی ارزشمند برای تقویت تفکر ترکیبیاتی، افزایش قدرت استدلال منطقی، و ارتقای مهارت‌های حل مسئله در ریاضیات گسسته برای دانش‌آموزان است و می‌تواند آنان را برای تسلط بیشتر بر این موضوع یا حضور در رقابت‌های علمی آماده تر سازد.
                </p>
              </div>
            </InfoCard>
          </div>
          
          <div className="flex flex-col items-center gap-6">
            <div className="text-center text-black text-sm sm:text-base space-y-2 mt-8">
              <p className="text-xs sm:text-sm">
                طراحی شده توسط{' '}
                <a
                  href="https://github.com/prhdm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors underline"
                >
                  پرهام هوشمند
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({ title, children }: { title?: string; children: React.ReactNode }) => (
  <div className="rounded-lg shadow-xl p-6 border border-gray-200 flex flex-col items-center justify-center text-center flex-1" style={{ backgroundColor: '#F7F7F7' }}>
    {title && (
      <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">
        {title}
      </h3>
    )}
    <div className="flex flex-col justify-center flex-1">
      {children}
    </div>
  </div>
);
