'use client'
// Importación de useSWR, un hook para realizar solicitudes de datos
import useSWR from 'swr';

// Hook personalizado useListSismos para obtener una lista de sismos
export function useListSismos() {
  // Definición de la función fetcher para realizar solicitudes HTTP y procesar la respuesta
  const fetcher = (...args) => fetch(...args).then(res => res.json());

  // Uso del hook useSWR para obtener datos de la API
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/server/api/listSismos`, // URL de la API para obtener la lista de sismos
    fetcher, // Función fetcher para procesar la respuesta
    { refreshInterval: 1000 } // Intervalo de actualización de 1000 ms (1 segundo)
  );

  // Retorno del estado de la carga, error y los datos de la lista de sismos
  return {
    isLoading: !error && !data, // true si la solicitud está cargando
    isError: error, // true si hay un error en la solicitud
    listSismos: data // Datos de la lista de sismos
  };
}

// Hook personalizado useSismo para obtener datos de un sismo específico
export function useSismo() {
  // Definición de la función fetcher para realizar solicitudes HTTP y procesar la respuesta
  const fetcher = (...args) => fetch(...args).then(res => res.json());

  // Uso del hook useSWR para obtener datos de la API
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/server/api/sismo`, // URL de la API para obtener datos de un sismo específico
    fetcher, // Función fetcher para procesar la respuesta
    { refreshInterval: 1000 } // Intervalo de actualización de 1000 ms (1 segundo)
  );

  // Retorno del estado de la carga, error y los datos del sismo
  return {
    isLoading: !error && !data, // true si la solicitud está cargando
    isError: error, // true si hay un error en la solicitud
    sismo: data // Datos del sismo
  };
}
