import { useState } from "react"
import { useTranslation } from "react-i18next"
import {
  Menu,
  X,
  ArrowRight,
  Sun,
  Moon,
} from "lucide-react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { useTheme } from "@/hooks/useTheme"

import logoWhite from "../../public/logo-white.png"
import logoBlack from "../../public/logo-black.png"

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const { theme, toggleTheme } = useTheme()
  const { t, i18n } = useTranslation()

  const [language, setLanguage] = useState(
    i18n.language || "en",
  )

  const navigation = [
    {
      name: t("nav.resources"),
      href: "#resources",
    },
    {
      name: t("nav.operation"),
      href: "#operation",
    },
    {
      name: t("nav.skills"),
      href: "#skills",
    },
    {
      name: t("nav.faq"),
      href: "#faq",
    },
  ]

  const changeLanguage = async (
    value: string,
  ) => {
    setLanguage(value)

    localStorage.setItem(
      "language",
      value,
    )

    await i18n.changeLanguage(value)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground">
            <img
              src={
                theme === "dark"
                  ? logoBlack
                  : logoWhite
              }
              alt="Logo"
              className="h-5 w-5"
            />
          </div>

          <span className="text-xl font-bold tracking-tight">
            Fity.ness
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-input bg-background transition-colors hover:bg-accent"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          <Select
            value={language}
            onValueChange={changeLanguage}
          >
            <SelectTrigger className="w-[140px]">
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="pt">
                🇧🇷 Português
              </SelectItem>

              <SelectItem value="en">
                🇺🇸 English
              </SelectItem>

              <SelectItem value="es">
                🇪🇸 Español
              </SelectItem>
            </SelectContent>
          </Select>

          <a
            href="https://fityness.vercel.app/login"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t("nav.login")}
          </a>

          <a
            href="https://fityness.vercel.app/register"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-foreground px-4 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            {t("nav.register")}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background md:hidden"
        >
          {isOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 inset-x-0 border-b border-border bg-background px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <hr className="my-4 border-border" />

          <div className="mb-4 flex gap-3">
            <button
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-input"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            <Select
              value={language}
              onValueChange={changeLanguage}
            >
              <SelectTrigger className="flex-1">
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="pt">
                  🇧🇷 Português
                </SelectItem>

                <SelectItem value="en">
                  🇺🇸 English
                </SelectItem>

                <SelectItem value="es">
                  🇪🇸 Español
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="https://fityness.vercel.app/login"
              className="flex h-10 items-center justify-center rounded-lg border border-input"
            >
              {t("nav.login")}
            </a>

            <a
              href="https://fityness.vercel.app/register"
              className="flex h-10 items-center justify-center gap-2 rounded-lg bg-foreground text-background"
            >
              {t("nav.register")}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}