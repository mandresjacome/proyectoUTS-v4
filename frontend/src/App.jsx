// Componente raíz de la aplicación.
// Responsabilidades:
//   1. Definir el layout general y la cabecera institucional UTS.
//   2. Gestionar la navegación entre las dos secciones principales (pestañas).
//   3. Controlar el modal de tratamiento de datos en la primera visita.
//
// El modal se muestra si localStorage NO tiene la clave 'uts_consentimiento_v1'.
// Las pestañas permiten cambiar entre el módulo de análisis y la ficha técnica.

import React, { useState, useEffect } from 'react';
import PaginaAnalisis from './pages/PaginaAnalisis';
import PaginaAcercaDe from './pages/PaginaAcercaDe';
import ModalTratamientoDatos from './components/ModalTratamientoDatos';

// Clave usada en localStorage para recordar que el usuario ya aceptó el tratamiento
const CLAVE_CONSENTIMIENTO = 'uts_consentimiento_v1';

const App = () => {
  // Pestaña activa — 'analisis' o 'acerca'
  const [paginaActiva, setPaginaActiva] = useState('analisis');

  // Controla si el modal de tratamiento de datos es visible.
  // Se inicializa verificando localStorage para no molestar a usuarios que ya aceptaron.
  const [mostrarModal, setMostrarModal] = useState(false);

  useEffect(() => {
    // Mostrar el modal solo si el usuario no ha aceptado antes en este navegador
    const yaAcepto = localStorage.getItem(CLAVE_CONSENTIMIENTO);
    if (!yaAcepto) {
      setMostrarModal(true);
    }
  }, []);

  /**
   * manejarAceptacionModal — se ejecuta cuando el usuario acepta el tratamiento.
   * Guarda la bandera en localStorage para no volver a mostrar el modal.
   */
  const manejarAceptacionModal = () => {
    localStorage.setItem(CLAVE_CONSENTIMIENTO, 'true');
    setMostrarModal(false);
  };

  /**
   * manejarCierreModal — se ejecuta si el usuario cierra el modal sin aceptar.
   * No guarda nada en localStorage: el modal volverá a aparecer en la próxima visita.
   */
  const manejarCierreModal = () => {
    setMostrarModal(false);
  };

  return (
    <div className="app-layout">

      {/* ── Modal de tratamiento de datos ──
          Se renderiza encima de todo el contenido.
          Solo es visible si el usuario no ha aceptado antes. */}
      {mostrarModal && (
        <ModalTratamientoDatos
          onAceptar={manejarAceptacionModal}
          onCerrar={manejarCierreModal}
        />
      )}

      {/* ── Cabecera institucional UTS ── */}
      <header className="app-header">
        <div className="header-contenido">
          <div className="header-marca">
            <img
              src="/logouts-sin-fondo.png"
              alt="Logo Universidad de Santander UTS"
              className="logo-uts-img"
            />
            <div className="header-divisor" />
            <div className="header-titulo">
              <span className="header-titulo-principal">Gestión Documental</span>
              <span className="header-titulo-sub">Análisis con Inteligencia Artificial</span>
            </div>
          </div>
          <span className="header-badge">Proyecto de Grado</span>
        </div>
      </header>

      {/* ── Barra de navegación por pestañas ──
          Permite alternar entre el módulo de análisis y la ficha técnica del proyecto. */}
      <nav className="nav-pestanas" aria-label="Navegación principal">
        <div className="nav-pestanas-contenido">
          <button
            className={`nav-pestana ${paginaActiva === 'analisis' ? 'nav-pestana--activa' : ''}`}
            onClick={() => setPaginaActiva('analisis')}
            aria-current={paginaActiva === 'analisis' ? 'page' : undefined}
          >
            📋 Analizar documentos
          </button>
          <button
            className={`nav-pestana ${paginaActiva === 'acerca' ? 'nav-pestana--activa' : ''}`}
            onClick={() => setPaginaActiva('acerca')}
            aria-current={paginaActiva === 'acerca' ? 'page' : undefined}
          >
            ℹ️ Acerca del proyecto
          </button>
        </div>
      </nav>

      {/* ── Contenido principal — renderiza la página activa ── */}
      <div className="app-main">
        {paginaActiva === 'analisis' && (
        <PaginaAnalisis onNuevaSesion={() => setMostrarModal(true)} />
      )}
        {paginaActiva === 'acerca'   && <PaginaAcercaDe />}
      </div>

      {/* ── Footer institucional UTS ── */}
      <footer className="app-footer">
        <div className="footer-contenido">
          <p className="footer-proyecto">
            Aplicación web con IA para la gestión documental en Mipymes de Bucaramanga
          </p>
          <p className="footer-creditos">
            Proyecto de Grado · Ingeniería de Sistemas · Unidades Tecnológicas de Santander
          </p>
          <p className="footer-autor">
            Mario Andrés Jácome Mantilla · 2026
          </p>
        </div>
      </footer>

    </div>
  );
};

export default App;

