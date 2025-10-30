# מהחזית לחוזה - Event Landing Page

A beautiful, responsive landing page for the "מהחזית לחוזה" (From the Front to a Contract) event by קהילת ברזל (Iron Community).

## 🎯 About the Event

This landing page promotes a networking and career event for active reserve duty personnel, featuring:
- Expert lectures on job searching and career development
- Job fair with leading companies
- One-on-one mentoring sessions with career advisors
- Networking opportunities with employers

**Event Details:**
- 📅 Date: November 11, 2025
- ⏰ Time: 17:00-21:00
- 📍 Location: Fiverr Offices, Eliezer Kaplan 8, Tel Aviv

## 🚀 Features

- ✨ Modern, responsive design built with React + Vite
- 🎨 Tailwind CSS for beautiful styling
- 🎭 Smooth animations with Framer Motion
- 🌍 Full Hebrew RTL (Right-to-Left) support
- 📱 Mobile-first responsive layout
- 🚀 Optimized for GitHub Pages deployment

## 📦 Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icon set
- **gh-pages** - GitHub Pages deployment

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd event-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🏗️ Project Structure

```
event-landing/
├── src/
│   ├── components/
│   │   ├── HeroSection.jsx       # Hero with logos and main headline
│   │   ├── EventDetails.jsx      # Event features checklist
│   │   ├── EventInfo.jsx         # Date, time, location info
│   │   ├── Speakers.jsx          # Speaker profiles section
│   │   ├── CompanyLogos.jsx      # Participating companies
│   │   ├── RSVP.jsx              # Registration CTA section
│   │   └── Footer.jsx            # Footer with contact info
│   ├── assets/                   # Images and static files
│   ├── App.jsx                   # Main app component
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles
├── index.html                    # HTML template
├── tailwind.config.js            # Tailwind configuration
├── vite.config.js                # Vite configuration
└── package.json                  # Dependencies and scripts
```

## 🎨 Customization

### Colors

The color palette is defined in `tailwind.config.js`:

```javascript
colors: {
  'brand-green': {
    DEFAULT: '#2d5f3f',
    light: '#4a8359',
    dark: '#1e4029',
  },
  'brand-blue': {
    DEFAULT: '#2563eb',
    light: '#3b82f6',
  },
  'brand-beige': {
    DEFAULT: '#e8e4d9',
    light: '#f5f3ed',
  },
}
```

### Fonts

Hebrew fonts (Assistant and Heebo) are loaded from Google Fonts in `src/index.css`.

## 📤 Deployment to GitHub Pages

### Prerequisites

1. Create a GitHub repository for your project
2. Push your code to GitHub
3. Update the `base` property in `vite.config.js` to match your repository name:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',  // Change this to your repo name
})
```

### Deploy Steps

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

This will:
- Build your project into the `dist/` folder
- Create/update the `gh-pages` branch
- Push the built files to GitHub Pages

3. Enable GitHub Pages in your repository:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`
   - Save

Your site will be live at: `https://your-username.github.io/your-repo-name/`

### One-Command Deploy

After initial setup, simply run:
```bash
npm run deploy
```

This automatically builds and deploys your site!

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Build and deploy to GitHub Pages
- `npm run lint` - Run ESLint

## 📝 License

© 2025 מהחזית לחוזה - קהילת ברזל. All rights reserved.

## 🤝 Contributing

This is an event-specific landing page. For questions or updates, please contact the event organizers.

---

**Built with ❤️ for the Israeli Reserve Duty Community**
