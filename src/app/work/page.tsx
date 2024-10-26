'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Modern Lakeside Retreat",
    description: "A stunning contemporary home nestled on the shores of Lake Como. This project seamlessly blends indoor and outdoor living spaces, maximizing the breathtaking views while providing ultimate comfort and luxury.",
    image: "/placeholder.svg?height=600&width=800",
    client: "Private Residence",
    date: "2023",
    category: "Residential",
  },
  {
    id: 2,
    title: "Urban Micro-Living Complex",
    description: "An innovative apartment complex in the heart of Tokyo, designed to maximize space efficiency without compromising on style or comfort. Each unit features smart home technology and transformable furniture.",
    image: "/placeholder.svg?height=600&width=800",
    client: "Tokyo Metropolitan Government",
    date: "2022",
    category: "Multi-Residential",
  },
  {
    id: 3,
    title: "Sustainable Office Tower",
    description: "A state-of-the-art office building in Singapore that sets new standards in sustainable architecture. Featuring vertical gardens, solar panels, and a rainwater harvesting system, this project achieved LEED Platinum certification.",
    image: "/placeholder.svg?height=600&width=800",
    client: "EcoTech Innovations",
    date: "2024",
    category: "Commercial",
  },
]

export default function ProjectDescriptions() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">Our Projects</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Explore our portfolio of innovative architectural designs, each project a testament to our commitment to excellence and sustainable living.
        </p>
      </motion.div>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: project.id * 0.1 }}
          >
            <Card 
              className="overflow-hidden transition-shadow duration-300 hover:shadow-lg"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <CardHeader className="p-0">
                <AspectRatio ratio={4 / 3}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                    fill
                  />
                </AspectRatio>
              </CardHeader>
              <CardContent className="p-6 pt-8">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">Featured Project</h3>
                <h2 className="mb-2 text-3xl font-bold">{project.title}</h2>
                <p className="mb-4 text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Client: {project.client}</Badge>
                  <Badge variant="secondary">Date: {project.date}</Badge>
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full">View Project</Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
