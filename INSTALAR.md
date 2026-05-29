# 🚀 Guía de instalación — Jhoana Rosales Boutique

## Paso 1: Copiar el proyecto

Copia la carpeta `Eccomers` a `C:\Eccomers` en tu computador.

## Paso 2: Abrir terminal en la carpeta

```cmd
cd C:\Eccomers
```

## Paso 3: Instalar dependencias

```cmd
npm install
```

## Paso 4: Configurar variables de entorno

```cmd
copy .env.example .env
```

Edita el archivo `.env` con tus datos de MySQL:

```env
DATABASE_URL="mysql://root:TU_PASSWORD@localhost:3306/jhoana_boutique"
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=TU_PASSWORD
DB_NAME=jhoana_boutique
SESSION_SECRET=un_secreto_largo_y_aleatorio_aqui
WHATSAPP_NUMBER=573001234567
APP_BASE_URL=http://localhost:3000
```

## Paso 5: Crear la base de datos en MySQL

```sql
CREATE DATABASE jhoana_boutique CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

## Paso 6: Correr migraciones de Prisma

```cmd
npx prisma migrate dev --name init
```

## Paso 7: Cargar datos de prueba

```cmd
npm run db:seed
```

## Paso 8: Iniciar el servidor

```cmd
npm run dev
```

## ✅ ¡Listo!

Abre tu navegador en: **http://localhost:3000**

Panel admin: **http://localhost:3000/admin**

| Cuenta | Email | Contraseña |
|---|---|---|
| Administrador | admin@jhoanarosales.com | Admin2024! |
| Cliente demo | cliente@demo.com | Cliente123! |

**Cupones disponibles:** `BIENVENIDA15` · `VERANO20`

---

## Comandos adicionales

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor con recarga automática |
| `npm run db:studio` | GUI visual de la base de datos |
| `npm run db:seed` | Recargar datos iniciales |
| `npm run db:reset` | Borrar y recrear toda la DB |
| `npm run build:css:prod` | Compilar CSS para producción |
