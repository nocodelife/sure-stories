"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Users,
  Mic,
  FileText,
  Check,
  X,
  Quote,
  Calendar,
  Sparkles,
  Shield,
  Heart,
  Play,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/5">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-xl font-serif text-foreground">
            Sure Stories
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm text-muted hover:text-foreground transition-colors">
              How it Works
            </a>
            <a href="#about" className="text-sm text-muted hover:text-foreground transition-colors">
              About
            </a>
            <a
              href="#get-started"
              className="text-sm bg-accent text-white px-5 py-2.5 rounded-lg hover:bg-accent-hover transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeIn}>
                <div className="inline-block px-4 py-1.5 bg-warm-light text-warm text-sm font-medium rounded-full mb-6">
                  Award-winning documentary interviewer
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                  Your customers have{" "}
                  <span className="text-warm">answers</span>. I help you hear them.
                </h1>
                <p className="text-lg text-muted leading-relaxed mb-8 max-w-lg">
                  You know you should talk to customers more. But you&apos;re busy running the business.
                  I handle the interviews and turn them into insights, stories, and videos you can actually use.
                </p>
                <p className="text-sm text-muted mb-8 max-w-lg">
                  I&apos;m Hollie — I&apos;ve spent years as a documentary filmmaker learning how to
                  draw out real stories from real people. Now I bring that skill to customer research.
                </p>
                <a
                  href="#get-started"
                  className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-accent-hover transition-all hover:shadow-lg"
                >
                  Book a conversation
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/hollie.jpg"
                    alt="Hollie Harrington - Customer Interview Expert"
                    width={500}
                    height={600}
                    className="w-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                          <Mic className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">Interviews</p>
                          <p className="text-xs text-muted">30-45 min</p>
                        </div>
                      </div>
                      <div className="w-px h-8 bg-foreground/10" />
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-warm rounded-full flex items-center justify-center">
                          <Play className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">Video Stories</p>
                          <p className="text-xs text-muted">Ready to share</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Problem/Solution */}
        <section className="py-20 bg-warm-light/50">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-4">
                The people paying you have all the{" "}
                <span className="text-warm">answers</span>.
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Your customers know why they chose you, what nearly stopped them,
                and how you compare to alternatives. That&apos;s invaluable insight —
                if you have time to ask.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                {...stagger}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-foreground/5"
              >
                <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                  <X className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl mb-4">The Reality</h3>
                <p className="text-muted leading-relaxed">
                  You&apos;re busy. Customer calls keep slipping down the list.
                  When you do talk to them, it&apos;s about support issues or renewals —
                  not the deeper questions that shape your product and positioning.
                </p>
              </motion.div>

              <motion.div
                {...stagger}
                transition={{ delay: 0.2 }}
                className="bg-accent text-white rounded-3xl p-8 shadow-lg"
              >
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl mb-4">Let Me Handle It</h3>
                <p className="text-white/80 leading-relaxed">
                  I run the interviews so you don&apos;t have to. You get deep, honest
                  conversations with customers — without taking time away from
                  running your business.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Surveys vs Interviews */}
        <section className="py-20 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div {...fadeIn} className="text-center mb-16">
              <p className="text-warm text-sm font-medium mb-2">Already running surveys?</p>
              <h2 className="text-3xl md:text-4xl mb-4">Surveys tell you what. Interviews tell you why.</h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Surveys are great for breadth — quick data from lots of people. But they&apos;re shallow.
                Interviews go deeper, uncovering the stories and motivations behind the numbers.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                {...stagger}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-foreground/5"
              >
                <p className="text-warm text-sm font-medium mb-4">Surveys</p>
                <ul className="space-y-3">
                  {[
                    "Breadth — reach many customers quickly",
                    "Structured questions, limited answers",
                    "Shows patterns and trends",
                    "Hard to understand the 'why'",
                    "Shallow — surface-level feedback",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted">
                      <span className="text-warm mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                {...stagger}
                transition={{ delay: 0.2 }}
                className="bg-accent text-white rounded-3xl p-8 shadow-lg"
              >
                <p className="text-warm text-sm font-medium mb-4">Interviews</p>
                <ul className="space-y-3">
                  {[
                    "Depth — truly understand each customer",
                    "Open conversation, follow-up questions",
                    "Reveals the stories behind decisions",
                    "Uncovers motivations and emotions",
                    "Rich — publishable quotes and insights",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80">
                      <span className="text-warm mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.p
              {...fadeIn}
              className="text-center text-muted mt-12 max-w-lg mx-auto"
            >
              You don&apos;t have to choose. Use surveys for the numbers, interviews for the narrative.
              Together, they give you the full picture.
            </motion.p>
          </div>
        </section>

        {/* How it Works */}
        <section id="how-it-works" className="py-20 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-4">How it works</h2>
              <p className="text-muted text-lg">Four simple steps to customer clarity</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  icon: MessageCircle,
                  title: "Discovery Call",
                  desc: "A short call to understand your business and what you want to learn.",
                },
                {
                  step: "02",
                  icon: Users,
                  title: "Planning",
                  desc: "Together we identify which customers to speak with and what questions matter.",
                },
                {
                  step: "03",
                  icon: Mic,
                  title: "Interviews",
                  desc: "I interview each customer one-on-one. 30-45 minutes, recorded.",
                },
                {
                  step: "04",
                  icon: FileText,
                  title: "Insights",
                  desc: "Clear summary, direct quotes, and written customer stories ready to use.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-3xl p-6 shadow-sm border border-foreground/5 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-warm font-medium">{item.step}</span>
                    <div className="w-10 h-10 bg-accent-light rounded-xl flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-lg mb-2">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-accent text-white">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-4">What you&apos;ll learn</h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Deep customer conversations reveal things surveys and NPS scores never will.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Sparkles,
                  title: "Why They Chose You",
                  desc: "The real reasons customers picked you over alternatives — in their own words. Perfect for positioning and messaging.",
                },
                {
                  icon: Shield,
                  title: "Competitor Insights",
                  desc: "See your market through your customers' eyes. Learn who else they considered and what made the difference.",
                },
                {
                  icon: Heart,
                  title: "Honest Feedback",
                  desc: "Customers open up to an external interviewer. You get the truth — the hesitations, the frustrations, the wins.",
                },
                {
                  icon: Calendar,
                  title: "Your Time Back",
                  desc: "I handle scheduling, interviews, and follow-ups. You get the insights without the calendar chaos.",
                },
                {
                  icon: FileText,
                  title: "Ready-to-Use Content",
                  desc: "Written stories and video case studies you can publish immediately. No editing required.",
                },
                {
                  icon: Users,
                  title: "Depth, Not Data",
                  desc: "30-45 minute conversations that go beyond surface-level feedback. Real understanding, not just metrics.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/10 backdrop-blur rounded-3xl p-6"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg mb-2">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-20 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeIn}>
                <h2 className="text-3xl md:text-4xl mb-6">What you get</h2>
                <p className="text-muted mb-8">
                  A complete package designed to give you actionable insights and ready-to-use content.
                </p>

                <div className="space-y-4">
                  {[
                    "Planning session to define questions",
                    "5 recorded customer interviews (30-45 min each)",
                    "Full transcripts of every conversation",
                    "Summary report with key themes and quotes",
                    "5 written customer stories, ready to publish",
                    "Expertly edited video case studies for social media & web",
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-warm-light rounded-2xl inline-block">
                  <p className="text-sm text-muted">
                    <span className="font-medium text-foreground">Timeline:</span> 3-4 weeks from first call
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-foreground/5"
              >
                <div className="text-center">
                  <p className="text-sm text-warm font-medium mb-2">Example Package</p>
                  <h3 className="text-2xl md:text-3xl mb-2">5 Customer Interviews</h3>
                  <p className="text-muted mb-6">Everything you need to understand your customers</p>

                  <div className="grid grid-cols-2 gap-6 py-6 border-y border-foreground/10">
                    <div>
                      <p className="text-3xl font-serif">5</p>
                      <p className="text-xs text-muted">Interviews</p>
                    </div>
                    <div>
                      <p className="text-3xl font-serif">5</p>
                      <p className="text-xs text-muted">Written Stories</p>
                    </div>
                    <div>
                      <p className="text-3xl font-serif">5</p>
                      <p className="text-xs text-muted">Video Case Studies</p>
                    </div>
                    <div>
                      <p className="text-3xl font-serif">3-4</p>
                      <p className="text-xs text-muted">Weeks</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted mt-6 italic">
                    Smaller and larger packages available
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="py-16 bg-warm-light/50">
          <div className="mx-auto max-w-4xl px-6">
            <motion.div {...fadeIn} className="text-center">
              <Quote className="w-12 h-12 text-warm mx-auto mb-6" />
              <blockquote className="text-2xl md:text-3xl font-serif leading-relaxed mb-6">
                You know talking to customers matters. You just don&apos;t have time.
                I do it for you — and you get the insights, the quotes, and the
                video stories without lifting a finger.
              </blockquote>
            </motion.div>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="py-20 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div {...fadeIn} className="text-center mb-16">
              <p className="text-warm text-sm font-medium mb-2">Who is this for?</p>
              <h2 className="text-3xl md:text-4xl">This is for busy founders who...</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Know they should talk to customers more — but can't find the time",
                "Want deep insights, not just NPS scores and survey data",
                "Need compelling customer stories for their website and sales decks",
                "Are curious how customers really see them vs competitors",
                "Are preparing for a rebrand, launch, or funding round",
                "Want video testimonials without the awkward DIY approach",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-foreground/5"
                >
                  <div className="w-8 h-8 bg-accent-light rounded-lg flex items-center justify-center mb-4">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <p className="text-foreground leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 bg-accent text-white">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 md:order-1"
              >
                <p className="text-white/60 text-sm font-medium mb-2">Meet your interviewer</p>
                <h2 className="text-3xl md:text-4xl mb-6">Hollie Harrington</h2>
                <div className="space-y-4 text-white/80 leading-relaxed">
                  <p>
                    Award-winning documentary filmmaker who spent years interviewing people
                    for a living — drawing out real stories, building trust quickly, and
                    finding the moments that matter.
                  </p>
                  <p>
                    She now brings that same approach to customer conversations. No scripts.
                    No leading questions. Just genuine curiosity and the patience to let
                    people speak.
                  </p>
                  <p className="text-white/60 text-sm">
                    When she&apos;s not interviewing customers, she works as an actress. She lives in London.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 md:order-2"
              >
                <Image
                  src="/hollie.jpg"
                  alt="Hollie Harrington"
                  width={400}
                  height={500}
                  className="rounded-3xl shadow-2xl mx-auto"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="get-started" className="py-20 md:py-32">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <motion.div {...fadeIn}>
              <Calendar className="w-12 h-12 text-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl mb-4">
                Ready to hear what your customers really think?
              </h2>
              <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
                No pitch. No pressure. Just a short conversation to see if this is right for you.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-accent-hover transition-all hover:shadow-lg"
              >
                Book a 20-minute call
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-foreground/10 py-8">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">Sure Stories · London</p>
          <p className="text-xs text-muted">© 2025 Sure Stories. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
