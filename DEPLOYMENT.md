# 🚀 Guía de Despliegue - GitHub Pages

## ✅ Estado Actual

Tu portafolio está **completamente construido** y listo para desplegar.

```
✓ Build exitoso: dist/ contiene 203 KB de JavaScript minificado
✓ CSS optimizado: 9.69 KB de estilos
✓ Todas las dependencias instaladas
```

## 📋 Pasos para Desplegar

### Paso 1: Configurar GitHub

1. Ve a [github.com](https://github.com) y loguéate
2. Crea un nuevo repositorio llamado `portafolio`
3. **Deja las opciones por defecto (público)**

### Paso 2: Actualizar package.json

En el archivo `package.json`, actualiza esta línea con tu usuario de GitHub:

```json
"homepage": "https://tu-usuario.github.io/portafolio"
```

**Ejemplo:**
```json
"homepage": "https://carlosazuaje.github.io/portafolio"
```

### Paso 3: Configurar Git (primera vez)

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@github.com"
```

### Paso 4: Inicializar repositorio local

```bash
cd c:\reactJs\portafolio

git init
git add .
git commit -m "Initial commit: Portfolio React 19 + Vite"
git branch -M main
git remote add origin https://github.com/tu-usuario/portafolio.git
git push -u origin main
```

### Paso 5: Desplegar a GitHub Pages

```bash
npm run deploy
```

Este comando:
1. Compila el proyecto
2. Crea un build optimizado
3. Sube automáticamente a la rama `gh-pages`

### Paso 6: Verificar en GitHub

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** → **Pages**
3. Verifica que:
   - Source: **Deploy from a branch**
   - Branch: **gh-pages** / **(root)**

## 🔗 Acceder a tu Portafolio

Una vez desplegado, estará disponible en:

```
https://tu-usuario.github.io/portafolio
```

**Ejemplo:**
```
https://carlosazuaje.github.io/portafolio
```

## 📝 Actualizar el Contenido

Después de hacer cambios:

```bash
# Hacer cambios en los archivos

# Compilar y verificar localmente
npm run dev

# Hacer commit
git add .
git commit -m "Actualizar contenido"
git push

# Desplegar a GitHub Pages
npm run deploy
```

## 🆘 Si Algo Falla

### La página no carga después de desplegar

1. Verifica que `homepage` en `package.json` es correcto
2. Revisa que la rama `gh-pages` existe en GitHub
3. Espera 5 minutos para que GitHub Pages actualice

### Errores en la consola del navegador

1. Abre DevTools (F12)
2. Ve a **Console**
3. Verifica que los archivos cargan desde `/portafolio/`

### El sitio carga pero no se ve nada

1. Limpia caché del navegador (Ctrl+Shift+Del)
2. Refresca la página (Ctrl+R)
3. Prueba en incógnito

## 📋 Checklist Final

- [ ] Actualicé `homepage` en package.json con mi usuario
- [ ] Creé repositorio en GitHub llamado `portafolio`
- [ ] Ejecuté `git init` y `git add .`
- [ ] Hice push a `origin main`
- [ ] Ejecuté `npm run deploy`
- [ ] Verifiqué en GitHub Pages settings
- [ ] El portafolio carga en `https://tu-usuario.github.io/portafolio`

## 💡 Comandos Útiles

```bash
# Ver estado del repositorio
git status

# Ver ramas
git branch -a

# Ver commits
git log --oneline

# Deshacer último commit (si no hiciste push aún)
git reset --soft HEAD~1

# Verificar que el build es correcto
npm run build && npm run preview
```

## 🎯 Próximos Pasos (Opcional)

1. **Agregar dominio personalizado** (opcional):
   - Compra un dominio
   - En GitHub Pages settings → Custom domain
   - Añade los registros DNS

2. **Mejorar el portafolio**:
   - Agregar más experiencias
   - Incluir proyectos destacados
   - Agregar links a redes sociales

3. **Optimizaciones**:
   - Agregar Google Analytics
   - Mejorar SEO
   - Agregar sitemap.xml

## 📞 Contacto

Si tienes problemas, puedes:
- Revisar la [documentación de GitHub Pages](https://docs.github.com/es/pages)
- Buscar en Stack Overflow
- Abrir un issue en el repositorio
