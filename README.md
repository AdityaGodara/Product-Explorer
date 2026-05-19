# Project Explorer - React + TypeScript + Vite

A modern React application built with TypeScript and Vite, featuring product cards and search functionality.

## Project Overview

This is a React-based web application that showcases products with an interactive search interface. The project is built using modern web technologies for optimal performance and developer experience.

### Key Features

- **Fast Development**: Built with Vite for instant server start and module refresh
- **Type Safety**: Full TypeScript support for reliable code
- **Component-Based**: Reusable React components (ProductCards, SearchBar)
- **API Integration**: Axios for seamless HTTP requests
- **Code Quality**: ESLint configuration for consistent code standards

## Tech Stack

- **Frontend Framework**: React 19.2.6
- **Language**: TypeScript
- **Build Tool**: Vite 8.0.12
- **HTTP Client**: Axios 1.16.1
- **Linter**: ESLint 10.3.0
- **Package Manager**: npm

## Project Structure

```
my-app/
├── src/
│   ├── Components/
│   │   ├── ProductCards.tsx    # Product card display component
│   │   └── SearchBar.tsx       # Search functionality component
│   ├── Style/
│   │   └── seacrh_bar.css      # Search bar styling
│   ├── App.tsx                 # Main App component
│   ├── App.css                 # App styling
│   ├── main.tsx                # React app entry point
│   ├── index.css               # Global styles
│   └── assets/                 # Static assets
├── public/                      # Public assets
├── index.html                  # HTML entry point
├── package.json                # Dependencies and scripts
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
└── eslint.config.js            # ESLint configuration
```

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16 or higher) - [Download](https://nodejs.org/)
- **npm** (usually comes with Node.js)

To verify installation:
```bash
node --version
npm --version
```

## Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd my-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

This will install all required packages listed in `package.json`.

## Development Setup

### Running the Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

**Features:**
- Automatic browser refresh on code changes
- Fast module reloading
- Detailed error messages in browser and console

### Building for Production

Create an optimized production build:

```bash
npm run build
```

This command:
1. Compiles TypeScript files
2. Bundles and minifies the application
3. Outputs optimized files to the `dist/` folder

### Previewing Production Build

Preview the production build locally:

```bash
npm run preview
```

This allows you to test the production build before deployment.

### Code Quality

Run ESLint to check for code quality issues:

```bash
npm run lint
```

## Available Scripts

| Script | Command | Purpose |
|--------|---------|---------|
| **dev** | `npm run dev` | Start development server with HMR |
| **build** | `npm run build` | Create production build |
| **lint** | `npm run lint` | Run ESLint to check code quality |
| **preview** | `npm run preview` | Preview production build locally |

## Configuration Files

- **vite.config.ts** - Vite build and dev server configuration
- **tsconfig.json** - TypeScript compiler options
- **eslint.config.js** - ESLint rules and plugins
- **index.html** - HTML entry point for the application

## Components

### ProductCards.tsx
Displays product information in a card layout. Can be customized to show different product data.

### SearchBar.tsx
Provides search functionality to filter and find products. Styled with `seacrh_bar.css`.

## Dependencies

### Runtime Dependencies
- `react` - UI library for building components
- `react-dom` - React DOM rendering
- `axios` - Promise-based HTTP client for API calls

### Development Dependencies
- `typescript` - JavaScript superset with type checking
- `vite` - Next generation frontend build tool
- `eslint` - Code quality and style checker
- `@vitejs/plugin-react` - Vite plugin for React fast refresh
- Various type definitions for React and Node.js

## Common Issues & Solutions

### Port Already in Use
If port 5173 is already in use, Vite will automatically use the next available port.

### Module Not Found Errors
Run `npm install` to ensure all dependencies are installed.

### TypeScript Errors
Ensure your IDE has TypeScript support enabled. Restart your development server if needed.

## Next Steps

1. Start the development server: `npm run dev`
2. Open your browser and navigate to the provided URL
3. Begin modifying components in the `src/` folder
4. Changes will be reflected in the browser automatically

## Build & Deployment

1. Run `npm run build` to create a production build
2. The `dist/` folder contains the optimized files ready for deployment
3. Deploy the contents of the `dist/` folder to your hosting service

## Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Axios Documentation](https://axios-http.com)

---

**Happy coding!** 
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
