# Guía de Setup - Portafolio React 19 + Vite

## ✅ Pre-requisitos

- Node.js 18+ instalado
- npm o yarn

## 🚀 Primeros Pasos

### 1. Instalar dependencias

```bash
npm install
```

### 2. Copiar imagen de perfil (si es necesario)

La imagen debe estar en `public/profile_pic.png`

```bash
# Windows
copy profile_pic.png public\profile_pic.png

# Linux/Mac
cp profile_pic.png public/profile_pic.png
```

### 3. Actualizar homepage en package.json

```json
"homepage": "https://tu-usuario.github.io/portafolio"
```

## 💻 Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# La app se abrirá en http://localhost:5173
```

## 🏗️ Build para Producción

```bash
# Compilar TypeScript y bundlear con Vite
npm run build

# Ver preview del build
npm run preview
```

## 🚀 Desplegar a GitHub Pages

### 1. Crear repositorio en GitHub
- Nombre: `portafolio`
- Público

### 2. Configurar git

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@ejemplo.com"
```

### 3. Inicializar repo local

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tu-usuario/portafolio.git
git push -u origin main
```

### 4. Desplegar

```bash
npm run deploy
```

La app estará disponible en: `https://tu-usuario.github.io/portafolio`

## 📁 Estructura del Proyecto

```
portafolio/
├── src/
│   ├── components/        # Componentes reutilizables
│   │   ├── Header.tsx
│   │   ├── Navigation.tsx
│   │   ├── Header.css
│   │   └── Navigation.css
│   ├── pages/            # Páginas principales
│   │   ├── SobreMi.tsx
│   │   ├── Curriculum.tsx
│   │   └── Contacto.tsx
│   ├── styles/           # Estilos globales
│   │   ├── global.css
│   │   └── Pages.css
│   ├── App.tsx           # Componente principal
│   ├── App.css
│   └── main.tsx          # Entry point
├── public/               # Archivos estáticos
│   └── profile_pic.png   # Tu foto de perfil
├── index.html            # HTML principal
├── vite.config.ts        # Config de Vite
├── tsconfig.json         # Config de TypeScript
├── package.json
└── README.md
```

## 🆕 React 19 Features Utilizados

- **useActionState**: Para manejar formularios de forma moderna
- **memo**: Para optimizar componentes que no cambian frecuentemente
- **useCallback**: Para memoizar callbacks
- **Tipado TypeScript**: Completo en todos los componentes

## 🔍 Lint

```bash
npm run lint
```

## 📝 Notas Importantes

1. La imagen de perfil debe estar en `public/profile_pic.png`
2. El `homepage` en package.json debe apuntar a tu URL de GitHub Pages
3. Los estilos usan CSS variables definidas en `global.css`
4. El diseño es completamente responsivo (mobile-first)

## 🆘 Troubleshooting

### Error: "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Error: "Cannot find profile_pic.png"
- Verifica que la imagen esté en `public/profile_pic.png`
- Abre el HTML y revisa la consola del navegador

### Build falla
```bash
npm run build -- --debug
```

## 💡 Customización

### Cambiar colores
Edita las variables en `src/styles/global.css`:

```css
:root {
  --primary-color: #ff9800;
  --secondary-color: #ffb74d;
  --dark-bg: #1a1a1a;
  /* ... */
}
```

### Cambiar contenido
- Edita los archivos en `src/pages/`
- Actualiza los datos en los componentes

## 🎯 Próximos Pasos

1. Personalizar contenido en cada página
2. Agregar más experiencias en Curriculum
3. Personalizarelementos de contacto
4. Agregar enlaces a redes sociales (si deseas)
