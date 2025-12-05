"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="py-12 px-4 border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Vishal Rajput</h3>
            <p className="text-muted-foreground">
              Senior Full-Stack Engineer passionate about building scalable web and mobile applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection("about")}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Experience
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
            <div className="flex gap-3">
              <Button
                size="icon"
                variant="outline"
                className="hover:border-primary hover:text-primary transition-colors bg-transparent"
                onClick={() => window.open("https://github.com/", "_blank")}
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="hover:border-primary hover:text-primary transition-colors bg-transparent"
                onClick={() => window.open("https://www.linkedin.com/in/", "_blank")}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="hover:border-primary hover:text-primary transition-colors bg-transparent"
                onClick={() => window.open("mailto:Vishal Rajput@example.com")}
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">© 2025 Vishal Rajput. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
