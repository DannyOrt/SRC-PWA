// Importaciones de componentes de la librería @nextui-org/react para la interfaz de usuario
import {
  CardHeader,
  Divider,
  Card,
  CardBody,
  Image,
  CardFooter,
  Link
} from '@nextui-org/react';

// Array 'members' que contiene información sobre los miembros del equipo
const members = [
  {
    name: 'Daniela Ortega',
    body: 'Amante de la tecnología y la innovación. Su superpoder es convertir el café en código.',
    git: 'https://github.com/DannyOrt'
  },
  {
    name: 'David Reyes',
    body: 'Experto en hacer que las cosas sucedan. Si hay un problema, él tiene la solución.',
    git: 'https://github.com/DannyOrt'
  }
];

// Componente funcional 'About' para mostrar información sobre la empresa y su equipo
export default function About() {
  return (
    <div className='p-10'>
      {/* Encabezado de la sección */}
      <h1 className='mb-4 text-4xl font-bold md:text-6xl'>
        ¡Bienvenido a Nuestra Aventura!
      </h1>
      {/* Descripción de la empresa */}
      <p className='mb-8'>
        Somos SCR, una empresa apasionada que se dedica a proporcionar
        soluciones innovadoras para la seguridad del hogar.
      </p>
      {/* Contenedor para el logo y las tarjetas de los miembros */}
      <div className='flex w-full flex-col items-center justify-center gap-5 md:flex-row'>
        {/* Imagen del logo de SCR */}
        <div>
          <Image
            alt='SCR Logo'
            className='object-cover'
            height={300}
            src='/images/scr-removebg.png'
            width={300}
          />
        </div>
        {/* Mapeo del array 'members' para mostrar las tarjetas de cada miembro */}
        {members.map(({ name, body, git }, i) => (
          <Card className='max-w-[400px]' key={i}>
            <CardHeader className='flex gap-3'>
              <Image
                alt={name}
                height={40}
                radius='sm'
                src='https://avatars.githubusercontent.com/u/86160567?s=200&v=4'
                width={40}
              />
              <div className='flex flex-col'>
                <p className='text-md'>{name}</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>{body}</p>
            </CardBody>
            <Divider />
            <CardFooter>
              {/* Link al perfil de GitHub del miembro */}
              <Link isExternal showAnchorIcon href={git}>
                Visita mi GitHub.
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      {/* Secciones de misión y visión de la empresa */}
      <h2 className='my-4 text-2xl font-bold'>Nuestra Misión</h2>
      <p className='mb-8'>
        Es transformar la seguridad del hogar mediante la integración de
        tecnologías avanzadas y soluciones inteligentes...
      </p>
      <h2 className='mb-4 text-2xl font-bold'>Nuestra Visión</h2>
      <p className='mb-8'>
        Es ser líderes en la industria de la seguridad del hogar...
      </p>
      <p>
        En SCR, combinamos tecnología, creatividad y diversión...
      </p>
    </div>
  );
}
