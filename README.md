# کارگاه ریاضیات گسسته و ترکیبیات

وب‌سایت رسمی اولین کارگاه آموزشی ریاضیات گسسته و ترکیبیات دانشکده ریاضی دانشگاه صنعتی شریف

## درباره کارگاه

این کارگاه با هدف آموزش مفاهیم پیشرفته ریاضیات گسسته و نظریه گراف توسط برجسته‌ترین اساتید این حوزه در ایران برگزار می‌شود.

### اساتید کارگاه

- دکتر جواد ابراهیمی بروجنی (دانشگاه صنعتی شریف)
- دکتر سعید اکبری - دبیر علمی (دانشگاه صنعتی شریف)
- دکتر افشین بهمرام (دانشگاه تبریز)
- دکتر محسن جمالی (دانشگاه صنعتی شریف)
- دکتر علی طاهرخانی (دانشگاه علوم پایه زنجان)
- دکتر علیرضا علی‌پور

### محتوای کارگاه

- شمارش
- توابع مولد
- نظریه گراف و کاربردها

### تاریخ‌های مهم

- **ثبت‌نام:** ۱ آبان تا ۳۰ دی ۱۴۰۴
- **برگزاری کارگاه:** ۱۵ تا ۱۷ بهمن ۱۴۰۴

### نحوه شرکت

- **حضوری:** دانشگاه صنعتی شریف
- **مجازی:** سامانه کلاس‌های مجازی دانشگاه

---

# Discrete Mathematics and Combinatorics Workshop

Official website for the First Discrete Mathematics and Combinatorics Workshop by the Faculty of Mathematical Sciences at Sharif University of Technology.

## 🚀 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS with RTL support
- **Canvas API** - Animated graph background visualization

## ✨ Features

- 🎨 **Animated Graph Background** - Interactive mathematical graph visualization
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⌨️ **Typewriter Effect** - Dynamic animated title
- 🌓 **Dark Mode** - Beautiful dark theme support
- 🔄 **RTL Support** - Right-to-left layout for Persian content
- 📅 **Interactive Timeline** - Visual workshop schedule
- ♿ **Accessible** - WCAG compliant with proper ARIA labels

## 📦 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/prhdm/discrete-mathmatics-workshop.git
cd discrete-mathmatics-workshop

# Install dependencies
npm install
# or
pnpm install
# or
yarn install

# Run development server
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🏗️ Project Structure

```
Workshop/
├── app/
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   ├── AboutSection.tsx
│   │   ├── Footer.tsx
│   │   ├── GraphBackground.tsx
│   │   ├── HeroSection.tsx
│   │   ├── InstructorCard.tsx
│   │   ├── InstructorsSection.tsx
│   │   ├── TypewriterText.tsx
│   │   └── WorkshopTimeline.tsx
│   ├── constants/           # Configuration and data
│   │   ├── instructors.ts
│   │   └── workshop.ts
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Helper utilities
│   ├── fonts/              # Vazir font files
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   ├── logo.svg
│   ├── logo.ico
│   └── poster.jpg
└── ...config files
```

## 🎨 Customization

### Update Workshop Content

Edit `app/constants/workshop.ts`:

```typescript
export const WORKSHOP_CONFIG = {
  title: 'عنوان کارگاه',
  organizer: 'برگزارکننده',
  // ...
};
```

### Update Instructors

Edit `app/constants/instructors.ts`:

```typescript
export const INSTRUCTORS: Instructor[] = [
  {
    id: '1',
    name: 'نام استاد',
    affiliation: 'وابستگی',
    color: 'blue',
  },
  // ...
];
```

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.js`
- RTL support: Built-in with `tailwindcss-rtl` plugin

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import repository on [Vercel](https://vercel.com)
3. Deploy automatically

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/prhdm/discrete-mathmatics-workshop)

### Build for Production

```bash
npm run build
npm start
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Features Breakdown

### Animated Graph Background
- Canvas-based particle system
- Responsive node count (50 desktop, 25 mobile)
- Dynamic edge connections
- Smooth animations

### Typewriter Effect
- Configurable typing/deleting speed
- Automatic loop with pause
- Smooth character animation

### Responsive Timeline
- Horizontal layout on desktop
- Vertical layout on mobile
- Centered dots and connecting line

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Credits

- **Vazir Font** by [Saber Rastikerdar](https://github.com/rastikerdar/vazir-font)
- **Faculty of Mathematical Sciences, Sharif University of Technology**

---

© ۱۴۰۴ دانشکده علوم ریاضی دانشگاه صنعتی شریف. تمامی حقوق محفوظ است.

© 2024 Faculty of Mathematical Sciences, Sharif University of Technology. All rights reserved.
