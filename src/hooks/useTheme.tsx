import React, { createContext, useEffect, useState } from 'react'

interface ThemeContextProps {
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
}
export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  setTheme: () => undefined,
})

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const initialTheme =
    typeof window !== 'undefined'
      ? window.localStorage.getItem('theme') || 'light'
      : 'light'
  const [theme, setTheme] = useState<string>(initialTheme)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', theme)
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
