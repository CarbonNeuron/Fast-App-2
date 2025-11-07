#!/bin/bash

# Database management script for Fast App 2

case "$1" in
  start)
    echo "Starting PostgreSQL database..."
    docker-compose up -d postgres
    echo "Database started on localhost:5432"
    echo "Connection: postgresql://postgres:password123@localhost:5432/fast_app_2"
    ;;
  stop)
    echo "Stopping PostgreSQL database..."
    docker-compose stop postgres
    ;;
  restart)
    echo "Restarting PostgreSQL database..."
    docker-compose restart postgres
    ;;
  reset)
    echo "Resetting database (WARNING: This will delete all data)..."
    read -p "Are you sure? (y/N) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
      docker-compose down postgres
      docker volume rm fast-app-2_postgres_data
      docker-compose up -d postgres
      echo "Waiting for database to be ready..."
      sleep 5
      npx prisma db push
      echo "Database reset complete!"
    fi
    ;;
  migrate)
    echo "Running database migrations..."
    npx prisma db push
    ;;
  studio)
    echo "Opening Prisma Studio..."
    npx prisma studio
    ;;
  *)
    echo "Usage: $0 {start|stop|restart|reset|migrate|studio}"
    echo ""
    echo "Commands:"
    echo "  start   - Start PostgreSQL database"
    echo "  stop    - Stop PostgreSQL database"  
    echo "  restart - Restart PostgreSQL database"
    echo "  reset   - Reset database (deletes all data)"
    echo "  migrate - Run database migrations"
    echo "  studio  - Open Prisma Studio"
    exit 1
    ;;
esac