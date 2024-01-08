'use client'

// Importaciones de componentes de @nextui-org/react y assets personalizados
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input
} from '@nextui-org/react';
import { SearchIcon } from '@/app/assets'; // Icono personalizado
import { useEffect, useState } from 'react'; // Hooks de React
import { positiveMessage, negativeMessage } from '@/app/assets/toast'; // Funciones de notificaciones
import { useTheme } from 'next-themes'; // Hook para usar el tema de Next.js

// Componente ModalLogin
export const ModalLogin = () => {
  // Estados para controlar la visibilidad del modal y el valor del input
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState('');

  // Hook useTheme para obtener el tema actual
  const {theme} = useTheme();

  // Efecto para mostrar el modal basado en si 'valves' está en el almacenamiento local
  useEffect(() => {
    const valves = localStorage.getItem('valves');
    setShowModal(!valves);
  }, []);

  // Función para guardar el valor y cerrar el modal
  const saveAndCloseModal = () => {
    try {
      localStorage.setItem('valves', value); // Guardar en el almacenamiento local
      setShowModal(false); // Cerrar el modal
      window.location.reload(); // Recargar la página
      positiveMessage(theme); // Mostrar mensaje positivo
    } catch (e) {
      negativeMessage(theme); // Mostrar mensaje negativo en caso de error
    }
  };

  // Estructura JSX del modal
  return (
    <Modal
      isOpen={showModal}
      onClose={() => setShowModal(false)}
      placement='top-center'
    >
      <ModalContent>
        <ModalHeader className='flex flex-col gap-1'>
          Ingresa su serial de las electroválvulas
        </ModalHeader>
        <ModalBody>
          <Input
            autoFocus
            endContent={
              <SearchIcon className='pointer-events-none flex-shrink-0 text-2xl text-default-400' />
            }
            label='No. Electroválvulas'
            placeholder='Enter your email'
            variant='bordered'
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onPress={saveAndCloseModal}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
