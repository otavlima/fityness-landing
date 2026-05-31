import { Dumbbell, TrendingUp, Calendar, History, BarChart3, ShieldCheck } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function Resources() {
  const { t } = useTranslation()

  const features = [
    {
      icon: Dumbbell,
      title: t("resources.custom_workouts_title"),
      description: t("resources.custom_workouts_description"),
    },
    {
      icon: TrendingUp,
      title: t("resources.real_progress_title"),
      description: t("resources.real_progress_description"),
    },
    {
      icon: Calendar,
      title: t("resources.smart_schedule_title"),
      description: t("resources.smart_schedule_description"),
    },
    {
      icon: History,
      title: t("resources.drilldown_history_title"),
      description: t("resources.drilldown_history_description"),
    },
    {
      icon: BarChart3,
      title: t("resources.deep_analytics_title"),
      description: t("resources.deep_analytics_description"),
    },
    {
      icon: ShieldCheck,
      title: t("resources.no_ads_title"),
      description: t("resources.no_ads_description"),
    },
  ]

  return (
    <div className="min-h-screen min-w-full overflow-x-hidden bg-background font-sans antialiased selection:bg-foreground selection:text-background">
      <main>
        <section id="resources" className="w-full bg-background py-20 md:py-28 scroll-mt-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col items-center text-center mb-16 md:mb-24">
              <span className="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-foreground mb-5">
                {t("resources.badge")}
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl max-w-[900px] leading-[1.15] mb-4">
                {t("resources.title_part_1")} <br />
                <span className="text-muted-foreground/80">{t("resources.title_part_2")}</span>
              </h1>
            </div>
            <div className="relative overflow-hidden rounded-[24px] border border-border bg-border/40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px]">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="flex flex-col items-start bg-background p-8 md:p-10 transition-colors hover:bg-muted/[0.15]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-foreground text-background mb-6 shadow-sm">
                      <Icon className="h-5 w-5 stroke-[2]" />
                    </div>
                    <h2 className="text-lg font-bold tracking-tight text-foreground mb-2.5">
                      {feature.title}
                    </h2>
                    <p className="text-[14px] leading-relaxed text-muted-foreground font-normal">
                      {feature.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}