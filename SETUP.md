# UNICORE Project - Setup Instructions

## ✅ Completed Structure

### Components Created:
- **Header** (`components/layout/Header.tsx`)
  - Container: 1132px centered
  - Logo and navigation with gap
  - Mobile menu with hamburger
  
- **Hero Section** (`components/home/HeroSection.tsx`)
  - 5 stars rating
  - "Unicore" heading with custom font
  - Description text
  - "Go to Purchase" button
  - Hero image

## 📝 Required Assets

### 1. Logo
Place your logo file at:
```
/public/images/logo.png
```

### 2. Hero Image
Place your hero character image at:
```
/public/images/hero.png
```

### 3. Font (Optional)
If you have HYWenHei-85W font, place it at:
```
/fonts/HYWenHei-85W.woff2
```
Otherwise, the system will use the fallback font.

## 🎨 Design Specifications

### Colors:
- **Background**: `#0D0525` (dark purple)
- **White text**: `#FFFFFF`
- **Description text**: `#737AAE` (light purple)
- **Button**: `#FFC260` (orange)
- **Button border**: `#6E3B08` (dark orange)
- **Button text**: `#6E3B08`

### Layout:
- **Container**: 1132px max-width, centered
- **Header height**: 92px
- **Hero section**: 489px height on desktop

## 🚀 Run the Project

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📦 Dependencies Installed
- `clsx` - for conditional classes
- `tailwind-merge` - for merging Tailwind classes
- `next` 16.0.8
- `react` 19.2.1

## 🏗️ Best Practices Applied
1. ✅ Component-based architecture
2. ✅ Responsive design (mobile-first)
3. ✅ TypeScript for type safety
4. ✅ Next.js Image optimization
5. ✅ Semantic HTML
6. ✅ Accessibility (ARIA labels)
7. ✅ CSS-in-JS with Tailwind
8. ✅ Proper file structure
