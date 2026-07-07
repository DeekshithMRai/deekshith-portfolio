# Portfolio setup script for Windows
# Run: powershell -ExecutionPolicy Bypass -File scripts/setup.ps1

$ErrorActionPreference = "Stop"
$ProjectRoot = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
Set-Location $ProjectRoot

Write-Host "`n=== Deekshith Portfolio Setup ===" -ForegroundColor Cyan

# Find Node.js
$nodeCmd = Get-Command node -ErrorAction SilentlyContinue
if (-not $nodeCmd) {
    $portableNode = Get-ChildItem "$env:USERPROFILE\.local\node" -Directory -ErrorAction SilentlyContinue | Select-Object -First 1
    if ($portableNode) {
        $env:Path = "$($portableNode.FullName);$env:Path"
        Write-Host "Using portable Node at $($portableNode.FullName)" -ForegroundColor Yellow
    } else {
        Write-Host "Node.js not found. Install from https://nodejs.org/ or run setup again after portable Node is downloaded." -ForegroundColor Red
        exit 1
    }
}

Write-Host "Node: $(node --version)" -ForegroundColor Green
Write-Host "npm:  $(npm --version)" -ForegroundColor Green

# Install dependencies
Write-Host "`nInstalling dependencies..." -ForegroundColor Cyan
npm install

# Create .env.local from example if missing
if (-not (Test-Path ".env.local")) {
    Copy-Item ".env.example" ".env.local"
    Write-Host "Created .env.local — add your EmailJS credentials." -ForegroundColor Yellow
}

Write-Host "`n=== Setup complete ===" -ForegroundColor Green
Write-Host "Run: npm run dev" -ForegroundColor White
Write-Host "Then open http://localhost:5173" -ForegroundColor White
