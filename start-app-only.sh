#!/bin/sh
set -e

echo "Starting Next.js application..."
echo "Note: Database migrations should be run separately in production"
echo "Use: docker run --rm <image> npm run db:migrate"

# Just start the application - migrations handled separately
exec node server.js