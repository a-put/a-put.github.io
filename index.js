import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ChevronRight, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PROFILE_SRC = "YOUR_IMAGE_DATA_URI_HERE";

const NAME = "Anton Putintsev";
const TITLE = "Senior Research Engineer – Hybrid Photonics & Quantum Optics";
const TAGLINE = "Pushing the limits of real-time control of polaritonic states and optical computing.";
const LOCATION = "Moscow, Russia";
const EMAIL = "putintsev.ad@gmail.com";
const GITHUB = "https://github.com/antonputintsev";
const LINKEDIN = "https://www.linkedin.com/in/anton-putintsev/";
const RESUME_URL = "CV.pdf";
const FULL_PUBLICATIONS_URL = "#publications"; // Link to full publications list section or page

export default function ProfileLanding() {
  const [prefersReducedMotion] = useState(
    typeof window !== "undefined" && window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false
  );

  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(255,255,255,0.7),rgba(240,240,240,0.9)_40%,rgba(230,230,230,0.7)_60%,transparent)] dark:bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(255,255,255,0.06),rgba(255,255,255,0.04)_40%,rgba(255,255,255,0.03)_60%,transparent)] text-neutral-900 dark:text-neutral-100 antialiased selection:bg-black/90 selection:text-white">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/20 border-b border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <div className="font-semibold tracking-tight">{NAME}</div>
          <nav className="flex items-center gap-2">
            <a href="#work" className="text-sm opacity-80 hover:opacity-100">Projects</a>
            <a href={FULL_PUBLICATIONS_URL} className="text-sm opacity-80 hover:opacity-100 flex items-center gap-1"><BookOpen className="h-4 w-4"/> All Publications</a>
            <a href="#about" className="text-sm opacity-80 hover:opacity-100">About</a>
            <a href="#contact" className="text-sm opacity-80 hover:opacity-100">Contact</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-[360px,1fr] gap-10 items-center">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full">
            <div className="relative aspect-square max-w-[340px] rounded-3xl overflow-hidden mx-auto shadow ring-1 ring-black/5 dark:ring-white/10">
              <img src={PROFILE_SRC} alt={`${NAME} headshot`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">{TITLE}</motion.h1>
            <motion.p className="text-neutral-600 dark:text-neutral-300 text-lg max-w-prose">{TAGLINE}</motion.p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a href={`mailto:${EMAIL}`}><Button className="rounded-2xl h-10 px-5"><Mail className="mr-2 h-4 w-4" /> Contact</Button></a>
              <a href={RESUME_URL} target="_blank" rel="noreferrer"><Button variant="secondary" className="rounded-2xl h-10 px-5"><Download className="mr-2 h-4 w-4" /> Résumé</Button></a>
              <div className="flex items-center gap-2 ml-2">
                <a href={GITHUB}><Github className="h-5 w-5"/></a>
                <a href={LINKEDIN}><Linkedin className="h-5 w-5"/></a>
              </div>
            </div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400">Based in {LOCATION}</div>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-medium tracking-tight">Highlighted Publications</h2>
          <a href={FULL_PUBLICATIONS_URL} className="text-sm opacity-80 hover:opacity-100 flex items-center gap-1">
            <BookOpen className="h-4 w-4"/> View All Publications
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Room temperature, cascadable, all-optical polariton universal gates",
              journal: "Nature Communications (2024)",
              link: "https://www.nature.com/articles/s41467-024-49690-3",
              desc: "Demonstrated universal polariton logic gates operating at room temperature.",
              indexed: true
            },
            {
              title: "Temporal bandwidth of consecutive polariton condensation",
              journal: "Physical Review B – Letter (2025)",
              link: "https://doi.org/10.1103/PhysRevB.111.L161403",
              desc: "First demonstration of consecutive condensation dynamics with unprecedented temporal resolution.",
              indexed: true
            },
            {
              title: "Controlling the spatial profile and energy landscape of organic polariton condensates in double-dye cavities",
              journal: "Physical Review Letters (2023)",
              link: "https://doi.org/10.1103/PhysRevLett.131.186902",
              desc: "Introduced a method for spatial and energetic control in polariton condensates.",
              indexed: true
            }
          ].map((p, i) => (
            <Card key={i} className="rounded-3xl border-black/5 dark:border-white/10">
              <CardContent className="p-5">
                <div className="aspect-[16/10] rounded-2xl bg-neutral-200 dark:bg-neutral-800" />
                <div className="mt-4">
                  <div className="font-medium flex items-center gap-2">
                    {p.title}
                    {p.indexed && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 px-2 py-0.5 rounded-full">
                        <Award className="h-3 w-3"/> Nature Indexed
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{p.journal}</p>
                  <p className="text-sm mt-1">{p.desc}</p>
                  <a href={p.link} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-1 text-sm mt-3 opacity-80 hover:opacity-100">Read paper <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-3xl px-6 pb-20">
        <h2 className="text-xl font-medium tracking-tight mb-4">About</h2>
        <p className="leading-relaxed text-neutral-700 dark:text-neutral-300">
          Senior Researcher in hybrid photonics and quantum optics, leading R&D in polaritonic devices and optical computing. Proven track record in securing funding, mentoring, and publishing high-impact research (PRL, Nature Comms). Passionate about innovation, collaboration, and pushing the boundaries of next-generation technologies.
        </p>
      </section>

      <section id="contact" className="mx-auto max-w-3xl px-6 pb-28">
        <Card className="rounded-3xl border-black/5 dark:border-white/10">
          <CardContent className="p-6 md:p-10">
            <div className="md:flex md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-lg font-medium tracking-tight">Let’s collaborate</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mt-1">Open to new research opportunities and collaborations in quantum optics and photonics.</p>
              </div>
              <a href={`mailto:${EMAIL}`}>
                <Button className="rounded-2xl h-10 px-5 mt-4 md:mt-0">
                  <Mail className="mr-2 h-4 w-4"/> Email me
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="mx-auto max-w-6xl px-6 pb-12 text-sm text-neutral-500 dark:text-neutral-400">© {new Date().getFullYear()} {NAME}</footer>
    </div>
  );
}
