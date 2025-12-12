# Header Component Documentation

## Структура компонентів

### 📁 components/layout/
- **Header.tsx** - Головний компонент хедера
- **Navigation.tsx** - Десктопна навігація
- **MobileMenu.tsx** - Мобільне меню
- **index.ts** - Barrel export файл

### 📁 lib/
- **utils.ts** - Утиліта `cn()` для об'єднання класів

## Особливості

### ✨ Responsive Design
- **Desktop**: Повна навігація з горизонтальним меню
- **Tablet**: Адаптивні відступи
- **Mobile**: Hamburger меню з slide-in panel

### 🎨 Styling
- Колір фону: `#0D0525` (темно-фіолетовий)
- Висота: `92px`
- Адаптивні відступи:
  - Mobile: `px-4`
  - Tablet: `px-12`
  - Desktop: `px-24`
  - Large: `px-[394px]` (як в дизайні)

### 🚀 Best Practices
1. **Server/Client Components**: Header - server, Navigation/MobileMenu - client
2. **Accessibility**: Правильні ARIA атрибути
3. **Performance**: Image optimization з Next.js Image
4. **Type Safety**: TypeScript з строгою типізацією
5. **Scalability**: Легко додавати нові пункти навігації

## Як додати нові пункти меню

Відредагуйте масив `navigationItems` в `Navigation.tsx`:

\`\`\`typescript
const navigationItems = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' }, // Новий пункт
] as const;
\`\`\`

## Використання

Хедер автоматично додано в `app/layout.tsx` і відображається на всіх сторінках.

## Dependencies
- `clsx` - умовні класи
- `tailwind-merge` - об'єднання Tailwind класів
- Next.js 16 - Image та Link компоненти
