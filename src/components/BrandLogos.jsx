"use client"
import { motion } from "framer-motion"

const brands = [
  { name: "Under Armour", logo: "UA" },
  { name: "Nike", logo: "✓" },
  { name: "Adidas", logo: "⚡" },
  { name: "Puma", logo: "🐾" },
  { name: "Reebok", logo: "Δ" },
  { name: "New Balance", logo: "NB" },
]

const BrandLogos = () => {
  return (
    <section className="py-16 bg-black border-t border-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8 lg:gap-16"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-20 h-20 bg-gray-900 rounded-lg border border-gray-700 hover:border-lime-400 transition-all duration-300"
            >
              <span className="text-2xl font-bold text-gray-400 hover:text-lime-400 transition-colors duration-300">
                {brand.logo}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default BrandLogos
