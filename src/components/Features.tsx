import { Dumbbell, TrendingUp, BarChart3, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useTranslation } from "react-i18next"

export const Features = () => {
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
    <section className="relative w-full bg-background py-12 md:py-16 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff0c_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0c_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="relative z-10 mx-auto max-w-7xl max-[560px]:px-6">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:grid md:grid-cols-4 pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="flex flex-col items-center justify-center bg-background rounded-[24px] p-6 shrink-0 w-[75vw] snap-start md:w-auto md:snap-align-none"
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