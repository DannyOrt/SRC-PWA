"use client";

// Importación de hooks de React y la biblioteca socket.io-client
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

// Conexión al servidor de socket.io
const socket = io("https://src-app-ukauf.ondigitalocean.app");

// Hook personalizado useValves
export const useValves = () => {

  // Estado para almacenar las respuestas recibidas del socket
  const [responses, setResponses] = useState([]);

  // Estado para almacenar el número de válvulas
  const [noValves, setNoValves] = useState("none");

  // Función para enviar mensajes a través del socket
  const handleMessage = (message) => {
    socket.emit("message", noValves, message);
  };

  // Efecto para manejar la conexión y recepción de mensajes del socket
  useEffect(() => {
    // Obtener el número de válvulas del almacenamiento local
    const valves = localStorage.getItem("valves");

    // Unirse a una sala específica en el servidor de socket usando el número de válvulas
    socket.emit("join", valves);
    // Actualizar el estado con el número de válvulas
    setNoValves(valves);

    // Escuchar mensajes entrantes del socket y actualizar el estado
    socket.on("message", (msg) => {
      setResponses(prevState => [...prevState, msg]);
    });

    // Limpieza al desmontar el componente
    return () => {
      socket.off("message");
      socket.off("join");
    };

  }, []);

  // Retornar el estado y la función para enviar mensajes
  return {responses, handleMessage};
};
