# Publish to GitHub
# Run after: gh auth login

$ErrorActionPreference = "Stop"
$ProjectRoot = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
Set-Location $ProjectRoot

$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

Write-Host "`n=== Publish to GitHub ===" -ForegroundColor Cyan

gh auth status 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Not logged in to GitHub. Run:" -ForegroundColor Yellow
    Write-Host "  gh auth login" -ForegroundColor White
    Write-Host "Then run this script again." -ForegroundColor Yellow
    exit 1
}

$repoName = "deekshith-portfolio"
$remote = gh repo view "DeekshithMRai/$repoName" --json url 2>$null

if (-not $remote) {
    Write-Host "Creating GitHub repo DeekshithMRai/$repoName..." -ForegroundColor Cyan
    gh repo create "DeekshithMRai/$repoName" --public --source=. --remote=origin --description "Premium portfolio built with React 19, Three.js, GSAP, and Framer Motion"
} else {
    Write-Host "Repo already exists." -ForegroundColor Green
    git remote get-url origin 2>$null
    if ($LASTEXITCODE -ne 0) {
        git remote add origin "https://github.com/DeekshithMRai/$repoName.git"
    }
}

Write-Host "Pushing to GitHub..." -ForegroundColor Cyan
git push -u origin main

Write-Host "`nDone! Repo: https://github.com/DeekshithMRai/$repoName" -ForegroundColor Green
Write-Host "Next: Import at https://vercel.com/new" -ForegroundColor White
