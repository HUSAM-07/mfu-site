'use client'

import { motion } from 'framer-motion'
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRightIcon, StarIcon } from "@radix-ui/react-icons"

const recognitions = [
  {
    title: "Design Excellence",
    description: "Recognized for outstanding architectural design across multiple projects",
    stat: "15 Awards",
    color: "bg-blue-500",
  },
  {
    title: "Sustainability Champion",
    description: "Leading the industry in eco-friendly and sustainable architecture",
    stat: "8 Green Certifications",
    color: "bg-green-500",
  },
  {
    title: "Innovation Leader",
    description: "Pioneering new techniques in construction and design",
    stat: "12 Patents",
    color: "bg-purple-500",
  },
  {
    title: "Client Satisfaction",
    description: "Consistently exceeding client expectations in project delivery",
    stat: "50+ Testimonials",
    color: "bg-yellow-500",
  },
]

export default function RecognitionPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Recognitions</h1>
        <p className="text-xl text-muted-foreground">
          Celebrating excellence in architecture and sustainable design
        </p>
      </motion.div>

      <BentoGrid className="mb-12">
        {recognitions.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <BentoCard
              name={item.title}
              description={item.description}
              className={`col-span-3 ${item.color}`}
              Icon={StarIcon}
              background={
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/0" />
              }
              href="#"
              cta="Learn more"
            />
          </motion.div>
        ))}
      </BentoGrid>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {recognitions.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <StarIcon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <Badge variant="secondary" className="text-sm">
                  {item.stat}
                </Badge>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center mt-12"
      >
        <h2 className="text-2xl font-semibold mb-4">Ready to start your next project?</h2>
        <Button size="lg">
          Contact Us
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>
    </div>
  )
}
