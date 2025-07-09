"use client"
import { motion } from "framer-motion"

const trainers = [
  {
    name: "Brian Hunter",
    specialty: "Strength Coach",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face",
    experience: "8+ Years",
  },
  {
    name: "Liam Gonzalez",
    specialty: "Nutrition Expert",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face",
    experience: "6+ Years",
  },
  {
    name: "Logan Torres",
    specialty: "Fitness Coach",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop&crop=face",
    experience: "10+ Years",
  },
]

const Expertise = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Your Fitness <span className="text-lime-400">Goals</span>, <br />
            Their <span className="text-lime-400">Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Meet our team of certified professionals dedicated to your success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={trainer.image || "/placeholder.svg"}
                  alt={trainer.name}
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="bg-lime-400 text-black px-3 py-1 rounded-full text-sm font-semibold mb-2">
                    {trainer.experience}
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{trainer.name}</h3>
              <p className="text-lime-400 font-semibold">{trainer.specialty}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Expertise
