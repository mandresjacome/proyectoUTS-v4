# Aplicación Web con IA para la Gestión Documental en Mipymes de Bucaramanga

> **Proyecto de Grado — Unidades Tecnológicas de Santander (UTS)**

Aplicación web que permite a las Mipymes cargar documentos digitalizados (PDFs e imágenes) y obtener en segundos un análisis estructurado: tipo de documento, datos relevantes, alertas de fechas críticas y una sugerencia de respuesta profesional, todo sin almacenar ningún archivo en el servidor.

---

## Características principales

- **OCR con Google Cloud Document AI** — extrae el texto de facturas, contratos, PQRS, documentos judiciales, cartas y cotizaciones.
- **Análisis con Gemini 2.5 Flash** — clasifica el documento en una de 6 categorías y genera un JSON estructurado con los campos más relevantes para la operación de una Mipyme.
- **Zero Storage** — ningún archivo se guarda en disco ni en la nube. El PDF/imagen vive únicamente en RAM durante el procesamiento y se descarta de inmediato.
- **Human-in-the-Loop (HITL)** — la IA nunca actúa de forma autónoma. El usuario siempre revisa y confirma el resultado antes de ejecutar cualquier acción final.
- **Soporte hasta 30 páginas por trozo** — los PDFs extensos se dividen automáticamente en memoria con `pdf-lib` para superar el límite de 15 páginas de Document AI.

---

## Stack tecnológico

| Capa | Tecnología |
|------|-----------|
| Frontend | React 18 — componentes funcionales + Hooks |
| Backend | Node.js + Express |
| OCR | Google Cloud Document AI |
| IA / Análisis | Google Gemini API (`gemini-2.5-flash`) |
| Bundler | Vite 5 |
| Gestión de paquetes | npm workspaces (monorepo) |

---

## Estructura del proyecto

```
proyectoUTS/
├── package.json               ← raíz del monorepo (npm workspaces)
├── backend/
│   ├── server.js              ← arranque del servidor
│   ├── app.js                 ← configuración de Express y rutas
│   ├── routes/
│   │   └── documento.routes.js
│   ├── controllers/
│   │   └── documento.controller.js
│   ├── services/
│   │   ├── ocr.service.js     ← integración Document AI
│   │   └── gemini.service.js  ← integración Gemini API
│   └── middlewares/
│       ├── validarArchivo.js  ← multer memoryStorage + validación MIME
│       └── errorHandler.js    ← manejador global de errores
└── frontend/
    └── src/
        ├── pages/
        │   └── PaginaAnalisis.jsx   ← flujo HITL completo
        ├── components/
        │   ├── FormularioDocumento.jsx
        │   └── ResultadoAnalisis.jsx
        └── services/
            └── documento.service.js ← capa fetch al backend
```

---

## Requisitos previos

- Node.js 18 o superior
- Cuenta de Google Cloud con **Document AI** habilitado y un procesador OCR creado
- API Key de **Google Gemini** (Google AI Studio)
- Archivo de credenciales de servicio de GCP (`.json`)

---

## Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/mandresjacome/proyectoUTS.git
cd proyectoUTS

# 2. Instalar todas las dependencias (backend + frontend)
npm install --workspaces
```

---

## Configuración de variables de entorno

### Backend — `backend/.env`

Crea el archivo `backend/.env` basándote en `backend/.env.example`:

```env
GOOGLE_APPLICATION_CREDENTIALS=./credenciales/tu-archivo.json
DOCUMENT_AI_PROJECT_ID=tu_project_id
DOCUMENT_AI_LOCATION=us
DOCUMENT_AI_PROCESSOR_ID=tu_processor_id
GEMINI_API_KEY=tu_api_key
PORT=3000
```

> Coloca el archivo `.json` de credenciales de GCP dentro de `backend/credenciales/`. Esta carpeta está en `.gitignore` y nunca se sube al repositorio.

### Frontend — `frontend/.env`

```env
VITE_API_URL=http://localhost:3000
```

---

## Ejecución en desarrollo

```bash
# Arranca backend y frontend simultáneamente
npm run dev

# O por separado:
npm run dev:backend    # nodemon en puerto 3000
npm run dev:frontend   # Vite en puerto 5173
```

Abre [http://localhost:5173](http://localhost:5173) en el navegador.

---

## Endpoints de la API

| Método | Ruta | Descripción |
|--------|------|-------------|
| `POST` | `/api/documentos/analizar` | Recibe el documento (multipart), ejecuta OCR + Gemini y devuelve el análisis estructurado para revisión HITL |
| `POST` | `/api/documentos/confirmar` | Acción final — solo se invoca tras confirmación explícita del usuario en la UI |

**Formatos aceptados:** PDF, PNG, JPEG, TIFF — máximo 10 MB por archivo.

---

## Tipos de documentos soportados

| Categoría | Campos extraídos |
|-----------|-----------------|
| `contrato` | partes, objeto, valor, vigencia, obligaciones, cláusulas de riesgo |
| `factura` | número, emisor, receptor, fechas, subtotal, impuestos, total, estado de pago |
| `pqrs` | remitente, motivo, solicitud concreta, plazo legal, fecha límite de respuesta |
| `documento_judicial` | autoridad, expediente, partes, orden principal, plazos, consecuencias |
| `carta` | remitente, destinatario, asunto, acción requerida |
| `cotizacion` | proveedor, cliente, ítems, total, condiciones de pago, tiempo de entrega |

Todos los tipos incluyen un campo **`alertas`** con fechas críticas, cláusulas desfavorables o plazos próximos a vencer.

---

## Principios de diseño

### Zero Storage
El flujo completo ocurre en memoria RAM: `cliente → multer.memoryStorage() → OCR → Gemini → respuesta → descarte`. Ningún documento sensible toca el disco, cumpliendo con la **Ley 1581 de 2012 (Habeas Data)**.

### Human-in-the-Loop (HITL)
El sistema es un asistente cognitivo, no un agente autónomo. Toda acción final requiere la validación explícita del usuario desde la interfaz.

---

## Autor

**Mario Andrés Jácome Mantilla**
Proyecto de Grado — Unidades Tecnológicas de Santander (UTS)
Directora: Yuli Andrea Álvarez Pizarro
