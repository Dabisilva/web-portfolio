# Davi Silva - Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and TailwindCSS. Features a beautiful blue-themed design with interactive elements and smooth animations.

## 🚀 Live Demo

[View Portfolio](https://davi-silva-portfolio.vercel.app) _(Replace with your actual deployment link)_

## ✨ Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Beautiful blue and cold color scheme with glass morphism effects
- **Interactive Elements**:
  - Smooth scrolling navigation
  - Animated tooltips with copy functionality
  - Hover effects and transitions
  - PDF resume download
- **Technology Showcase**: Interactive skills grid with technology icons
- **Project Gallery**: Featured projects with code icons and descriptions
- **Contact Integration**: Easy-to-copy contact information with visual feedback

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: TailwindCSS
- **Icons**: React Icons (FontAwesome & Simple Icons)
- **Fonts**: Google Fonts (Roboto)
- **Deployment**: Vercel (recommended)

## 🎨 Design Features

- **Color Scheme**: Blue and cold colors (slate-900, blue-900, cyan-900)
- **Glass Morphism**: Semi-transparent cards with backdrop blur
- **Animations**: Smooth transitions, hover effects, and scale animations
- **Typography**: Responsive text sizing with gradient effects
- **Layout**: Card-based design with proper spacing and visual hierarchy

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1280px
- **Large**: > 1280px

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── basicText/          # Navigation text component
│   │   ├── card/               # Reusable card component
│   │   ├── title/              # Dynamic heading component
│   │   ├── toolTip/            # Interactive tooltip component
│   │   └── websiteCard/        # Project showcase cards
│   ├── pages/
│   │   └── index.tsx           # Main portfolio page
│   └── styles/
│       └── globals.css         # Global styles
├── public/                     # Static assets (PDF, images)
├── next.config.ts              # Next.js configuration
└── tailwind.config.ts          # TailwindCSS configuration
```

## 🎯 Customization

### Personal Information

Update the following in `src/pages/index.tsx`:

- Name and title
- Profile image URL
- Contact information
- Project links and descriptions
- Skills list

### Styling

- Colors: Modify the blue theme in Tailwind classes
- Layout: Adjust spacing and grid configurations
- Animations: Customize transition durations and effects

### PDF Resume

1. Add your resume PDF to the `public/` folder
2. Name it `Davi-Barbosa-resume.pdf` (or update the filename in the code)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: dabisilva@gmail.com
- **LinkedIn**: [Davi Barbosa da Silva](https://www.linkedin.com/in/davi-barbosa-da-silva/)
- **GitHub**: [@Dabisilva](https://github.com/Dabisilva)

---

Made with ❤️ by Davi Silva
