# Whizbangs - Curated Treats For Curious Tastes

A modern candy shop website built with React, TypeScript, and Vite. At Whizbangs, we don't just make candy — we make moments. Discover exclusive candies and snacks from around the globe.

## Live Site

Visit the live site at: [https://mrwhizbangs.github.io/candy-crafted-move/](https://mrwhizbangs.github.io/candy-crafted-move/)

## Technologies

- **Vite** - Fast build tool and development server
- **React** - UI library with React Router for navigation
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful component library
- **React Query** - Data fetching and state management

## Running Locally

### Prerequisites

- Node.js 18+ and npm installed ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MrWhizbangs/candy-crafted-move.git
   cd candy-crafted-move
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:8080`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production to `dist/` folder
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Deploying to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Initial Setup

1. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Navigate to **Settings** > **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

2. **Push your changes to the main branch:**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

3. **Automatic deployment:**
   - The GitHub Actions workflow will automatically trigger on every push to `main`
   - Monitor the deployment progress in the **Actions** tab
   - First deployment typically takes 2-3 minutes

4. **Access your site:**
   - Your site will be live at: `https://mrwhizbangs.github.io/candy-crafted-move/`

### Manual Deployment

You can also manually trigger a deployment from the GitHub Actions tab:

1. Go to the **Actions** tab in your repository
2. Select the **Deploy to GitHub Pages** workflow
3. Click **Run workflow**
4. Select the `main` branch and click **Run workflow**

### How It Works

The project uses a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:

1. Installs dependencies
2. Builds the project with Vite
3. Deploys the `dist` folder to GitHub Pages

The configuration includes:
- **Base path** set to `/candy-crafted-move/` in `vite.config.ts`
- **BrowserRouter** with basename for clean URLs
- **404 handling** for client-side routing via `public/404.html`
- **Redirect script** in `index.html` to handle direct navigation

## Project Structure

```
candy-crafted-move/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   └── 404.html               # Handles client-side routing on GitHub Pages
├── src/
│   ├── assets/                # Images, videos, and other static assets
│   ├── components/            # Reusable React components
│   ├── pages/                 # Page components
│   ├── App.tsx                # Main app component with routing
│   └── main.tsx               # Application entry point
├── index.html                 # HTML template with SPA redirect handler
├── vite.config.ts             # Vite configuration with GitHub Pages base path
└── package.json               # Project dependencies and scripts
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary to Whizbangs.
