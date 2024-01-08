'use client'
// Importaciones de componentes de la librería @nextui-org/react para la interfaz de usuario
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider
} from '@nextui-org/react';

import React from 'react';

// Importación de hooks de React
import { useEffect, useState } from 'react';

// Importación de un hook personalizado para manejar la lógica relacionada con las electroválvulas
import { useValves } from '@/app/hooks/useValves';

// Diccionario para mapear las respuestas de las acciones a mensajes legibles para el usuario
const dictionary = {
  OpenWater: 'Válvula de agua abierta 🚿',
  CloseWater: 'Válvula de agua cerrada 🚿',
  OpenGas: 'Válvula de gas abierta 🔥',
  CloseGas: 'Válvula de gas cerrada 🔥',
  OpenAll: 'Válvulas abiertas 🚿🔥',
  CloseAll: 'Válvulas cerradas 🚿🔥'
};

// Componente Actions para mostrar las acciones realizadas en las válvulas
export const Actions = () => {
  // Estado para almacenar información de las válvulas
  const [valves, setValves] = useState('');
  // Utiliza el hook personalizado para obtener las respuestas de las válvulas
  const { responses } = useValves();

  // Efecto para obtener el estado actual de las válvulas desde el almacenamiento local al cargar el componente
  useEffect(() => {
    const valves = localStorage.getItem('valves');
    setValves(valves);
  }, []);

  // Renderizado del componente
  return (
    <Card className='max-h-[210px] w-3/4 md:w-[450px]'>
      <CardHeader className='justify-between'>
        <div className='flex gap-5'>
          <div className='flex flex-col items-start justify-center gap-1'>
            <h4 className='text-small font-semibold leading-none text-default-600'>
              Acciones
            </h4>
            <h5 className='text-small tracking-tight text-default-400'>{`@${valves}`}</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className='px-3 py-0 text-small text-default-400'>
        {/* Mapeo de las respuestas a elementos visuales */}
        {[...responses].reverse().map((response, index) => (
          <React.Fragment key={index}>
            <div className='flex items-center justify-between p-2'>
              <p className='text-default-400'>{dictionary[response]}</p>
              <Avatar
                className='flex-shrink-0'
                color='success'
                size='mini'
                src='https://cdn-icons-png.flaticon.com/512/397/397940.png'
              />
            </div>
            <Divider className='w-full' />
          </React.Fragment>
        ))}
      </CardBody>
      <CardFooter className='gap-3'>
        <div className='flex gap-1'>
          <p className='text-small font-semibold text-default-400'>
            {responses.length}
          </p>
          <p className='text-small text-default-400'>Actions</p>
        </div>
      </CardFooter>
    </Card>
  );
};
