INSTRUCCIONES DE CONFIGURACIÓN IMPORTANTE - REACT + TYPESCRIPT
================================================================

1. IMAGEN DE PERFIL
   - Copia el archivo 'profile_pic.png' a la carpeta 'public/'
   - Comando recomendado:
     cp profile_pic.png public/profile_pic.png
   
   Este archivo debe estar en la carpeta public/ para que esté disponible públicamente.

2. ACTUALIZAR HOMEPAGE EN package.json
   - Abre package.json
   - Busca la línea: "homepage": "https://tu-usuario.github.io/portafolio"
   - Reemplaza "tu-usuario" con tu nombre de usuario de GitHub

3. INSTALAR DEPENDENCIAS
   - Ejecuta: npm install
   - Esto instalará React, TypeScript y todas las dependencias necesarias

4. INICIAR EN DESARROLLO
   - Ejecuta: npm start
   - La aplicación se abrirá en http://localhost:3000
   - TypeScript compilará automáticamente los archivos

5. DESPLEGAR A GITHUB PAGES
   - Crea un repositorio en GitHub llamado "portafolio"
   - Realiza los commits y push:
     git add .
     git commit -m "Initial commit"
     git branch -M main
     git remote add origin https://github.com/tu-usuario/portafolio.git
     git push -u origin main
   
   - Ejecuta: npm run deploy
   - La aplicación estará disponible en: https://tu-usuario.github.io/portafolio

ESTRUCTURA DEL PROYECTO
========================
portafolio/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── profile_pic.png         ← COPIAR AQUÍ
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   └── Navigation.tsx
│   ├── pages/
│   │   ├── SobreMi.tsx
│   │   ├── Curriculum.tsx
│   │   └── Contacto.tsx
│   ├── styles/
│   │   ├── index.css
│   │   ├── App.css
│   │   ├── Navigation.css
│   │   ├── Header.css
│   │   └── Pages.css
│   ├── App.tsx
│   ├── index.tsx
│   └── react-app-env.d.ts
├── tsconfig.json               ← Configuración de TypeScript
├── package.json
├── README.md
└── .gitignore

NOTAS SOBRE TYPESCRIPT
=======================
- Todos los componentes son Functional Components tipados (FC)
- Se utilizan tipos genéricos para props
- El state está completamente tipado
- Los event handlers están tipados
- Strict mode habilitado para mayor seguridad
