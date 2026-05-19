// Página "Acerca del Proyecto" — Ficha Técnica del Desarrollo.
// Muestra la arquitectura, el stack tecnológico y el flujo de funcionamiento
// del sistema para documentación académica.
// Esta vista NO menciona herramientas de asistencia de codificación;
// presenta únicamente las tecnologías de producción del sistema.

import React from 'react';

// ── Datos del stack tecnológico ──
// Centralizados aquí para facilitar actualizaciones futuras sin tocar el JSX.
const TECNOLOGIAS = [
  {
    categoria: 'Frontend',
    icono: '⚛️',
    items: [
      { nombre: 'React 18', descripcion: 'Biblioteca de interfaz de usuario — componentes funcionales y Hooks' },
      { nombre: 'Vite 5', descripcion: 'Herramienta de compilación y servidor de desarrollo ultrarrápido' },
      { nombre: 'CSS Custom Properties', descripcion: 'Sistema de diseño con variables CSS — identidad visual UTS' },
    ],
  },
  {
    categoria: 'Backend',
    icono: '🖥️',
    items: [
      { nombre: 'Node.js 20', descripcion: 'Entorno de ejecución JavaScript del lado del servidor' },
      { nombre: 'Express 4', descripcion: 'Framework web minimalista para la API REST' },
      { nombre: 'Multer (memoryStorage)', descripcion: 'Recepción de archivos en buffer RAM — sin escritura en disco' },
    ],
  },
  {
    categoria: 'Inteligencia Artificial',
    icono: '🤖',
    items: [
      { nombre: 'Google Cloud Document AI', descripcion: 'OCR de alta precisión para extracción de texto en documentos' },
      { nombre: 'Google Gemini API', descripcion: 'Modelo de lenguaje para clasificación, análisis y sugerencias' },
    ],
  },
  {
    categoria: 'Despliegue',
    icono: '🚀',
    items: [
      { nombre: 'Railway', descripcion: 'Plataforma de despliegue del backend con variables de entorno seguras' },
      { nombre: 'Vercel', descripcion: 'CDN global para el frontend con despliegue continuo desde GitHub' },
    ],
  },
];

// ── Pasos del flujo de procesamiento (Diagrama de Flujo) ──
const PASOS_FLUJO = [
  { num: '1', titulo: 'Selección', detalle: 'El usuario selecciona un documento (PDF, PNG, JPEG o TIFF) desde su dispositivo.' },
  { num: '2', titulo: 'Validación', detalle: 'El frontend valida tipo y tamaño antes de enviar. El backend valida nuevamente en la frontera del sistema.' },
  { num: '3', titulo: 'Buffer RAM', detalle: 'El archivo se carga en memoria RAM del servidor con Multer memoryStorage. Nunca toca el disco.' },
  { num: '4', titulo: 'OCR', detalle: 'Google Cloud Document AI procesa el buffer y extrae el texto con alta fidelidad.' },
  { num: '5', titulo: 'Análisis IA', detalle: 'El texto extraído se envía a Google Gemini para clasificar el documento, generar un resumen y sugerir una respuesta.' },
  { num: '6', titulo: 'Revisión HITL', detalle: 'El resultado llega al usuario. El sistema espera su revisión explícita antes de cualquier acción (Human-in-the-Loop).' },
  { num: '7', titulo: 'Confirmación', detalle: 'Solo tras la aprobación del usuario se completa el flujo. El buffer en RAM es descartado automáticamente.' },
];

