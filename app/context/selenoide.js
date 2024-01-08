'use client'
// Importaciones de React y hooks personalizados
import { createContext, useReducer } from 'react';
import { useValves } from '@/app/hooks/useValves';
import { negativeMessage } from '@/app/assets/toast';
import { useTheme } from 'next-themes';

// Creación de un contexto de React para el estado de las válvulas solenoide
export const SelenoideContext = createContext({});

// Reductor para manejar el estado de las válvulas solenoide
export const selenoideReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_VALVE':
      // Cambia el estado de una válvula específica
      return {
        ...state,
        [action.payload]: !state[action.payload]
      };
    case 'TOGGLE_CLOSE_ALL':
      // Cierra todas las válvulas
      return {
        ...state,
        Gas: false,
        Water: false
      };
    case 'TOGGLE_OPEN_ALL':
      // Abre todas las válvulas
      return {
        ...state,
        Gas: true,
        Water: true
      };
    default:
      return state;
  }
};

// Proveedor del contexto SelenoideContext
export const SelenoideProvider = ({ children }) => {
  // useReducer para manejar el estado de las válvulas
  const [valves, dispatch] = useReducer(selenoideReducer, {
    Gas: true,
    Water: true
  });

  // Hook useTheme para obtener el tema actual
  const { theme } = useTheme();

  // Hook personalizado para manejar mensajes relacionados con las válvulas
  const { handleMessage } = useValves();

  // Función para alternar el estado de una válvula específica
  const toggleValve = typeValve => {
    try {
      handleMessage(
        valves[typeValve] ? `Close${typeValve}` : `Open${typeValve}`
      );
      dispatch({ type: 'TOGGLE_VALVE', payload: typeValve });
    } catch (e) {
      negativeMessage(theme, `Error al cerrar ${typeValve}`);
    }
  };

  // Función para cerrar todas las válvulas
  const toggleCloseAll = () => {
    try {
      handleMessage('CloseAll');
      dispatch({ type: 'TOGGLE_CLOSE_ALL' });
    } catch (e) {
      negativeMessage(theme, `Error al cerrar todas las válvulas`);
    }
  };

  // Función para abrir todas las válvulas
  const toggleOpenAll = () => {
    try {
      handleMessage('OpenAll');
      dispatch({ type: 'TOGGLE_OPEN_ALL' });
    } catch (e) {
      negativeMessage(theme, `Error al abrir todas las válvulas`);
    }
  };

  // Proveedor del contexto que envuelve a los hijos con el estado de las válvulas y funciones
  return (
    <SelenoideContext.Provider
      value={{
        ...valves,
        toggleValve,
        toggleCloseAll,
        toggleOpenAll
      }}
    >
      {children}
    </SelenoideContext.Provider>
  );
};
