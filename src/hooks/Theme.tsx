import React, { createContext, useEffect, useState } from 'react'

export interface ThemeInterface {
  body: string
  text: string
}

export const lightTheme: ThemeInterface = {
  body: '#FFFFFF',
  text: '#000000',
}

export const darkTheme: ThemeInterface = {
  body: '#000000',
  text: '#FFFFFF',
}

interface ThemeContextProps {
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
}
export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined,
)

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<string>(
    window.localStorage.getItem('theme') || 'light',
  )

  useEffect(() => {
    window.localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
