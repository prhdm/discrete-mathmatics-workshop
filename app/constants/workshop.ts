export const WORKSHOP_CONFIG = {
  title: 'اولین کارگاه آموزشی ریاضیات گسسته و ترکیبیات',
  organizer: 'دانشکده ریاضی دانشگاه صنعتی شریف برگزار می‌کند',
  certificate: 'با ارائه گواهی شرکت توسط دانشگاه صنعتی شریف',
  registrationLinks: {
    onsite: 'https://pay.sharif.edu/form2/3/160498/50000000',
    virtual: 'https://pay.sharif.edu/form2/3/160498/40000000',
    sharifFamily: 'https://pay.sharif.edu/form2/3/160498/37500000',
  },
} as const;

export const WORKSHOP_CONTENT = [
  'شمارش',
  'توابع مولد',
  'نظریه گراف و ...',
] as const;

export const WORKSHOP_DATES = {
  workshop: '۱۵ لغایت ۱۷ بهمن ۱۴۰۴',
  registration: '۸ آبان لغایت ۳۰ دی',
} as const;

export const WORKSHOP_LOCATIONS = {
  onsite: 'دانشگاه صنعتی شریف (برای شرکت حضوری)',
  virtual: 'سامانه کلاس‌های مجازی دانشگاه صنعتی شریف (برای شرکت مجازی)',
} as const;

export const TIMELINE_EVENTS = [
  {
    title: 'شروع ثبت نام',
    date: '۸ آبان ۱۴۰۴',
  },
  {
    title: 'پایان ثبت نام',
    date: '۳۰ دی ۱۴۰۴',
  },
  {
    title: 'بازه برگزاری کارگاه',
    date: '۱۵ لغایت ۱۷ بهمن ۱۴۰۴',
  },
] as const;