const PaginaAcercaDe = () => {
  return (
    <main className="acerca-contenedor">

      {/* ── Encabezado de la sección ── */}
      <h1>Acerca del Proyecto</h1>
      <p className="subtitulo-pagina">
        Ficha técnica del sistema de gestión documental con IA para Mipymes de Bucaramanga.
      </p>

      {/* ── Tarjeta: Descripción del proyecto ── */}
      <section className="card">
        <h2>Descripción General</h2>
        <p className="acerca-parrafo">
          Este aplicativo web integra técnicas de <strong>Reconocimiento Óptico de Caracteres (OCR)</strong> e{' '}
          <strong>Inteligencia Artificial Generativa</strong> para asistir a las Micro, Pequeñas y Medianas Empresas
          (Mipymes) de Bucaramanga en la gestión eficiente de su correspondencia documental.
        </p>
        <p className="acerca-parrafo">
          El sistema extrae automáticamente los datos relevantes de contratos, facturas, cotizaciones,
          derechos de petición y otros documentos empresariales, clasificándolos y generando sugerencias
          de respuesta que el usuario puede revisar y aprobar antes de ejecutar cualquier acción.
        </p>
        <div className="acerca-datos-grid">
          <div className="acerca-dato-item">
            <span className="acerca-dato-label">Institución</span>
            <span className="acerca-dato-valor">Unidades Tecnológicas de Santander — UTS</span>
          </div>
          <div className="acerca-dato-item">
            <span className="acerca-dato-label">Programa</span>
            <span className="acerca-dato-valor">Ingeniería de Sistemas</span>
          </div>
          <div className="acerca-dato-item">
            <span className="acerca-dato-label">Autor</span>
            <span className="acerca-dato-valor">Mario Andrés Jácome Mantilla</span>
          </div>
          <div className="acerca-dato-item">
            <span className="acerca-dato-label">Directora del proyecto</span>
            <span className="acerca-dato-valor">Yuli Andrea Álvarez Pizarro</span>
          </div>
          <div className="acerca-dato-item">
            <span className="acerca-dato-label">Año</span>
            <span className="acerca-dato-valor">2026</span>
          </div>
        </div>
      </section>

      {/* ── Tarjeta: Diagrama de Arquitectura ── */}
      <section className="card">
        <h2>Arquitectura del Sistema</h2>
        <p className="acerca-parrafo" style={{ marginBottom: '1.5rem' }}>
          El sistema sigue una arquitectura cliente-servidor de dos capas con integración
          a servicios externos de Google Cloud para OCR e IA.
        </p>

        {/* Diagrama de arquitectura en tres niveles */}
        <div className="diagrama-arquitectura">

          {/* Nivel 1 — Cliente */}
          <div className="arq-nivel">
            <span className="arq-nivel-etiqueta">Cliente</span>
            <div className="arq-capa arq-capa-frontend">
              <span className="arq-icono">⚛️</span>
              <strong>Frontend React</strong>
              <small>Vercel · CDN Global</small>
            </div>
          </div>

          <div className="arq-flecha">
            <span className="arq-flecha-texto">HTTPS / REST</span>
            <span className="arq-flecha-linea">⟷</span>
          </div>

          {/* Nivel 2 — Servidor */}
          <div className="arq-nivel">
            <span className="arq-nivel-etiqueta">Servidor</span>
            <div className="arq-capa arq-capa-backend">
              <span className="arq-icono">🖥️</span>
              <strong>Backend Node.js</strong>
              <small>Express · Railway</small>
            </div>
          </div>

          <div className="arq-flecha">
            <span className="arq-flecha-texto">Google APIs</span>
            <span className="arq-flecha-linea">⟷</span>
          </div>

          {/* Nivel 3 — Servicios externos */}
          <div className="arq-nivel">
            <span className="arq-nivel-etiqueta">Servicios IA</span>
            <div className="arq-servicios-columna">
              <div className="arq-capa arq-capa-ocr">
                <span className="arq-icono">📄</span>
                <strong>Document AI</strong>
                <small>OCR · Google Cloud</small>
              </div>
              <div className="arq-capa arq-capa-gemini">
                <span className="arq-icono">✨</span>
                <strong>Gemini API</strong>
                <small>IA Generativa · Google</small>
              </div>
            </div>
          </div>

        </div>

        {/* Leyenda de la política Zero Storage */}
        <div className="arq-leyenda">
          <span className="arq-leyenda-icono">🔒</span>
          <span>
            <strong>Política Zero Storage:</strong> los documentos se procesan exclusivamente
            en memoria RAM del servidor y se descartan inmediatamente tras el análisis.
            Ningún archivo es persistido en disco, base de datos ni nube.
          </span>
        </div>
      </section>

      {/* ── Tarjeta: Diagrama de Flujo de Procesamiento ── */}
      <section className="card">
        <h2>Flujo de Procesamiento</h2>
        <p className="acerca-parrafo" style={{ marginBottom: '1.5rem' }}>
          Cada documento pasa por las siguientes etapas desde que el usuario lo selecciona
          hasta que confirma el resultado — aplicando el principio{' '}
          <strong>Human-in-the-Loop (HITL)</strong>.
        </p>

        {/* Pasos del flujo como línea de tiempo vertical */}
        <div className="flujo-contenedor">
          {PASOS_FLUJO.map((paso, indice) => (
            <div key={paso.num} className="flujo-paso">
              {/* Número del paso */}
              <div className="flujo-numero">{paso.num}</div>

              {/* Conector vertical entre pasos (excepto el último) */}
              <div className="flujo-linea-vertical">
                {indice < PASOS_FLUJO.length - 1 && <div className="flujo-conector" />}
              </div>

              {/* Contenido del paso */}
              <div className="flujo-info">
                <strong className="flujo-titulo">{paso.titulo}</strong>
                <p className="flujo-detalle">{paso.detalle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Tarjeta: Stack Tecnológico ── */}
      <section className="card">
        <h2>Stack Tecnológico</h2>
        <div className="stack-grid">
          {TECNOLOGIAS.map((grupo) => (
            <div key={grupo.categoria} className="stack-grupo">
              <div className="stack-grupo-titulo">
                <span>{grupo.icono}</span>
                <strong>{grupo.categoria}</strong>
              </div>
              <ul className="stack-lista">
                {grupo.items.map((item) => (
                  <li key={item.nombre} className="stack-item">
                    <span className="stack-nombre">{item.nombre}</span>
                    <span className="stack-descripcion">{item.descripcion}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Tarjeta: Principios de diseño ── */}
      <section className="card">
        <h2>Principios de Diseño</h2>
        <div className="principios-grid">
          <div className="principio-item">
            <span className="principio-icono">🔒</span>
            <strong>Zero Storage</strong>
            <p>Los documentos nunca se almacenan en servidor ni nube. Solo existen en RAM durante el procesamiento.</p>
          </div>
          <div className="principio-item">
            <span className="principio-icono">👤</span>
            <strong>Human-in-the-Loop</strong>
            <p>El sistema no actúa de forma autónoma. Siempre requiere revisión y aprobación explícita del usuario.</p>
          </div>
          <div className="principio-item">
            <span className="principio-icono">🛡️</span>
            <strong>Privacidad por diseño</strong>
            <p>Ningún dato personal es almacenado. El consentimiento de tratamiento se gestiona conforme a la Ley 1581 de 2012.</p>
          </div>
          <div className="principio-item">
            <span className="principio-icono">🔧</span>
            <strong>Arquitectura modular</strong>
            <p>Separación estricta de responsabilidades: rutas, controladores y servicios independientes.</p>
          </div>
        </div>
      </section>

    </main>
  );
};

export default PaginaAcercaDe;
