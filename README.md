# Fast App 2

A [Next.js](https://nextjs.org) application by **CarbonNeuron** with Docker support and automated CI/CD.

## Getting Started

This project uses npm as the package manager and includes authentication with NextAuth.js.

### Quick Start

```bash
# Install dependencies
npm install

# Start PostgreSQL database
npm run db:start

# Run database migrations
npm run db:migrate

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Environment Setup

1. Copy the environment file:
   ```bash
   cp .env.example .env.local
   ```

2. Update OAuth credentials in `.env.local` (optional for basic development):
   - `GITHUB_ID` and `GITHUB_SECRET` for GitHub OAuth
   - `GOOGLE_ID` and `GOOGLE_SECRET` for Google OAuth

### Database

The app uses PostgreSQL with Prisma ORM. The database runs in a Docker container for development.

**Database URL:** `postgresql://postgres:password123@localhost:5432/fast_app_2`


## Available Scripts

### Development
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Database Management
- `npm run db:start` - Start PostgreSQL database
- `npm run db:stop` - Stop PostgreSQL database
- `npm run db:restart` - Restart PostgreSQL database
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Open Prisma Studio
- `npm run db:generate` - Generate Prisma client

### Docker
- `npm run docker:build` - Build Docker image
- `npm run docker:run` - Run Docker container
- `npm run docker:compose` - Start with Docker Compose

### Production Deployment
For production with multiple containers, run migrations separately:
```bash
# Step 1: Start database
docker-compose up -d postgres

# Step 2: Run migrations once
docker-compose run --rm migrate

# Step 3: Start multiple app instances
docker-compose up -d --scale app=3 app
```

## Docker

This project is configured with Docker support using Next.js standalone output for optimal production builds.

### Local Docker Development

```bash
# Build and run with npm scripts
npm run docker:build
npm run docker:run

# Or use Docker Compose
npm run docker:compose
```

### Manual Docker Commands

```bash
# Build the image
docker build -t fast-app-2 .

# Run the container
docker run -p 3000:3000 fast-app-2

# Using Docker Compose
docker-compose up --build
```

## GitHub Container Registry

The project includes GitHub Actions workflow for automated Docker builds and publishing to GitHub Container Registry (GHCR).

**Automatic builds trigger on:**
- Push to `main` or `develop` branches
- Tag creation (e.g., `v1.0.0`)
- Pull requests to `main`

**Published images:** `ghcr.io/carbonneuron/fast-app-2`

### Using Published Images

```bash
# Pull latest from main branch
docker pull ghcr.io/carbonneuron/fast-app-2:main

# Run the published image
docker run -p 3000:3000 ghcr.io/carbonneuron/fast-app-2:main
```

