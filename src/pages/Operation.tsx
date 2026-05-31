import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export default function Operation() {
  const { t } = useTranslation();

  const steps = [
    {
      number: "01",
      title: t("operation.step_1_title"),
      description: t("operation.step_1_description"),
    },
    {
      number: "02",
      title: t("operation.step_2_title"),
      description: t("operation.step_2_description"),
    },
    {
      number: "03",
      title: t("operation.step_3_title"),
      description: t("operation.step_3_description"),
    },
  ];

  return (
    <div className="bg-background text-foreground min-h-screen py-20 px-4 sm:px-6 lg:px-8 space-y-32">
      <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32 self-start mb-8 lg:mb-0">
          <span className="inline-block text-xs font-medium uppercase tracking-wider bg-muted text-muted-foreground px-3 py-1 rounded-full border border-border">
            {t("operation.badge")}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-none">
            {t("operation.title_part_1")} <br />
            <span className="text-muted-foreground/50 font-normal italic">{t("operation.title_italic")}</span>
          </h2>
          <p className="text-muted-foreground max-w-sm text-sm sm:text-base leading-relaxed">
            {t("operation.description")}
          </p>
          <Button asChild size="lg" className="rounded-full font-medium group px-6 py-6 text-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
            <a href="https://fityness.vercel.app/register">
              {t("buttons.create_account")}{" "}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
        <div className="lg:col-span-7 space-y-12">
          {steps.map((step, index) => (
            <Card 
              key={step.number} 
              className="bg-card border border-border/60 shadow-md sticky transition-all duration-300"
              style={{ 
                top: `calc(5rem + ${index * 2}rem)`,
              }}
            >
              <CardContent className="p-8 sm:p-10 flex gap-6 items-start min-h-[160px] bg-card rounded-lg">
                <span className="text-4xl sm:text-5xl font-black text-muted-foreground/20 select-none leading-none pt-1">
                  {step.number}
                </span>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold tracking-tight">{step.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
          <div className="h-20" />
        </div>
      </section>
    </div>
  );
}