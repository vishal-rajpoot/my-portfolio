"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Download, Mail } from "lucide-react"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/animated-cartoon-developer-working-on-laptop-in-modern.jpg"
          alt="Developer working on laptop"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        {/* Animated overlay for depth */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/85"
          animate={{
            background: [
              "linear-gradient(to bottom right, rgba(0,0,0,0.85), rgba(0,0,0,0.75), rgba(0,0,0,0.85))",
              "linear-gradient(to bottom right, rgba(0,0,0,0.80), rgba(0,0,0,0.70), rgba(0,0,0,0.80))",
              "linear-gradient(to bottom right, rgba(0,0,0,0.85), rgba(0,0,0,0.75), rgba(0,0,0,0.85))",
            ],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        {/* Animated golden glow */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,175,93,0.15),transparent_60%)]"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 z-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-balance relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hi, I'm{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Vishal Rajput</span>
              <motion.span
                className="absolute -inset-2 bg-primary/20 blur-2xl rounded-full -z-10"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </span>
          </motion.h1>

          <motion.div
            className="text-2xl md:text-4xl font-semibold mb-6 h-16"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <TypeAnimation
              sequence={[
                "Senior Full-Stack Engineer",
                2000,
                "React & Next.js Expert",
                2000,
                "Cloud Architecture Specialist",
                2000,
                "Scalable Systems Builder",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
              className="bg-gradient-to-r from-primary to-foreground/80 bg-clip-text text-transparent"
            />
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            4.5+ years of experience building scalable web applications, mobile apps, and cloud infrastructure.
            Specializing in React, Node.js, AWS, and modern full-stack development.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="golden-gradient hover:opacity-90 transition-opacity text-black font-semibold"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {[
              { icon: Github, url: "https://github.com/" },
              { icon: Linkedin, url: "https://www.linkedin.com/in/" },
            ].map((social, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  size="icon"
                  variant="outline"
                  className="hover:border-primary hover:text-primary transition-colors bg-transparent"
                  onClick={() => window.open(social.url, "_blank")}
                >
                  <social.icon className="h-5 w-5" />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-1">
            <motion.div
              className="w-1.5 h-1.5 bg-primary rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
          </div>
          <span className="text-xs text-muted-foreground">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
