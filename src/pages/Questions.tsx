import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

export default function Questions() {
  const { t } = useTranslation();

  const faqs = [
    {
      id: "item-1",
      question: t("faq.q1"),
      answer: t("faq.a1"),
    },
    {
      id: "item-2",
      question: t("faq.q2"),
      answer: t("faq.a2"),
    },
    {
      id: "item-3",
      question: t("faq.q3"),
      answer: t("faq.a3"),
    },
    {
      id: "item-4",
      question: t("faq.q4"),
      answer: t("faq.a4"),
    },
    {
      id: "item-5",
      question: t("faq.q5"),
      answer: t("faq.a5"),
    },
  ];

  return (
    <div className="bg-background text-foreground py-20 px-4 sm:px-6 lg:px-8">
      <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-6">
          <span className="inline-block text-xs font-medium uppercase tracking-wider bg-muted text-muted-foreground px-3 py-1 rounded-full border border-border">
            {t("faq.badge")}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-none">
            {t("faq.title_part_1")} <br />
            {t("faq.title_part_2")}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            {t("faq.support_text")}{" "}
            <a href="https://www.instagram.com/fityness.app/" className="text-foreground underline underline-offset-4 font-medium hover:opacity-80 transition-opacity">
              {t("faq.support_link")}
            </a>
          </p>
        </div>
        <div className="lg:col-span-7 w-full">
          <Accordion type="single" collapsible defaultValue="item-1" className="w-full border-none">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-none py-2">
                <AccordionTrigger className="text-left font-bold text-lg sm:text-xl md:text-2xl tracking-tight py-4 hover:no-underline text-foreground transition-all [&[data-state=open]>svg]:rotate-180">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pt-2 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}