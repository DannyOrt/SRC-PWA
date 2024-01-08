'use client'
// Importación del hook useTheme de next-themes para manejar temas de la interfaz
import { useTheme } from 'next-themes';

// Importación del componente Switch de @nextui-org/react
import { Switch } from '@nextui-org/react';

// Importación de iconos de react-icons
import { FaMoon, FaSun } from 'react-icons/fa6';

// Componente ThemeSwitcher
export const ThemeSwitcher = () => {
  // Uso del hook useTheme para acceder y modificar el tema actual
  const { theme, setTheme, systemTheme } = useTheme();

  // Determina el tema actual, considerando el tema del sistema si es necesario
  const currentTheme = theme === 'system' ? systemTheme : theme;

  // Verifica si el tema actual es oscuro
  const isCheck = currentTheme === 'dark';

  // Estructura JSX del componente Switch
  return (
    <Switch
      suppressHydrationWarning // Suprime la advertencia de hidratación de React
      defaultSelected={isCheck} // Establece el estado inicial del switch según el tema actual
      size='lg' // Tamaño grande para el switch
      color='secondary' // Color secundario
      thumbIcon={({ isSelected, className }) =>
        theme !== 'dark' ? (
          <FaSun className={className} /> // Icono de sol para el tema claro
        ) : (
          <FaMoon className={className} /> // Icono de luna para el tema oscuro
        )
      }
      onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')} // Cambia el tema al opuesto cuando se alterna el switch
    />
  );
};
