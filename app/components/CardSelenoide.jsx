'use client'
// Importaciones de componentes de @nextui-org/react y react-icons
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Button,
  cn,
  Divider
} from '@nextui-org/react';
import NextImage from 'next/image';
import { FaLock, FaLockOpen } from 'react-icons/fa6';

// Importaciones de React
import { useContext, useEffect, useState } from 'react';
import { SelenoideContext } from '@/app/context';

// Componente CardSelenoide
export const CardSelenoide = () => {
  // Estado para almacenar la cantidad de válvulas
  const [valves, setValves] = useState('');

  // Uso del contexto SelenoideContext para acceder a los estados y funciones del contexto
  const { Gas, Water, toggleValve, toggleCloseAll, toggleOpenAll } = useContext(SelenoideContext);

  // Efecto para cargar el número de válvulas desde el almacenamiento local
  useEffect(() => {
    const valves = localStorage.getItem('valves');
    setValves(valves);
  }, []);

  // Clases de estilo para los iconos
  const iconClasses = 'text-xl text-default-500 pointer-events-none flex-shrink-0';

  // Estructura JSX del componente Card
  return (
    <Card isFooterBlurred radius='lg' className='border-none'>
      <CardBody className='overflow-visible py-2'>
        <div className='flex gap-6'>
          {/* Imagen de la electroválvula */}
          <Image
            as={NextImage}
            alt='elec'
            className='flex-1 object-cover'
            src={'https://cdn-icons-png.flaticon.com/512/397/397940.png'}
            width={200}
            height={200}
          />
          <div className='flex-1'>
            {/* Información sobre las electroválvulas */}
            <h1 className='text-lg font-bold'>Electroválvulas</h1>
            <p className='text-sm text-default-500'>
              {valves ? `Válvulas: ${valves}` : 'No hay válvulas'}
            </p>
            {/* Estado de la válvula de agua */}
            <h3 className='mt-4 text-sm'>
              Válvula de Agua:{' '}
              <span
                className={`${!Water ? 'text-red-300' : 'text-green-500'} text-sm font-bold`}
              >
                {Water ? 'Abierta 🟢' : 'Cerrada 🔴'}
              </span>
            </h3>
            {/* Estado de la válvula de gas */}
            <h3 className='mt-4 text-sm'>
              Válvula de Gas:{' '}
              <span
                className={`${!Gas ? 'text-red-300' : 'text-green-500'} text-sm font-bold`}
              >
                {Gas ? 'Abierta 🟢' : 'Cerrada 🔴'}
              </span>
            </h3>
            {/* Botones para controlar las válvulas */}
            <div className='mt-6 flex items-center justify-center gap-6'>
              {/* Botón para la válvula de agua */}
              <Button
                color={Water ? 'success' : 'danger'}
                endContent={
                  Water ? <FaLockOpen className={cn(iconClasses)} /> : <FaLock className={cn(iconClasses)} />
                }
                onClick={() => toggleValve('Water')}
              >
                {!Water ? 'Abrir Agua' : 'Cerrar Agua'}
              </Button>
              {/* Botón para la válvula de gas */}
              <Button
                color={Gas ? 'success' : 'danger'}
                endContent={
                  Gas ? <FaLockOpen className={cn(iconClasses)} /> : <FaLock className={cn(iconClasses)} />
                }
                onClick={() => toggleValve('Gas')}
              >
                {!Gas ? 'Abrir Gas' : 'Cerrar Gas'}
              </Button>
            </div>

            <Divider className='my-4' />

            {/* Botones para abrir o cerrar todas las válvulas */}
            <div className='flex items-center justify-center gap-6'>
              {/* Botón para cerrar todas las válvulas */}
              <Button
                color={Gas && Water ? 'warning' : 'danger'}
                onClick={toggleCloseAll}
                disabled={(!Gas && !Water) || (Gas && Water)}
                className={'px-8 py-2 disabled:cursor-not-allowed'}
              >
                Cerrar Todo
              </Button>
              {/* Botón para abrir todas las válvulas */}
              <Button
                color={Gas && Water ? 'warning' : 'success'}
                onClick={toggleOpenAll}
                disabled={(Gas && Water) || (!Gas && !Water)}
                className={'px-8 py-2 disabled:cursor-not-allowed'}
              >
                Abrir Todo
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
