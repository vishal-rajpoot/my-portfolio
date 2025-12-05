"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Cloud, Database, Smartphone } from "lucide-react"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Expert in React, Next.js, Node.js, and modern JavaScript frameworks",
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Building cross-platform mobile apps with React Native",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "AWS infrastructure, CI/CD pipelines, and scalable architectures",
    },
    {
      icon: Database,
      title: "Backend Systems",
      description: "PostgreSQL, MySQL, Redis, RabbitMQ, and microservices",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section id="about" className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <motion.div
            className="w-24 h-1 golden-gradient mx-auto mb-12"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              <motion.p className="text-lg text-muted-foreground leading-relaxed" variants={itemVariants}>
                I'm a passionate Senior Full-Stack Engineer with 4.5+ years of experience building modern web and mobile
                applications. I specialize in creating scalable, high-performance solutions that solve real-world
                problems.
              </motion.p>
              <motion.p className="text-lg text-muted-foreground leading-relaxed" variants={itemVariants}>
                My expertise spans across the entire development stack - from crafting intuitive user interfaces with
                React and Next.js to architecting robust backend systems with Node.js and PostgreSQL. I have extensive
                experience with AWS cloud services, implementing CI/CD pipelines, and building real-time applications
                with WebSockets and RabbitMQ.
              </motion.p>
              <motion.p className="text-lg text-muted-foreground leading-relaxed" variants={itemVariants}>
                I'm passionate about writing clean, maintainable code and building systems that scale. Whether it's
                developing a payment gateway, designing microservices architecture, or optimizing cloud infrastructure,
                I bring both technical expertise and a problem-solving mindset to every project.
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300"
                >
                  <motion.div initial={{ rotate: 0 }} whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                    <item.icon className="w-10 h-10 text-primary mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
