import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import Resources from "./Resources"
import Operation from "./Operation"
import Skills from "./Skills"
import Questions from "./Questions"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen max-w-full overflow-x-hidden bg-background font-sans antialiased selection:bg-foreground selection:text-background">
      <Header />
      <main>
        <Hero />
        <section id="resources" className="min-h-screen bg-muted/30 border-t border-border flex items-center justify-center">
          <Resources />
        </section>

        <section id="operation" className="min-h-screen bg-background border-t border-border flex items-center justify-center">
          <Operation />
        </section>

        <section id="skills" className="min-h-screen bg-muted/30 border-t border-border flex items-center justify-center">
          <Skills />
        </section>

        <section id="faq" className="min-h-screen bg-background border-t border-border flex items-center justify-center">
          <Questions />
        </section>
      </main>
      <Footer />
    </div>
  )
}