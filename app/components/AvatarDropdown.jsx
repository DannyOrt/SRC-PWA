'use client'

// Importaciones de componentes de @nextui-org/react y react-icons
import {
  Avatar,
  AvatarIcon,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  cn,
  DropdownSection,
  Link
} from '@nextui-org/react';
import { FaCircleInfo, FaTrash, FaHouse } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';
import { ThemeSwitcher } from '@/app/components/ThemeSwitcher';
import { useTheme } from 'next-themes';

// Componente AvatarDropdown
export const AvatarDropdown = () => {
  // useTheme hook para obtener el tema actual y el tema del sistema
  const { theme, systemTheme } = useTheme();

  // Clases de estilo para los iconos
  const iconClasses = 'text-xl text-default-500 pointer-events-none flex-shrink-0';

  // Determina el tema actual, considerando el tema del sistema si es necesario
  const currentTheme = theme === 'system' ? systemTheme : theme;

  // usePathname hook para obtener la ruta actual
  const route = usePathname();

  // Estructura JSX del menú desplegable
  return (
    <Dropdown backdrop='blur' closeOnSelect={false} placement='bottom-end'>
      <DropdownTrigger>
        {/* Avatar que actúa como disparador del Dropdown */}
        <Avatar
          isBordered
          as='button'
          className='transition-transform'
          color='secondary'
          size='sm'
          icon={<AvatarIcon />}
        />
      </DropdownTrigger>
      <DropdownMenu variant='faded'>
        {/* Sección del menú para la edición de electroválvulas */}
        {route === '/' && (
          <DropdownSection title='Edicion Electroválvulas'>
            <DropdownItem
              key='delete'
              className='text-danger'
              color='danger'
              description='Elimina el número de electroválvulas'
              startContent={
                <FaTrash className={cn(iconClasses, 'text-danger')} />
              }
              onClick={() => {
                localStorage.removeItem('valves')
                window.location.reload()
              }}
            >
              Eliminar
            </DropdownItem>
          </DropdownSection>
        )}
        {/* Sección del menú para cambiar el tema */}
        <DropdownSection title='Cambiar tema'>
          <DropdownItem
            suppressHydrationWarning
            key='new'
            description={
              currentTheme === 'dark'
                ? 'Cambiar a modo claro'
                : 'Cambiar a modo oscuro'
            }
          >
            <ThemeSwitcher />
          </DropdownItem>
        </DropdownSection>

        {/* Sección del menú para Acerca de o Volver a inicio */}
        <DropdownSection
          title={route === '/' ? 'Acerca de' : 'Volver a inicio'}
        >
          <DropdownItem
            key='new'
            description={
              route === '/'
                ? 'Información sobre el proyecto'
                : 'Volver a inicio'
            }
            startContent={
              route === '/' ? (
                <FaCircleInfo className={iconClasses} />
              ) : (
                <FaHouse className={iconClasses} />
              )
            }
          >
            <Link href={route === '/' ? 'about' : '/'}>
              {route === '/' ? 'Acerca de' : 'Inicio'}
            </Link>
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
