# 🏪 QollqaStore

**Catálogo web gratuito.**  
Sin Firebase. Sin APIs. Solo Google Sheets y Vercel.

🌐 **Demo:** https://qollqastore.vercel.app/

---

## Instalar mi tienda

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/devureca/qollqastore&env=SHEET_ID&envDescription=Copia%20el%20ID%20de%20tu%20Google%20Sheet%20y%20pégalo%20aquí&envLink=https://github.com/devureca/qollqastore%23cómo-obtener-el-sheet-id)

**Solo necesitas:**
1. Una cuenta de **Google** (Gmail) — para el Sheet
2. Una cuenta de **Vercel** (gratis) — puedes crearla con Gmail

---

## ¿Cómo funciona?

QollqaStore lee los datos directamente desde un Google Sheet que tú controlas. Editas el Sheet y la web se actualiza al instante. Sin consolas, sin tokens, sin configuraciones técnicas.

---

## Primeros pasos

### 1. Copiar el Google Sheet template

Abre el Sheet de ejemplo:  
👉 [Sheet Template](https://docs.google.com/spreadsheets/d/1d-iR3BSzu50Q6_PnzMRMYp8PcLLSGvPVHKTpYxqHmS8)

Haz clic en **Archivo → Hacer una copia** para tener tu propia versión.

### 2. Compartir el Sheet

En tu Sheet haz clic en **Compartir → Cualquier persona con el enlace → Lector**.

### 3. Obtener el Sheet ID

En la barra de direcciones del navegador verás una URL así:
```
https://docs.google.com/spreadsheets/d/ESTE_ES_EL_ID/edit
```
Copia el ID que está entre `/d/` y `/edit`.

### 4. Hacer clic en el botón "Deploy with Vercel"

- Si no tienes cuenta en Vercel, puedes crearla con Gmail en ese momento
- Cuando te pida el `SHEET_ID`, pega el ID que copiaste en el paso anterior
- Haz clic en **Deploy** y espera 1-2 minutos

### 5. ¡Listo! 🎉

Tu tienda está en línea. Cada vez que edites el Sheet los cambios se ven en segundos.

---

## Estructura del Sheet

### Pestaña `config`

| campo | valor |
|-------|-------|
| nombre | Mi Tienda |
| descripcion | Descripción de la tienda |
| color_primario | #6366f1 |
| whatsapp | 51999888777 |
| instagram | https://instagram.com/mitienda |
| facebook | https://facebook.com/mitienda |
| tiktok | mitienda |
| moneda | S/. |

> ⚠️ El número de WhatsApp debe estar en formato de texto. Escribe un apóstrofe al inicio: `'51999888777`

### Pestaña `productos`

Cabeceras fijas (obligatorias):

| id | nombre | descripcion | imagen | precio | precio_oferta | disponible | categoria | novedad |
|----|--------|-------------|--------|--------|---------------|------------|-----------|---------|

Puedes agregar columnas personalizadas según tu negocio:

| talla | color | marca | consola | region | material |
|-------|-------|-------|---------|--------|----------|

Estas columnas aparecen automáticamente en el detalle del producto.

**Valores:**
- `disponible`: `si` o `no`
- `novedad`: `si` para que aparezca en la sección Novedades
- `precio_oferta`: déjalo vacío si no hay oferta

### Pestaña `slider`

| imagen | titulo | subtitulo |
|--------|--------|-----------|

### Pestaña `reservas`

Productos próximos a llegar con botón de reserva por WhatsApp.

| id | nombre | descripcion | imagen | precio | categoria | fecha_estimada |
|----|--------|-------------|--------|--------|-----------|----------------|

- `precio`: déjalo vacío si no deseas mostrar el precio
- `fecha_estimada`: opcional, ej: "Marzo 2026"

### Pestaña `resenas`

| nombre | texto | estrellas |
|--------|-------|-----------|

### Pestaña `info`

| campo | valor |
|-------|-------|
| direccion | Av. Ejemplo 123 |
| ciudad | Lima, Perú |
| horario | Lun-Vie 9am-6pm |
| telefono | 999888777 |
| correo | tienda@gmail.com |
| envios | Martes y Viernes |
| yape | si |
| plin | si |
| tarjeta | no |
| efectivo | si |

---

## ¿Dónde subo las imágenes?

Puedes usar cualquier URL pública. Recomendamos:

| Servicio | Cómo usarlo |
|----------|-------------|
| **Google Drive** | Sube la imagen, compártela como pública y copia el enlace directo |
| **Imgur** | Sube la imagen en imgur.com y copia la URL directa |
| **Cloudinary** | Plan gratuito generoso, mejor rendimiento y velocidad |

---

## Personalización

Todo se configura desde la pestaña `config` del Sheet:

- **`color_primario`** — acepta cualquier color en formato HEX (`#FF5733`), RGB o nombre CSS
- **`moneda`** — puede ser `S/.`, `$`, `€`, `R$` o lo que necesites
- **`nombre`** — aparece en el navbar, footer y pestaña del navegador

---

## Características

- ✅ Actualización instantánea al editar el Sheet
- ✅ Modo oscuro / Modo claro
- ✅ 100% responsive (móvil y escritorio)
- ✅ Filtros y búsqueda en el catálogo
- ✅ Scroll infinito de 20 en 20
- ✅ Slider de ofertas con flechas
- ✅ Sección de próximos ingresos con reserva por WhatsApp
- ✅ Modal de producto con atributos personalizados
- ✅ Menú hamburguesa en móvil
- ✅ Botón flotante de WhatsApp
- ✅ Sin base de datos, sin backend, sin costos

---

## Stack tecnológico

- **[Astro](https://astro.build/)** — framework web
- **[Tailwind CSS](https://tailwindcss.com/)** — estilos
- **Google Sheets** — base de datos
- **[Vercel](https://vercel.com/)** — hosting

---

## Licencia

MIT — libre para uso personal y comercial.

---

Hecho con ❤️.  
Powered by **devureca**