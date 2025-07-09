"use client"
import { motion } from "framer-motion"
import Button from "./ui/Button"
import Input from "./ui/Input"

const CTASection = () => {
  return (
    <section className="py-20 bg-lime-400">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-black mb-6">
            Connect Engage <br />
            <span className="text-gray-800">Transform</span>
          </h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Join our community and start your transformation journey today
          </p>

          <div className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white border-0 text-black placeholder:text-gray-500 flex-1"
            />
            <Button className="bg-black hover:bg-gray-800 text-white px-8">Join Now</Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
