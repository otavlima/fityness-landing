import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"

import type { ReactNode } from "react"

type Theme = "light" | "dark"

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

type ThemeProviderProps = {
  children: ReactNode
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
})

export function ThemeProvider(
  props: ThemeProviderProps,
) {
  const { children } = props

  const [theme, setTheme] =
    useState<Theme>("dark")

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme")

    if (
      savedTheme === "light" ||
      savedTheme === "dark"
    ) {
      setTheme(savedTheme)

      if (savedTheme === "dark") {
        document.documentElement.classList.add(
          "dark",
        )
      } else {
        document.documentElement.classList.remove(
          "dark",
        )
      }
    } else {
      document.documentElement.classList.add(
        "dark",
      )
    }
  }, [])

  const toggleTheme = () => {
    const nextTheme =
      theme === "dark"
        ? "light"
        : "dark"

    setTheme(nextTheme)

    localStorage.setItem(
      "theme",
      nextTheme,
    )

    if (nextTheme === "dark") {
      document.documentElement.classList.add(
        "dark",
      )
    } else {
      document.documentElement.classList.remove(
        "dark",
      )
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}