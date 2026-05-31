import { Target, Zap, Repeat } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();

  const targets = [
    {
      icon: <Target className="h-6 w-6 text-foreground" />,
      title: t("skills.hypertrophy_title"),
      description: t("skills.hypertrophy_description"),
    },
    {
      icon: <Zap className="h-6 w-6 text-foreground" />,
      title: t("skills.strength_title"),
      description: t("skills.strength_description"),
    },
    {
      icon: <Repeat className="h-6 w-6 text-foreground" />,
      title: t("skills.endurance_title"),
      description: t("skills.endurance_description"),
    },
  ];

  return (
    <div className="min-h-screen py-16 min-w-full flex items-center justify-center bg-background text-foreground px-4 sm:px-6 lg:px-8">
      <section className="max-w-6xl mx-auto space-y-12 text-center">
        <div className="space-y-4 max-w-2xl mx-auto">
          <span className="inline-block text-xs font-medium uppercase tracking-wider bg-muted text-muted-foreground px-3 py-1 rounded-full border border-border">
            {t("skills.badge")}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            {t("skills.title_part_1")} <br />
            <span className="text-muted-foreground/50 font-normal italic">{t("skills.title_italic")}</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {targets.map((target, index) => (
            <Card key={index} className="bg-card border border-border/60 shadow-xs flex flex-col items-center text-center justify-between hover:border-border transition-colors">
              <CardContent className="p-8 space-y-4 flex flex-col items-center">
                <div className="p-3 bg-muted rounded-xl border border-border flex items-center justify-center">
                  {target.icon}
                </div>
                <h3 className="text-xl font-bold tracking-tight pt-2">{target.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                  {target.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}