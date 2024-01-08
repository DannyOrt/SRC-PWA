'use client'
/// Importaciones de bibliotecas y componentes necesarios
import { NextUIProvider } from '@nextui-org/react' // Proveedor de UI de NextUI
import { ThemeProvider } from 'next-themes' // Proveedor de temas de Next.js
import { SWRConfig } from 'swr' // Configuración global de SWR
import { ToastContainer } from 'react-toastify' // Contenedor para notificaciones toast
import { SelenoideProvider } from '@/app/context' // Contexto personalizado para Selenoide

// Componente Providers que envuelve la aplicación con varios proveedores
export default function Providers({ children }) {
  return (
    // Proveedor de temas que permite cambiar entre temas claros y oscuros
    <ThemeProvider
      attribute='class'
      defaultTheme='dark'
      themes={['light', 'dark']}
    >
      {/* Proveedor de NextUI para estilos y componentes */}
      <NextUIProvider>
        {/* Configuración global de SWR para la gestión de solicitudes de datos */}
        <SWRConfig
          value={{
            refreshInterval: 3000, // Intervalo de refresco de 3000 ms (3 segundos)
            fetcher: (resource, init) =>
              fetch(resource, init).then(res => res.json()) // Función global para obtener datos
          }}
        >
          {/* Proveedor del contexto Selenoide */}
          <SelenoideProvider>{children}</SelenoideProvider>
          {/* Contenedor para notificaciones toast */}
          <ToastContainer />
        </SWRConfig>
      </NextUIProvider>
    </ThemeProvider>
  )
}
