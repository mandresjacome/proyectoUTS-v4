# Información del Proyecto de Grado

**Título:** Diseño y desarrollo de una aplicación web con inteligencia artificial para la gestión documental y recomendación de respuestas en Mipymes de Bucaramanga.
**Autor:** Mario Andrés Jácome Mantilla
**Directora:** Yuli Andrea Álvarez Pizarro

---

## 🎯 Objetivos del Proyecto

### Objetivo General
Desarrollar una aplicación web orientada a la recomendación de acciones para la gestión documental en Mipymes, mediante la integración de visión artificial y modelos de lenguaje natural, para optimizar los tiempos de respuesta y apoyar la toma de decisiones.

### Objetivos Específicos
1. **Analizar** los tipos de documentos más frecuentes recibidos por las Mipymes, con el fin de estructurar los requerimientos del motor de recomendaciones.
2. **Diseñar** la arquitectura de software y la interfaz de la aplicación, definiendo un flujo de procesamiento de archivos seguro (Zero Storage).
3. **Implementar** el módulo de extracción de texto utilizando la API de Google Cloud y Node.js, garantizando su operatividad sin almacenamiento persistente en disco.
4. **Integrar** el modelo de inteligencia artificial (Gemini) para interpretar el texto extraído, generar opciones de respuesta y mostrarlas en el entorno web mediante React.
5. **Evaluar** el desempeño del motor de recomendaciones mediante pruebas de funcionamiento y precisión, empleando datos sintéticos que permitan verificar su eficacia en un entorno controlado.

---

## 📦 Entregables (Resultados Esperados)

1. **Documento de Diseño y Arquitectura:** Un documento técnico que incluya el análisis de los requerimientos de las Mipymes, el diseño de la arquitectura del software (diagramas de componentes y flujo de datos), y el prototipo de la interfaz de usuario (Mockups), evidenciando el diseño del flujo de procesamiento "Zero Storage".
2. **Aplicación Web Funcional (Motor de Recomendaciones):** El producto de software operativo, compuesto por el frontend (React) y el backend (Node.js), con la integración exitosa de las APIs de Google Cloud (Visión Artificial / OCR) y Gemini (LLM), operando mediante procesamiento volátil en memoria RAM.
3. **Informe de Pruebas y Evaluación:** Un reporte técnico que documente las pruebas de rendimiento, extracción de texto y precisión de las respuestas generadas por el motor de recomendaciones, utilizando un banco de datos sintéticos controlados.
4. **Repositorio de Código y Manuales:** El código fuente del proyecto debidamente versionado y documentado (en GitHub), acompañado de un manual técnico (para el despliegue del sistema) y un manual de usuario (guía de uso del dashboard de React).

---

## 🛠️ Stack Tecnológico y Fundamentos Teóricos

* **Frontend:** React (Desarrollo bajo el concepto de Single-Page Application - SPA).
* **Backend:** Node.js con Express.
* **Procesamiento de Documentos (OCR):** Google Cloud Document AI (Visión Artificial para extracción de texto).
* **Inteligencia Artificial (LLM):** Google Gemini API (Para interpretar la semántica del texto y formular recomendaciones lógicas).
* **Principios de Arquitectura Clave:**
    * **Procesamiento Volátil en Memoria (Zero Storage):** Manipulación de buffers de archivos PDF/Imágenes directamente en la memoria RAM del servidor. Ningún documento sensible se almacena o persiste en discos físicos o bases de datos (cumpliendo con la Ley 1581 de 2012 / Habeas Data).
    * **Human-in-the-Loop (HITL):** El sistema actúa como asistente cognitivo. La IA no toma decisiones autónomas definitivas; el usuario final siempre valida, aprueba o modifica la recomendación generada.

---

## 📌 Contexto Adicional
* **Problema que resuelve:** Las Mipymes pierden mucho tiempo leyendo, transcribiendo y clasificando documentos físicos digitalizados (facturas, solicitudes, radicados). Las soluciones de IA tradicionales exponen los datos al guardar los documentos. Este proyecto optimiza el tiempo garantizando total privacidad.
* **Impacto Laboral:** Dignifica el trabajo administrativo, reduciendo labores mecánicas y repetitivas, permitiendo a los empleados enfocarse en análisis y decisiones estratégicas.

*¡Manos a la obra! - Tu Arquitecto, ProyectoMarioJacome.*
