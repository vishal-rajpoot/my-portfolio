"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "Real-time Payment Gateway Dashboard",
      description:
        "Built a comprehensive payment gateway with real-time transaction monitoring, merchant management panel, and admin dashboard. Features live updates using WebSockets and Redis for caching.",
      technologies: ["React", "Node.js", "WebSockets", "Redis", "PostgreSQL", "Express.js"],
      image: "/modern-payment-gateway-dashboard-with-real-time-an.jpg",
      github: "https://github.com/",
      demo: "#",
    },
    {
      title: "Scalable Microservices Architecture",
      description:
        "Designed and implemented event-driven microservices architecture for distributed systems. Utilized message queues for async processing and Docker for containerization.",
      technologies: ["Node.js", "RabbitMQ", "Docker", "PostgreSQL", "Microservices", "AWS"],
      image: "/microservices-architecture-diagram-with-docker-con.jpg",
      github: "https://github.com/",
      demo: "#",
    },
    {
      title: "Mobile Wallet Application",
      description:
        "Cross-platform mobile wallet app built with React Native. Features include secure transactions, QR code scanning, transaction history, and push notifications.",
      technologies: ["React Native", "Node.js", "Express.js", "MongoDB", "Firebase", "Redux"],
      image: "/modern-mobile-wallet-app-interface-with-transactio.jpg",
      github: "https://github.com/",
      demo: "#",
    },
    {
      title: "Full-Stack E-commerce Platform",
      description:
        "Complete e-commerce solution with product management, shopping cart, secure checkout, order tracking, and admin dashboard. Integrated with Stripe for payments.",
      technologies: ["Next.js", "Express.js", "MySQL", "Stripe", "AWS S3", "Tailwind CSS"],
      image: "/modern-ecommerce-platform-with-product-grid-and-sh.jpg",
      github: "https://github.com/",
      demo: "#",
    },
    {
      title: "Cloud Deployment & CI/CD Automation",
      description:
        "Automated deployment pipeline for multiple microservices on AWS. Configured Nginx load balancing, PM2 process management, and implemented blue-green deployment strategy.",
      technologies: ["AWS", "Nginx", "PM2", "EC2", "S3", "GitHub Actions", "Docker"],
      image: "/ci-cd-pipeline-visualization-with-aws-infrastructu.jpg",
      github: "https://github.com/",
      demo: "#",
    },
    {
      title: "OCR-based UTR Extraction Tool",
      description:
        "Intelligent tool for extracting UTR numbers from payment screenshots using OCR technology. Processes images, validates data using regex, and stores results in database.",
      technologies: ["Node.js", "Tesseract OCR", "Express.js", "PostgreSQL", "Sharp", "Regex"],
      image: "/ocr-text-extraction-interface-with-document-scanni.jpg",
      github: "https://github.com/",
      demo: "#",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  }

  const projectVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section id="projects" className="py-20 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <motion.div
            className="w-24 h-1 golden-gradient mx-auto mb-12"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={projectVariants}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }} className="w-full h-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => window.open(project.github, "_blank")}
                      className="p-2 rounded-lg bg-background/90 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => window.open(project.demo, "_blank")}
                      className="p-2 rounded-lg bg-primary text-black backdrop-blur-sm hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <motion.h3
                    className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow leading-relaxed">{project.description}</p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ delay: 0.5 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 md:hidden">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full bg-transparent"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                      <Button
                        size="sm"
                        className="w-full golden-gradient text-black"
                        onClick={() => window.open(project.demo, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
