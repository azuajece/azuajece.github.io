#!/bin/bash
# DEPLOY.sh - Script para desplegar rápidamente a GitHub Pages

echo "🚀 Iniciando despliegue a GitHub Pages..."
echo ""

# Paso 1: Verificar que package.json tiene homepage configurado
if grep -q "https://.*github.io/portafolio" package.json; then
    echo "✅ Homepage configurado correctamente"
else
    echo "❌ ERROR: Homepage no configurado en package.json"
    echo ""
    echo "Por favor, edita package.json y añade:"
    echo '  "homepage": "https://tu-usuario.github.io/portafolio"'
    echo ""
    exit 1
fi

echo ""
echo "1️⃣  Instalando dependencias..."
npm install

echo ""
echo "2️⃣  Compilando TypeScript..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build exitoso"
else
    echo "❌ Build falló"
    exit 1
fi

echo ""
echo "3️⃣  Desplegando a GitHub Pages..."
npm run deploy

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ ¡DESPLIEGUE EXITOSO!"
    echo ""
    echo "Tu portafolio está disponible en:"
    echo "https://tu-usuario.github.io/portafolio"
    echo ""
    echo "Cambios actuales en GitHub Pages pueden tardar 1-2 minutos en reflejarse"
else
    echo ""
    echo "❌ Error en el despliegue"
    exit 1
fi
