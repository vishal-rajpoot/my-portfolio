"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Server, Database, Cloud, Smartphone, MessageSquare } from "lucide-react"

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      skills: ["React", "Next.js", "Tailwind CSS", "Material UI", "TypeScript", "JavaScript"],
      color: "text-blue-500",
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "Microservices", "API Development"],
      color: "text-green-500",
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MySQL", "Redis", "Database Design", "Query Optimization"],
      color: "text-purple-500",
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "EC2", "S3", "CI/CD", "Nginx", "PM2", "Docker"],
      color: "text-orange-500",
    },
    {
      title: "Mobile",
      icon: Smartphone,
      skills: ["React Native", "iOS", "Android", "Mobile UI/UX", "Cross-platform"],
      color: "text-pink-500",
    },
    {
      title: "Messaging & Realtime",
      icon: MessageSquare,
      skills: ["RabbitMQ", "WebSockets", "Redis", "Event-driven", "Real-time Apps"],
      color: "text-yellow-500",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Technical <span className="text-primary">Skills</span>
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
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.6 }}>
                    <category.icon className={`w-8 h-8 ${category.color}`} />
                  </motion.div>
                  <h3 className="text-2xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: 0.5 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
