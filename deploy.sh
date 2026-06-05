#!/bin/bash
# ─────────────────────────────────────────────────────────────
# Script de deploy para AWS EC2
# Uso: ./deploy.sh
# Ejecutar desde el servidor EC2 dentro del directorio del proyecto
# ─────────────────────────────────────────────────────────────

set -e  # Detener si hay cualquier error

echo "======================================"
echo " Jhoana Rosales Boutique — Deploy"
echo " $(date)"
echo "======================================"

# 1. Obtener últimos cambios
echo "[1/5] Actualizando codigo desde Git..."
git pull origin main

# 2. Reconstruir imagen Docker
echo "[2/5] Construyendo imagen Docker..."
docker-compose -f docker-compose.prod.yml build app

# 3. Reiniciar solo el contenedor de la app (sin downtime en la DB)
echo "[3/5] Reiniciando contenedor..."
docker-compose -f docker-compose.prod.yml up -d --no-deps app

# 4. Aplicar migraciones de base de datos
echo "[4/5] Aplicando migraciones..."
sleep 5  # Esperar que el contenedor inicie
docker-compose -f docker-compose.prod.yml exec -T app npx prisma migrate deploy

# 5. Verificar que está corriendo
echo "[5/5] Verificando estado..."
docker-compose -f docker-compose.prod.yml ps

echo ""
echo "Deploy completado exitosamente: $(date)"
echo "======================================"
