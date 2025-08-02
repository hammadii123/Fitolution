"use client"
import { motion } from "framer-motion"
import { Dumbbell, Users, Clock, Target } from "lucide-react"
import Button from "./ui/Button"
import { useState } from "react"
import Modal from "./ui/Modal"
const services = [
  {
    icon: Dumbbell,
    title: "Quality Training",
    description: "Professional equipment and expert guidance for optimal results",
  },
  {
    icon: Users,
    title: "Strength Build",
    description: "Build muscle and increase strength with our proven programs",
  },
  {
    icon: Clock,
    title: "Fat Loss",
    description: "Effective fat burning workouts designed for maximum efficiency",
  },
  {
    icon: Target,
    title: "24/7 Support",
    description: "Round-the-clock support and guidance from our expert team",
  },
]

const Services = () => {
  const [modal,setModal] = useState();
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
            Discover <br />
            What Sets Us <span className="text-lime-400">Apart</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the difference with our comprehensive approach to fitness and wellness
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-lime-400 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-lime-400 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
              {/* <Button className="bg-lime-400 hover:bg-lime-500 text-black font-semibold w-full">Learn More</Button> */}
              <div onClick={()=>setModal(service)}  className="border border-gray-900  hover:border-lime-400 w-fit p-2 ">

              <button className="text-white">Learn More</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

       {/* Modal Component */}
      <Modal
        open={!!modal}
        onClose={() => setModal(null)}
        title={modal?.title}
        icon={modal?.icon}
        content={modal?.description}
      />

    </section>
  )
}

export default Services
