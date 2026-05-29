# 🌸 Jhoana Rosales Boutique — E-commerce

E-commerce profesional MVC para tienda de ropa femenina. Stack: Node.js + Express + EJS + MySQL + Prisma + Tailwind CSS + Alpine.js + Chart.js.

## Stack tecnológico

| Capa | Tecnología |
|---|---|
| Backend | Node.js 18+, Express.js 4 |
| ORM | Prisma 5 + MySQL |
| Vistas | EJS + express-ejs-layouts |
| Estilos | Tailwind CSS 3 (CDN en dev) |
| Interactividad | Alpine.js 3 |
| Dashboard | Chart.js |
| Sesiones | express-session + MySQL store |
| Seguridad | Helmet, CSRF, Rate Limiting, bcryptjs |

## Instalación rápida

### Prerrequisitos
- Node.js 18+
- MySQL 8+
- npm o yarn

### Pasos

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar entorno
cp .env.example .env
# Editar .env con tus credenciales de MySQL

# 3. Crear la base de datos en MySQL
mysql -u root -p -e "CREATE DATABASE jhoana_boutique CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"

# 4. Ejecutar migraciones
npx prisma migrate dev --name init

# 5. Cargar datos iniciales
npm run db:seed

# 6. Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en: http://localhost:3000

## Credenciales por defecto

| Rol | Email | Contraseña |
|---|---|---|
| Administrador | admin@jhoanarosales.com | Admin2024! |
| Cliente demo | cliente@demo.com | Cliente123! |

**Cupones de prueba:** `BIENVENIDA15` (15%), `VERANO20` (20%)

## Estructura del proyecto

```
Eccomers/
├── app.js                   # Configuración Express
├── server.js                # Entry point
├── prisma/
│   ├── schema.prisma        # Modelo de datos
│   └── seed.js              # Datos iniciales
├── src/
│   ├── config/              # DB, sesiones
│   ├── controllers/         # Lógica HTTP (delgada)
│   │   └── admin/           # Controllers del panel admin
│   ├── services/            # Lógica de negocio central
│   ├── repositories/        # Acceso a datos (Prisma)
│   ├── routes/              # Definición de rutas
│   │   └── admin/           # Rutas del panel admin
│   ├── middlewares/         # Auth, roles, rate limit, upload
│   ├── validations/         # Reglas express-validator
│   └── utils/               # Helpers, constantes, logger
├── views/
│   ├── layouts/             # main.ejs, admin.ejs
│   ├── partials/            # Navbar, footer, flash, cart sidebar
│   ├── pages/               # Vistas de cliente
│   └── admin/               # Vistas del panel admin
└── public/
    ├── css/                 # input.css + output.css (Tailwind)
    ├── js/                  # Módulos JS del frontend
    └── images/              # Imágenes de productos
```

## Módulos del sistema

### Storefront (cliente)
- **Home** `/` — Hero, categorías, productos destacados, banner de fidelización
- **Catálogo** `/productos` — Filtros por categoría, talla, precio, búsqueda y orden
- **Detalle** `/productos/:slug` — Selector de talla, stock en tiempo real, agregar al carrito
- **Carrito** `/carrito` — Gestión de items, cálculo de subtotales
- **Checkout** `/checkout` — Datos de envío, cupón, confirmación vía WhatsApp
- **Pedidos** `/mis-pedidos` — Historial y puntos de fidelización

### Panel Admin `/admin`
- **Dashboard** — KPIs, gráficas diarias/mensuales con Chart.js, bajo stock
- **Productos** — CRUD completo con subida de imágenes
- **Inventario** — Edición inline de stock por talla
- **Pedidos** — Filtros por estado, detalle, cambio de estado, confirmación de pago
- **Promociones** — Crear cupones por porcentaje o monto fijo con fechas de vigencia

## Reglas de negocio implementadas

- ✅ Inventario por variante (producto + talla)
- ✅ Validación de stock antes de agregar al carrito y al crear pedido
- ✅ Programa de puntos: 1 punto por cada $10.000 COP en compras confirmadas
- ✅ Contraentrega disponible solo en Cali, Colombia
- ✅ Pedidos vía WhatsApp con mensaje preformateado y editable
- ✅ Token único para que el admin confirme el pago desde el panel
- ✅ Descuentos con precio tachado visible en catálogo y detalle
- ✅ Promociones con fecha inicio/fin y límite de usos

## Seguridad implementada (security_qa_agent)

| Control | Implementación |
|---|---|
| Passwords | bcryptjs 12 rounds |
| Sessions | MySQL store, httpOnly, secure en prod |
| Rate limiting | 10 intentos/15min en login |
| CSRF | csurf middleware |
| Headers | Helmet + CSP |
| Input sanitization | express-validator en auth y checkout |
| Roles | Middleware requireAdmin en todas las rutas /admin |

## Comandos útiles

```bash
npm run dev          # Desarrollo con nodemon
npm run db:migrate   # Crear migración nueva
npm run db:seed      # Recargar datos iniciales
npm run db:studio    # Abrir Prisma Studio (GUI de DB)
npm run db:reset     # Resetear DB y volver a sembrar
npm run build:css    # Compilar Tailwind en modo watch
```

## Próximas mejoras recomendadas

1. **Integración Wompi** — La abstracción de pagos ya está preparada en `checkout_payments_agent`
2. **Upload a S3/Cloudinary** — Reemplazar almacenamiento local de imágenes
3. **Emails transaccionales** — Nodemailer para confirmaciones de pedidos
4. **Redis para sesiones** — Mayor rendimiento en producción
5. **Tests E2E** — Jest + Supertest para endpoints críticos
6. **PWA / Service Worker** — Experiencia mobile más fluida
7. **Google Analytics / Meta Pixel** — Tracking de conversiones
8. **Multi-imagen por producto** — Ya preparado el campo `images` en el schema

---
*Desarrollado con arquitectura MVC estricta · Paleta: #FFFFFF · #000000 · #E8B4B8*
"# Eccomers" 
