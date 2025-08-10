# Professional Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Responsive Design** that works on all devices
- **SEO Optimized** with proper meta tags
- **Fast Performance** with Next.js optimizations

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── sections/         # Page sections (Hero, About, Projects, etc.)
│   └── ui/               # UI components (Button, Card, etc.)
├── assets/               # Static assets
│   ├── images/          # Image files
│   └── icons/           # Icon files
├── lib/                  # Utility functions
│   └── utils.ts         # Common utilities
├── types/               # TypeScript type definitions
│   └── index.ts         # Type exports
└── data/                # Static data and content
    └── portfolio.ts     # Portfolio content
```

## 🛠️ Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

1. **Update personal information** in `src/data/portfolio.ts`
2. **Add your projects** to the projects array
3. **Update experience** in the experience array
4. **Customize colors** in `tailwind.config.js`
5. **Add your images** to the `public/` folder

## 🚀 Deployment

This project is optimized for deployment on Vercel:

```bash
npm run build
```

## 📋 Next Steps

This is the foundation for your portfolio. You can now add:

- Hero section component
- About section component
- Projects showcase
- Experience timeline
- Contact form
- Navigation header
- And more!

## 🔧 Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React (recommended)
- **Fonts:** Geist Sans & Geist Mono
- **Deployment:** Vercel (recommended)

---

Built with ❤️ using Next.js and Tailwind CSS
