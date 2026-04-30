#!/usr/bin/env node

/**
 * ⚡ QUICK START - React 19 Portfolio
 * 
 * Este archivo explica los comandos rápidos para trabajar con el proyecto
 */

console.log(`
╔════════════════════════════════════════════════════════════════════════════╗
║         🚀 PORTAFOLIO PROFESIONAL - React 19 + Vite                       ║
║                                                                            ║
║                   ¡Bienvenido al Quick Start! 🎉                          ║
╚════════════════════════════════════════════════════════════════════════════╝

📋 TABLA DE CONTENIDOS:
  1. Desarrollo Local
  2. Build & Preview
  3. Desplegar a GitHub Pages
  4. Troubleshooting

═══════════════════════════════════════════════════════════════════════════

1️⃣  DESARROLLO LOCAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Inicia el servidor de desarrollo:

  npm run dev

✓ Servidor corre en: http://localhost:5173
✓ Hot Module Replacement activo (cambios en vivo)
✓ Presiona 'q' para detener el servidor

═══════════════════════════════════════════════════════════════════════════

2️⃣  BUILD & PREVIEW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Compilar para producción:

  npm run build

✓ Crea carpeta 'dist/' con build optimizado
✓ TypeScript compilado
✓ JavaScript minificado
✓ CSS optimizado

Ver preview del build:

  npm run preview

✓ Simula cómo se vería en producción
✓ Corre en: http://localhost:4173

═══════════════════════════════════════════════════════════════════════════

3️⃣  DESPLEGAR A GITHUB PAGES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 PASO 1: Actualizar package.json
────────────────────────────────────
Cambia esto en package.json:

  "homepage": "https://tu-usuario.github.io/portafolio"

Ejemplo (reemplaza "tu-usuario" con tu usuario de GitHub):

  "homepage": "https://carlosazuaje.github.io/portafolio"


📝 PASO 2: Crear repositorio en GitHub
───────────────────────────────────────
1. Ve a github.com
2. Haz clic en "+" → "New repository"
3. Nombre: portafolio
4. Descripción: "Portafolio Profesional - React 19 + Vite"
5. Selecciona "Public"
6. Clic en "Create repository"


📝 PASO 3: Inicializar git (primera vez)
─────────────────────────────────────────
cd c:\\reactJs\\portafolio

# Configurar usuario
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@github.com"

# Inicializar repositorio
git init
git add .
git commit -m "Initial commit: Portfolio React 19 + Vite"
git branch -M main


📝 PASO 4: Conectar con GitHub
──────────────────────────────
git remote add origin https://github.com/tu-usuario/portafolio.git
git push -u origin main

(Reemplaza "tu-usuario" con tu usuario de GitHub)


📝 PASO 5: Desplegar
──────────────────
npm run deploy

✓ Compila el proyecto
✓ Crea build optimizado
✓ Sube a rama gh-pages automáticamente


📝 PASO 6: Verificar Deployment
───────────────────────────────
1. Ve a GitHub.com → tu-usuario/portafolio
2. Haz clic en "Settings"
3. Ve a "Pages" en el menu izquierdo
4. Verifica que:
   - Source: "Deploy from a branch"
   - Branch: "gh-pages" / "(root)"
5. Espera 1-2 minutos

✓ Tu sitio está en: https://tu-usuario.github.io/portafolio

═══════════════════════════════════════════════════════════════════════════

4️⃣  TROUBLESHOOTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ Problema: npm run dev no funciona
✅ Solución:
   rm -r node_modules
   npm install

❌ Problema: Error "Module not found"
✅ Solución:
   npm install

❌ Problema: El sitio no carga después de deploy
✅ Solución:
   1. Verifica "homepage" en package.json
   2. Espera 5 minutos
   3. Limpia caché (Ctrl+Shift+Del)

❌ Problema: Los estilos no cargan
✅ Solución:
   npm run build
   npm run preview
   (Verifica que vea "/portafolio/" en la URL)

═══════════════════════════════════════════════════════════════════════════

📚 ARCHIVOS IMPORTANTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Editar contenido:
  - src/pages/SobreMi.tsx    (Tu info personal)
  - src/pages/Curriculum.tsx (Experiencia laboral)
  - src/pages/Contacto.tsx   (Info de contacto)

Cambiar colores:
  - src/styles/global.css    (CSS variables)

Cambiar foto:
  - public/profile_pic.png   (Tu foto de perfil)

Actualizar datos de deploy:
  - package.json             ("homepage")

═══════════════════════════════════════════════════════════════════════════

🎯 COMANDOS ÚTILES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

# Ver status del git
git status

# Ver ramas disponibles
git branch -a

# Ver historial de commits
git log --oneline

# Hacer cambios + push
git add .
git commit -m "Tu mensaje"
git push

# Deploy después de cambios
npm run build && npm run deploy

═══════════════════════════════════════════════════════════════════════════

💡 TIPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Usa npm run dev mientras editas (ves cambios al instante)
• Haz commits pequeños y frecuentes
• Verifica npm run build antes de hacer deploy
• La foto debe estar en public/profile_pic.png
• Usa npm run lint para validar código

═══════════════════════════════════════════════════════════════════════════

📞 INFORMACIÓN DE CONTACTO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Nombre:   Carlos E. Azuaje
Email:    ce.azuaje@gmail.com
Teléfono: (+54) 911 2600 9240
Ubicación: Buenos Aires, Argentina

═══════════════════════════════════════════════════════════════════════════

✨ ¡Listo para empezar!

  npm run dev         → Empieza a desarrollar
  npm run deploy      → Sube a GitHub Pages
  
═══════════════════════════════════════════════════════════════════════════
`);
