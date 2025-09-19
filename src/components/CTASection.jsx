"use client"
import { motion } from "framer-motion"
import Button from "./ui/Button"
import Input from "./ui/Input"

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0f1f1b] via-[#143529] to-[#1a2e22] text-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Connect <span className="text-green-400">Engage </span>
            <span className="text-green-500">Transform</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our community and start your transformation journey today
          </p>

          <div className="max-w-lg mx-auto flex flex-col  sm:flex-row gap-4">

            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border border-white/50 text-white placeholder:text-gray-400 rounded-md px-4 py-3 flex-1 transition-all duration-300 focus:outline-none focus:ring-0 focus:placeholder:text-gray-500"
            />


            <Button className="bg-green-700 hover:bg-emerald-900 text-white px-6 py-3 rounded-md font-semibold transition duration-300">
              Join Now
            </Button>
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
