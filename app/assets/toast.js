'use client'

// Importación de la función toast desde la biblioteca react-toastify
import { toast } from 'react-toastify'
// Importación del hook useTheme de next-themes para manejar temas en una aplicación Next.js
import { useTheme } from 'next-themes'

/**
 * Función para mostrar un mensaje positivo (de éxito) usando un toast.
 * @param {string} theme - El tema actual de la interfaz de usuario (claro u oscuro).
 * @param {string} message - El mensaje a mostrar en el toast. Por defecto, es un mensaje genérico sobre el guardado de electroválvulas.
 */
const positiveMessage = (
  theme,
  message = 'Se ha guardado el No. Electroválvulas'
) => {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT, // Posición del toast en la parte superior derecha de la pantalla
    theme: theme === 'dark' ? 'dark' : 'light' // El tema del toast, que depende del tema actual de la interfaz
  })
}

/**
 * Función para mostrar un mensaje negativo (de error) usando un toast.
 * @param {string} theme - El tema actual de la interfaz de usuario.
 * @param {string} message - El mensaje a mostrar en el toast. Por defecto, es un mensaje genérico sobre un error al guardar electroválvulas.
 */
const negativeMessage = (
  theme,
  message = 'Error al guardar al guardar el No. Electroválvulas'
) => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT, // Posición del toast en la parte superior derecha de la pantalla
    theme: theme === 'dark' ? 'dark' : 'light' // El tema del toast
  })
}

// Exportación de las funciones para su uso en otros componentes o módulos
export { positiveMessage, negativeMessage }
