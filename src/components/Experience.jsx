"use client"
import { motion } from "framer-motion"
import Button from "./ui/Button"

const Experience = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Experience <br />
            Fitness Like <span className="text-lime-400">Never Before</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-4">Nutritional Excellence</h3>
              <p className="text-muted-foreground mb-6">
                Personalized nutrition plans designed by certified nutritionists to fuel your fitness journey and
                optimize your results.
              </p>
              <Button className="bg-lime-400 hover:bg-lime-500 text-foreground font-semibold">Explore Plans</Button>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-4">Smart Range</h3>
              <p className="text-muted-foreground mb-6">
                Advanced fitness tracking technology that monitors your progress and adapts your workouts for maximum
                efficiency.
              </p>
              <Button className="bg-lime-400 hover:bg-lime-500 text-foreground font-semibold">Learn More</Button>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop"
                alt="Fitness Model 1"
                className="w-full h-64 object-cover rounded-xl"
              />
              <div className="bg-lime-400 p-6 rounded-xl">
                <h4 className="text-foreground font-bold text-lg mb-2">Premium Equipment</h4>
                <p className="text-foreground/80 text-sm">State-of-the-art fitness technology</p>
              </div>
            </div>
            <div className="space-y-6 mt-8">
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <h4 className="text-white font-bold text-lg mb-2">Smart Tracking</h4>
                <p className="text-muted-foreground text-sm">Advanced progress monitoring</p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=300&h=400&fit=crop"
                alt="Fitness Model 2"
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience
