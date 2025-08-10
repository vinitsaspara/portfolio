# About Section Component

## Overview

The About section provides a comprehensive introduction to the developer, featuring:

- **Professional Photo**: Responsive image with gradient overlay
- **Personal Information**: Name, title, bio, and contact details
- **Skills Display**: Categorized skills with proficiency levels
- **Quick Stats**: Visual metrics for experience and projects
- **Value Propositions**: What drives the developer

## Features

### 🖼️ **Professional Photo**

- Responsive sizing: 192px (mobile) → 224px (tablet) → 256px (desktop)
- Rounded corners with shadow
- Gradient overlay for visual appeal
- Placeholder SVG included

### 📝 **Bio Section**

- Personal information display
- Location and email with icons
- Engaging bio text
- Mobile-optimized layout

### 🛠️ **Skills & Technologies**

- Categorized by: Frontend, Backend, Database, Tools
- Color-coded proficiency levels:
  - 🟢 Expert (green)
  - 🔵 Advanced (blue)
  - 🟡 Intermediate (yellow)
  - ⚪ Beginner (gray)
- Star ratings for quick reference

### 📊 **Quick Stats**

- Years of experience
- Projects completed
- Responsive grid layout

### 💡 **Value Propositions**

- Problem Solving focus
- User Experience emphasis
- Innovation mindset
- Icon-based visual representation

## Mobile Responsiveness

The component is fully responsive with:

- **Mobile (< 640px)**: Single column layout, smaller images
- **Tablet (640px - 1024px)**: Optimized spacing and sizing
- **Desktop (> 1024px)**: Two-column layout with side-by-side content

## Customization

### Update Personal Info

Edit `src/data/portfolio.ts`:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio...",
  // ... other fields
};
```

### Add/Modify Skills

Edit the skills array in `src/data/portfolio.ts`:

```typescript
export const skills: Skill[] = [
  { name: "React", category: "frontend", level: "expert" },
  // ... more skills
];
```

### Replace Profile Photo

1. Add your photo to `public/` folder
2. Update the `src` in the About component
3. Recommended size: 512x512px or larger, square aspect ratio

## Integration

The About section is automatically included in the main page and accessible via:

- Navigation menu link (`#about`)
- Smooth scroll functionality
- Mobile-friendly hamburger menu

## Styling

Built with Tailwind CSS featuring:

- Consistent spacing and typography
- Custom color scheme
- Smooth transitions and hover effects
- Shadow and border styling
- Gradient overlays
