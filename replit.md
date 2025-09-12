# Sunson Technology Website

## Overview

This is a modern React-based corporate website for Sunson Technology, a manufacturer of self-service technology solutions including banking systems, healthcare kiosks, and security modules. The application showcases the company's products and solutions across multiple industries including banking, healthcare, retail, and transportation.

The website features a comprehensive product catalog, solution pages, company information, and contact functionality. It's built as a full-stack application with a React frontend and Express.js backend, designed to be scalable and maintainable.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system using CSS variables
- **UI Components**: Radix UI primitives with shadcn/ui component library for accessible, customizable components
- **State Management**: TanStack Query for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript throughout the entire application
- **Development**: tsx for TypeScript execution in development
- **Production**: esbuild for fast bundling and deployment

### Project Structure
- **Monorepo Design**: Single repository with client, server, and shared code
- **Client Directory**: Contains all React frontend code including components, pages, and hooks
- **Server Directory**: Express backend with routing and storage interfaces
- **Shared Directory**: Common TypeScript types and database schemas used by both client and server

### Database and Storage
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with Neon serverless connection
- **Schema Management**: Centralized schema definitions in shared directory
- **Development Storage**: In-memory storage implementation for development
- **Migration**: Drizzle Kit for database migrations and schema management

### Development Tools
- **Type Checking**: Strict TypeScript configuration across all packages
- **Path Aliases**: Configured for clean imports (@/, @shared/, @assets/)
- **Hot Reload**: Vite HMR for instant development feedback
- **Error Handling**: Runtime error overlay for development debugging

### Styling System
- **Design System**: Custom CSS variables for consistent theming
- **Component Variants**: Class Variance Authority for component styling patterns
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Typography**: Custom font stack with Google Fonts integration

### Content Management
- **Static Assets**: Product images and company assets
- **Content Structure**: Organized by product categories and solution types
- **Navigation**: Hierarchical menu structure with dropdown categories

## External Dependencies

### UI and Styling
- **@radix-ui/***: Comprehensive set of unstyled, accessible UI primitives
- **tailwindcss**: Utility-first CSS framework for rapid styling
- **class-variance-authority**: Type-safe component variants
- **clsx**: Conditional className utility
- **lucide-react**: Modern icon library

### Data Management
- **@tanstack/react-query**: Server state management and caching
- **drizzle-orm**: Type-safe SQL ORM
- **drizzle-zod**: Zod integration for schema validation
- **@neondatabase/serverless**: Serverless PostgreSQL connection

### Development and Build
- **vite**: Fast build tool and development server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production
- **@replit/vite-plugin-***: Replit-specific development plugins

### Form Handling
- **react-hook-form**: Performant form library
- **@hookform/resolvers**: Form validation resolvers
- **zod**: TypeScript-first schema validation

### Utilities
- **date-fns**: Modern date utility library
- **nanoid**: URL-safe unique ID generator
- **wouter**: Minimalist routing for React
- **embla-carousel-react**: Touch-friendly carousel component