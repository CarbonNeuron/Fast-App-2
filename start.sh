#!/bin/sh
set -e

echo "Checking database connection..."
# Wait for database to be ready
timeout=30
while [ $timeout -gt 0 ]; do
  if node -e "
    const { PrismaClient } = require('@prisma/client');
    const prisma = new PrismaClient();
    prisma.\$connect().then(() => {
      console.log('Database connected');
      process.exit(0);
    }).catch((e) => {
      console.log('Database not ready:', e.message);
      process.exit(1);
    });
  " >/dev/null 2>&1; then
    echo "Database connection successful"
    break
  fi
  echo "Waiting for database... ($timeout seconds remaining)"
  sleep 2
  timeout=$((timeout-2))
done

if [ $timeout -le 0 ]; then
  echo "Database connection failed after 30 seconds"
  exit 1
fi

# Only run migrations if SKIP_MIGRATIONS is not set
if [ "$SKIP_MIGRATIONS" != "true" ]; then
  echo "Running database migrations..."
  # prisma migrate deploy is safe for concurrent execution
  # It uses database locks to prevent conflicts between multiple containers
  npx prisma migrate deploy
else
  echo "Skipping migrations (SKIP_MIGRATIONS=true)"
fi

echo "Starting Next.js application..."
exec node server.js