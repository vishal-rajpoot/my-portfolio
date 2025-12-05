"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Calendar } from "lucide-react"

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      role: "Senior Full-Stack Engineer",
      company: "Tech Innovators Inc.",
      period: "2022 - Present",
      responsibilities: [
        "Led development of microservices architecture serving 100K+ daily active users",
        "Architected and deployed AWS infrastructure with 99.9% uptime",
        "Mentored junior developers and conducted code reviews",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
      ],
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker", "RabbitMQ"],
    },
    {
      role: "Full-Stack Developer",
      company: "Digital Solutions Co.",
      period: "2021 - 2022",
      responsibilities: [
        "Developed real-time payment processing system handling $1M+ transactions monthly",
        "Built React Native mobile app with 50K+ downloads",
        "Optimized database queries improving response time by 40%",
        "Collaborated with product team to define technical requirements",
      ],
      technologies: ["React", "React Native", "Express.js", "MySQL", "Redis", "WebSockets"],
    },
    {
      role: "Software Engineer",
      company: "StartupHub Technologies",
      period: "2020 - 2021",
      responsibilities: [
        "Developed full-stack web applications using React and Node.js",
        "Implemented RESTful APIs and integrated third-party services",
        "Participated in agile development process and sprint planning",
        "Wrote unit and integration tests achieving 85% code coverage",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Jest", "Git"],
    },
  ]

  const timelineVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Work <span className="text-primary">Experience</span>
          </h2>
          <motion.div
            className="w-24 h-1 golden-gradient mx-auto mb-12"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>

          <div className="relative">
            <motion.div
              className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 bg-border"
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            ></motion.div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`relative ${index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2"}`}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.2 }}
                >
                  <motion.div
                    className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-0"
                    variants={timelineVariants}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    <motion.div
                      className="w-4 h-4 rounded-full bg-primary border-4 border-background"
                      whileHover={{ scale: 1.5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    ></motion.div>
                  </motion.div>

                  <motion.div
                    className={`ml-8 md:ml-0 ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"} p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300`}
                    variants={cardVariants}
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                      <div>
                        <h3 className="text-2xl font-semibold text-primary">{exp.role}</h3>
                        <p className="text-lg font-medium flex items-center gap-2 mt-1">
                          <Briefcase className="w-4 h-4" />
                          {exp.company}
                        </p>
                      </div>
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <motion.li
                          key={idx}
                          className="text-muted-foreground flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: index * 0.2 + 0.5 + idx * 0.1 }}
                        >
                          <span className="text-primary mr-2">•</span>
                          {responsibility}
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIdx) => (
                        <motion.span
                          key={techIdx}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                          transition={{ delay: index * 0.2 + 0.7 + techIdx * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-2 py-1 rounded text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
