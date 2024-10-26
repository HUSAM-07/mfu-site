'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const project = {
  title: "Tadawi Hospital Project",
  description: "State-of-the-art healthcare facility with integrated MEP solutions.",
  client: "Tadawi Healthcare",
  date: "2022",
  location: "Dubai, UAE",
  category: "Healthcare",
  mainImage: "/projects-assets/tadawi.png",
  features: [
    "Advanced HVAC systems for optimal air quality",
    "Energy-efficient lighting and power distribution",
    "Integrated medical gas systems",
    "Smart building management system",
    "Water conservation and treatment facilities",
  ],
}

export default function TadawiProject() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
        <div className="mb-6 flex flex-wrap gap-2">
          <Badge variant="secondary">{project.category}</Badge>
          <Badge variant="secondary">{project.date}</Badge>
          <Badge variant="secondary">{project.location}</Badge>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        <Image
          src={project.mainImage}
          alt={project.title}
          width={1200}
          height={675}
          className="rounded-lg object-cover w-full"
        />
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3">
        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-lg text-muted-foreground">{project.description}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
          <dl className="space-y-2">
            <div>
              <dt className="font-medium">Client:</dt>
              <dd>{project.client}</dd>
            </div>
            <div>
              <dt className="font-medium">Date:</dt>
              <dd>{project.date}</dd>
            </div>
            <div>
              <dt className="font-medium">Location:</dt>
              <dd>{project.location}</dd>
            </div>
            <div>
              <dt className="font-medium">Category:</dt>
              <dd>{project.category}</dd>
            </div>
          </dl>
        </motion.div>
      </div>

      <Separator className="my-8" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}
