import { Dumbbell, TrendingUp, BarChart3, Clock, Sparkles, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "react-i18next"

export const Hero = () => {
  const { t } = useTranslation()

  const features = [
    {
      icon: Dumbbell,
      title: t("features.unlimited_workouts_title"),
      description: t("features.unlimited_workouts_description"),
    },
    {
      icon: TrendingUp,
      title: t("features.automatic_prs_title"),
      description: t("features.automatic_prs_description"),
    },
    {
      icon: BarChart3,
      title: t("features.volume_by_group_title"),
      description: t("features.volume_by_group_description"),
    },
    {
      icon: Clock,
      title: t("features.fast_to_use_title"),
      description: t("features.fast_to_use_description"),
    },
  ]

  return (
    <section className="relative w-full bg-background overflow-hidden flex flex-col items-center justify-center px-6 pt-20 pb-16 md:pt-32 md:pb-24">
      <div 
        className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff0c_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0c_1px,transparent_1px)] bg-[size:24px_24px] invert dark:invert-0 opacity-100 [mask-image:radial-gradient(ellipse_at_top,black_40%,transparent_80%)]" 
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
      <div className="relative z-10 mx-auto flex max-w-[800px] flex-col items-center text-center mb-20 md:mb-28">
        <Badge 
          variant="outline" 
          className="inline-flex items-center gap-2 rounded-full border-border bg-background/80 px-4 py-1.5 text-xs font-medium backdrop-blur-sm shadow-sm mb-8 pointer-events-none hover:bg-background/80"
        >
          <Sparkles className="h-3.5 w-3.5 text-foreground fill-foreground/10" />
          <span className="text-muted-foreground font-normal">{t("hero.badge")}</span>
        </Badge>
        <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-7xl md:text-8xl max-w-[750px] leading-[1.1] mb-6">
          {t("hero.title_part_1")} <br />
          <span className="italic font-serif font-medium text-foreground">{t("hero.title_italic_1")}</span>.
          <br />
          {t("hero.title_part_2")} <span className="italic font-serif font-medium text-foreground">{t("hero.title_italic_2")}</span>.
        </h1>
        <p className="max-w-[640px] text-base text-muted-foreground sm:text-lg md:text-xl leading-relaxed mb-10 px-2">
          {t("hero.description")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-8 px-4 sm:px-0">
          <Button 
            asChild
            size="lg" 
            className="h-12 w-full sm:w-64 gap-2 rounded-xl text-base bg-foreground text-background hover:bg-foreground/90 shadow-lg shadow-foreground/5"
          >
            <a href="https://fityness.vercel.app/register" className="flex items-center gap-1">
              {t("buttons.start_free")} <ArrowRight className="h-4 w-4"/>
            </a>
          </Button>
          <Button
            asChild
            size="lg" 
            variant="outline" 
            className="h-12 w-full sm:w-64 gap-2 rounded-xl text-base border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
          >
            <a href="https://fityness.vercel.app/login" className="flex items-center gap-1">
              {t("buttons.already_have_account")} <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
        <p className="text-xs text-muted-foreground/80 font-medium tracking-wide">
          {t("hero.footer_info")}
        </p>
      </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl max-[560px]:px-0">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:grid md:grid-cols-4 pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="flex flex-col items-center justify-center bg-background/60 backdrop-blur-[2px] rounded-[24px] p-6 mt-1 shrink-0 w-[75vw] snap-start md:w-auto md:snap-align-none border-border/80"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-foreground text-background mb-5 shrink-0">
                  <Icon className="h-5 w-5 stroke-[2]" />
                </div>
                <div className="flex flex-col items-center justify-center w-full">
                  <h3 className="text-base font-bold tracking-tight text-foreground leading-tight mb-2 w-full text-center">
                    {feature.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-[#737373] font-normal max-w-[200px] text-center">
                    {feature.description}
                  </p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}