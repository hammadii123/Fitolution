"use client"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

const stories = [
  {
    name: "Sarah Johnson",
    transformation: "Lost 30lbs in 3 months",
    image: "/images/sarah-johnson.jpg",
    quote: "The transformation has been incredible. I feel stronger and more confident than ever before.",
    rating: 5,
  },
  {
    name: "Mike Chen",
    transformation: "Gained 15lbs muscle",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face",
    quote: "The personalized training program helped me achieve results I never thought possible.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    transformation: "Improved overall fitness",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop&crop=face",
    quote: "Amazing community and expert guidance. This gym changed my life completely.",
    rating: 5,
  },
]

const SuccessStories = () => {
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
            Your <span className="text-lime-400">Success</span> Stories, <br />
            Our <span className="text-lime-400">Inspiration</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real transformations from real people who trusted us with their fitness journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-lime-400 transition-all duration-300"
            >
              <img src={story.image || "/placeholder.svg"} alt={story.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-lime-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{story.quote}"</p>
                <h3 className="text-xl font-bold text-white mb-1">{story.name}</h3>
                <p className="text-lime-400 font-semibold">{story.transformation}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SuccessStories
