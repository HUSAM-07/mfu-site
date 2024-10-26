'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const project = {
  title: "Modern Lakeside Retreat",
  description: "Nestled on the picturesque shores of Lake Como, this stunning contemporary home is a masterpiece of modern architecture and interior design. The project seamlessly blends indoor and outdoor living spaces, maximizing the breathtaking views while providing ultimate comfort and luxury to its residents.",
  client: "Private Residence",
  date: "2023",
  location: "Lake Como, Italy",
  category: "Residential",
  mainImage: "/placeholder.svg?height=600&width=1200",
  gallery: [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ],
  features: [
    "Floor-to-ceiling windows with panoramic lake views",
    "Infinity pool overlooking the water",
    "Custom-designed furniture and fixtures",
    "Smart home technology integration",
    "Sustainable materials and energy-efficient systems",
  ],
  testimonial: {
    quote: "The attention to detail and innovative design solutions have transformed our vision into a breathtaking reality. It's not just a house; it's a work of art.",
    author: "John Doe, Homeowner",
  },
  relatedProjects: [
    { id: 1, title: "Urban Penthouse", image: "/placeholder.svg?height=300&width=400" },
    { id: 2, title: "Coastal Villa", image: "/placeholder.svg?height=300&width=400" },
    { id: 3, title: "Mountain Chalet", image: "/placeholder.svg?height=300&width=400" },
  ],
}

export default function ProjectDetail() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.gallery.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.gallery.length) % project.gallery.length)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">{project.title}</h1>
        <div className="mb-8 flex flex-wrap gap-2">
          <Badge variant="secondary">{project.category}</Badge>
          <Badge variant="secondary">{project.date}</Badge>
          <Badge variant="secondary">{project.location}</Badge>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg">
          <Image
            src={project.mainImage}
            alt={project.title}
            fill
            className="object-cover"
          />
        </AspectRatio>
      </motion.div>

      <div className="mt-12 grid gap-12 md:grid-cols-3">
        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="mb-4 text-2xl font-semibold">Project Overview</h2>
          <p className="text-lg text-muted-foreground">{project.description}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="mb-4 text-2xl font-semibold">Project Details</h2>
          <dl className="space-y-2">
            <div>
              <dt className="font-semibold">Client</dt>
              <dd>{project.client}</dd>
            </div>
            <div>
              <dt className="font-semibold">Date</dt>
              <dd>{project.date}</dd>
            </div>
            <div>
              <dt className="font-semibold">Location</dt>
              <dd>{project.location}</dd>
            </div>
            <div>
              <dt className="font-semibold">Category</dt>
              <dd>{project.category}</dd>
            </div>
          </dl>
        </motion.div>
      </div>

      <Separator className="my-12" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h2 className="mb-6 text-2xl font-semibold">Project Gallery</h2>
        <div className="relative">
          <AspectRatio ratio={3 / 2} className="overflow-hidden rounded-lg">
            <Image
              src={project.gallery[currentImage]}
              alt={`Project image ${currentImage + 1}`}
              fill
              className="object-cover"
            />
          </AspectRatio>
          <Button
            variant="secondary"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full"
            onClick={prevImage}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full"
            onClick={nextImage}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>

      <Separator className="my-12" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <h2 className="mb-6 text-2xl font-semibold">Key Features</h2>
        <ul className="grid gap-4 md:grid-cols-2">
          {project.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Badge variant="secondary" className="mr-2">
                {index + 1}
              </Badge>
              {feature}
            </li>
          ))}
        </ul>
      </motion.div>

      <Separator className="my-12" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <Card>
          <CardContent className="p-6">
            <blockquote className="mb-4 text-lg italic text-muted-foreground">
              &ldquo;{project.testimonial.quote}&rdquo;
            </blockquote>
            <p className="font-semibold">{project.testimonial.author}</p>
          </CardContent>
        </Card>
      </motion.div>

      <Separator className="my-12" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
      >
        <h2 className="mb-6 text-2xl font-semibold">Related Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {project.relatedProjects.map((relatedProject) => (
            <Card key={relatedProject.id}>
              <AspectRatio ratio={4 / 3}>
                <Image
                  src={relatedProject.image}
                  alt={relatedProject.title}
                  fill
                  className="rounded-t-lg object-cover"
                />
              </AspectRatio>
              <CardContent className="p-4">
                <h3 className="font-semibold">{relatedProject.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      <Separator className="my-12" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.6 }}
        className="text-center"
      >
        <h2 className="mb-4 text-2xl font-semibold">Interested in a Similar Project?</h2>
        <p className="mb-6 text-muted-foreground">
          Let&apos;s discuss how we can bring your vision to life. Our team is ready to create something extraordinary for you.
        </p>
        <Button size="lg">Contact Us</Button>
      </motion.div>
    </div>
  )
}
