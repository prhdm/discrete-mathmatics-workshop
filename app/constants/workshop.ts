export const WORKSHOP_CONFIG = {
  title: 'اولین کارگاه آموزشی ریاضیات گسسته و ترکیبیات',
  organizer: 'دانشکده ریاضی دانشگاه صنعتی شریف برگزار می‌کند',
  certificate: 'با ارائه گواهی شرکت توسط دانشگاه صنعتی شریف',
  registrationLinks: {
    onsite: 'https://pay.sharif.edu/form2/3/160498',
    virtual: 'https://pay.sharif.edu/form2/3/160498/40000000',
  },
} as const;

export const WORKSHOP_CONTENT = [
  'شمارش',
  'توابع مولد',
  'نظریه گراف و ...',
] as const;

export const WORKSHOP_DATES = {
  workshop: '۱۵ لغایت ۱۷ بهمن ۱۴۰۴',
  registration: '۱ آبان لغایت ۳۰ دی',
} as const;

export const WORKSHOP_LOCATIONS = {
  onsite: 'دانشگاه صنعتی شریف (برای شرکت حضوری)',
  virtual: 'سامانه کلاس‌های مجازی دانشگاه صنعتی شریف (برای شرکت مجازی)',
} as const;

export const TIMELINE_EVENTS = [
  {
    title: 'شروع ثبت نام',
    date: '۱ آبان ۱۴۰۴',
    description: 'آغاز دوره ثبت‌نام',
  },
  {
    title: 'پایان ثبت نام',
    date: '۳۰ دی ۱۴۰۴',
    description: 'مهلت نهایی ثبت‌نام',
  },
  {
    title: 'شروع کارگاه',
    date: '۱۵ بهمن ۱۴۰۴',
    description: 'آغاز کارگاه آموزشی',
  },
  {
    title: 'پایان کارگاه',
    date: '۱۷ بهمن ۱۴۰۴',
    description: 'اختتامیه و اهدای گواهی',
  },
] as const;

