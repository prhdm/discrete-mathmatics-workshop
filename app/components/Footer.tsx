'use client';

import Image from 'next/image';
import { FC } from 'react';

const SHARIF_UNIVERSITY_URL = 'http://sharif.ir/';
const COPYRIGHT_TEXT = '۱۴۰۴ دانشکده علوم ریاضی دانشگاه صنعتی شریف. تمامی حقوق محفوظ است.';

export const Footer: FC = () => {
  return (
    <footer className="relative py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 z-10" style={{ backgroundColor: '#F7F7F7' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          
          <div className="text-center text-black text-sm sm:text-base space-y-2">
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
    </footer>
  );
};
