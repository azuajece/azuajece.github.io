# DEPLOY.ps1 - Script para desplegar a GitHub Pages (Windows)

Write-Host "🚀 Iniciando despliegue a GitHub Pages..." -ForegroundColor Green
Write-Host ""

# Paso 1: Verificar que package.json tiene homepage configurado
$packageJson = Get-Content package.json | Select-String "https://.*github.io/portafolio"

if ($packageJson) {
    Write-Host "✅ Homepage configurado correctamente" -ForegroundColor Green
} else {
    Write-Host "❌ ERROR: Homepage no configurado en package.json" -ForegroundColor Red
    Write-Host ""
    Write-Host "Por favor, edita package.json y añade:" -ForegroundColor Yellow
    Write-Host '  "homepage": "https://tu-usuario.github.io/portafolio"' -ForegroundColor Yellow
    Write-Host ""
    exit 1
}

Write-Host ""
Write-Host "1️⃣  Instalando dependencias..." -ForegroundColor Cyan
npm install

Write-Host ""
Write-Host "2️⃣  Compilando TypeScript..." -ForegroundColor Cyan
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build falló" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build exitoso" -ForegroundColor Green

Write-Host ""
Write-Host "3️⃣  Desplegando a GitHub Pages..." -ForegroundColor Cyan
npm run deploy

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ ¡DESPLIEGUE EXITOSO!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Tu portafolio está disponible en:" -ForegroundColor Cyan
    Write-Host "https://tu-usuario.github.io/portafolio" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Cambios en GitHub Pages pueden tardar 1-2 minutos en reflejarse" -ForegroundColor Gray
} else {
    Write-Host ""
    Write-Host "❌ Error en el despliegue" -ForegroundColor Red
    exit 1
}
