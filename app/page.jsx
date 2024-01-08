// Importaciones de componentes personalizados
import {
  SismoTable,
  ModalLogin,
  CardSelenoide,
  Actions
} from '@/app/components';
import { Divider } from '@nextui-org/react';

// Función Home, el componente principal de la página
export default async function Home() {
  return (
    // Fragmento React para agrupar múltiples elementos
    <>
      {/* Componente ModalLogin para el inicio de sesión o registro */}
      <ModalLogin />
      {/* Sección principal de la página */}
      <section className='py-12'>
        {/* Contenedor flex para organizar CardSelenoide y Actions */}
        <div className='container flex flex-col items-center justify-center gap-10 md:flex-row'>
          {/* Componente CardSelenoide para mostrar información de las válvulas */}
          <CardSelenoide />
          {/* Componente Actions para mostrar acciones realizadas */}
          <Actions />
        </div>
        {/* Divider para separar visualmente las secciones */}
        <Divider className='my-12' id={'sismos'} />
        {/* Contenedor para la tabla de sismos */}
        <div className='container'>
          {/* Componente SismoTable para mostrar datos de sismos */}
          <SismoTable />
        </div>
      </section>
    </>
  );
}
