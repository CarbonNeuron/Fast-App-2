# Fast App 2

A [Next.js](https://nextjs.org) application by **CarbonNeuron** with Docker support and automated CI/CD.

## Getting Started

This project uses npm as the package manager. Install dependencies and start the development server:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run docker:build` - Build Docker image
- `npm run docker:run` - Run Docker container
- `npm run docker:compose` - Start with Docker Compose

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

