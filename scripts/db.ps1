# Database management script for Fast App 2
param(
    [Parameter(Mandatory=$true)]
    [ValidateSet("start", "stop", "restart", "reset", "migrate", "studio")]
    [string]$Action
)

switch ($Action) {
    "start" {
        Write-Host "Starting PostgreSQL database..." -ForegroundColor Green
        docker-compose up -d postgres
        Write-Host "Database started on localhost:5432" -ForegroundColor Green
        Write-Host "Connection: postgresql://postgres:password123@localhost:5432/fast_app_2" -ForegroundColor Cyan
    }
    "stop" {
        Write-Host "Stopping PostgreSQL database..." -ForegroundColor Yellow
        docker-compose stop postgres
    }
    "restart" {
        Write-Host "Restarting PostgreSQL database..." -ForegroundColor Yellow
        docker-compose restart postgres
    }
    "reset" {
        Write-Host "WARNING: This will delete all database data!" -ForegroundColor Red
        $confirmation = Read-Host "Are you sure? (y/N)"
        if ($confirmation -eq 'y' -or $confirmation -eq 'Y') {
            docker-compose down postgres
            docker volume rm fast-app-2_postgres_data
            docker-compose up -d postgres
            Write-Host "Waiting for database to be ready..." -ForegroundColor Yellow
            Start-Sleep -Seconds 5
            npx prisma db push
            Write-Host "Database reset complete!" -ForegroundColor Green
        } else {
            Write-Host "Database reset cancelled." -ForegroundColor Yellow
        }
    }
    "migrate" {
        Write-Host "Running database migrations..." -ForegroundColor Blue
        npx prisma db push
    }
    "studio" {
        Write-Host "Opening Prisma Studio..." -ForegroundColor Blue
        npx prisma studio
    }
}

# Usage help
if ($Action -eq "help") {
    Write-Host ""
    Write-Host "Usage: .\scripts\db.ps1 <command>" -ForegroundColor White
    Write-Host ""
    Write-Host "Commands:" -ForegroundColor White
    Write-Host "  start   - Start PostgreSQL database" -ForegroundColor Gray
    Write-Host "  stop    - Stop PostgreSQL database" -ForegroundColor Gray
    Write-Host "  restart - Restart PostgreSQL database" -ForegroundColor Gray
    Write-Host "  reset   - Reset database (deletes all data)" -ForegroundColor Gray
    Write-Host "  migrate - Run database migrations" -ForegroundColor Gray
    Write-Host "  studio  - Open Prisma Studio" -ForegroundColor Gray
}