'use client'

import { createContext, useContext, useState } from 'react'

const InternetContext = createContext({})

export const InternetContextProvider = ({ children }) => {
  const [inet, setIntet] = useState(null)
  return (
    <InternetContext.Provider value={{ inet, setIntet }}>
      {children}
    </InternetContext.Provider>
  )
}

export const useInternetContext = () => useContext(InternetContext)
