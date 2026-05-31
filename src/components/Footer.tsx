import {
  ArrowRight,
  Trophy,
  Star,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/hooks/useTheme"
import { useTranslation } from "react-i18next"

import logoWhite from "../../public/logo-white.png"
import logoBlack from "../../public/logo-black.png"

export default function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()
  const { theme } = useTheme()

  const links = [
    { label: t("nav.resources"), href: "#resources" },
    { label: t("nav.faq"), href: "#faq" },
    {
      label: t("nav.contact"),
      href: "https://www.instagram.com/fityness.app/",
    }
  ]

  return (
    <footer className="w-full border-t border-border bg-background text-foreground">
      <div className="relative w-full overflow-hidden bg-foreground text-background py-20 px-4 sm:px-6 lg:px-8">
        <div
          className="
            absolute inset-0 pointer-events-none opacity-[0.07]
            bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
            bg-[size:32px_32px]
          "
        />

        <div className="relative z-10 mx-auto max-w-6xl space-y-8 text-center">
          <div className="flex justify-center">
            <div className="flex items-center justify-center rounded-full border border-background/20 bg-background/10 p-4 backdrop-blur-xs">
              <Trophy className="h-8 w-8 text-background" />
            </div>
          </div>

          <div className="mx-auto max-w-3xl space-y-4">
            <h2 className="text-4xl font-black leading-none tracking-tight text-background sm:text-6xl">
              {t("footer.title_part_1")} <br />
              <span className="font-normal italic text-background/50">
                {t("footer.title_italic")}
              </span>
            </h2>

            <p className="mx-auto max-w-md text-sm leading-relaxed text-background/70 sm:text-base">
              {t("footer.description")}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group w-full rounded-full bg-background/90 px-8 py-6 text-sm font-medium text-foreground transition duration-300 hover:bg-background sm:w-auto"
            >
              <a href="https://fityness.vercel.app/register">
                {t("buttons.start_free_now")}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>

            <Button
              asChild
              variant="ghost"
              size="lg"
              className="w-full rounded-full px-8 py-6 text-sm font-medium text-background transition-colors hover:bg-background/10 hover:text-background sm:w-auto"
            >
              <a href="https://fityness.vercel.app/login">
                {t("buttons.already_have_account")}
                <ArrowRight className="ml-2 h-4 w-4 opacity-60" />
              </a>
            </Button>
          </div>

          <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-8 text-xs font-medium uppercase tracking-widest text-background/60">
            <div className="flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5 opacity-70" />
              <span>{t("footer.badge_minimalist")}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 opacity-70" />
              <span>{t("footer.badge_no_ads")}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 opacity-70" />
              <span>{t("footer.badge_free")}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-background px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground p-1">
              <img
                src={
                  theme === "dark"
                    ? logoBlack
                    : logoWhite
                }
                alt="Logo"
                className="h-4 w-4"
              />
            </div>

            <span className="text-sm font-bold tracking-tight">
              Fity.ness
            </span>

            <span className="text-xs text-muted-foreground">
              © {currentYear}
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}