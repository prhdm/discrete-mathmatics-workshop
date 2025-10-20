'use client';

import Image from 'next/image';
import { FC } from 'react';

const SHARIF_UNIVERSITY_URL = 'http://sharif.ir/';
const COPYRIGHT_TEXT = '۱۴۰۴ دانشکده علوم ریاضی دانشگاه صنعتی شریف. تمامی حقوق محفوظ است.';

export const Footer: FC = () => {
  return (
    <footer className="relative py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800 z-10 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <a
            href={SHARIF_UNIVERSITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 duration-300"
            aria-label="دانشگاه صنعتی شریف"
          >
            <Image
              src="/logo.svg"
              alt="دانشگاه صنعتی شریف"
              width={120}
              height={120}
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
            />
          </a>
          
          <div className="text-center text-black dark:text-gray-400 text-sm sm:text-base space-y-2">
            <p>
              &copy; {COPYRIGHT_TEXT}
            </p>
            <p className="text-xs sm:text-sm">
              طراحی شده توسط{' '}
              <a
                href="https://github.com/prhdm"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors underline"
              >
                پرهام هوشمند
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
