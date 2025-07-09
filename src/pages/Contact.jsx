"use client"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react"
import Button from "../components/ui/Button"
import Input from "../components/ui/Input"
import Textarea from "../components/ui/Textarea"
import Card from "../components/ui/Card"

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["123 Fitness Street", "Downtown, NY 10001"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@fitolution.com", "support@fitolution.com"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon-Fri: 5:00 AM - 11:00 PM", "Sat-Sun: 6:00 AM - 10:00 PM"],
  },
]

const membershipPlans = [
  {
    name: "Basic",
    price: "$29",
    period: "/month",
    features: [
      "Gym access during staffed hours",
      "Basic equipment usage",
      "Locker room access",
      "Free fitness assessment",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "$49",
    period: "/month",
    features: [
      "24/7 gym access",
      "All equipment & facilities",
      "Group fitness classes",
      "Personal trainer consultation",
      "Nutrition guidance",
      "Guest passes (2/month)",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "$79",
    period: "/month",
    features: [
      "Everything in Premium",
      "Unlimited personal training",
      "Massage therapy sessions",
      "Priority class booking",
      "Meal planning service",
      "Unlimited guest passes",
    ],
    popular: false,
  },
]

const Contact = () => {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-lime-400/20 to-green-400/20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get in <span className="text-lime-400">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Ready to transform your life? Contact us today or choose your membership plan
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900 border-gray-700 text-center hover:border-lime-400 transition-colors duration-300">
                  <div className="p-6">
                    <div className="mx-auto w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center mb-4">
                      <info.icon className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-white font-bold mb-4">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-400 mb-1">
                        {detail}
                      </p>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900 border-gray-700">
                <div className="p-6">
                  <h2 className="text-white text-2xl font-bold mb-6">Send us a Message</h2>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        placeholder="First Name"
                        className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                      />
                      <Input
                        placeholder="Last Name"
                        className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                    />
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                    />
                    <Textarea
                      placeholder="Your Message"
                      rows={5}
                      className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                    />
                    <Button className="w-full bg-lime-400 hover:bg-lime-500 text-black">Send Message</Button>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-full min-h-[500px]"
            >
              <div className="w-full h-full bg-gray-900 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=500&fit=crop"
                  alt="Gym Location"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your <span className="text-lime-400">Membership</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Select the perfect plan that fits your fitness goals and lifestyle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`relative bg-gray-800 border-gray-700 ${
                    plan.popular ? "border-lime-400 scale-105" : ""
                  } hover:border-lime-400 transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-lime-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="p-6 text-center">
                    <h3 className="text-white text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-lime-400 mb-6">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-300 flex items-center">
                          <div className="w-2 h-2 bg-lime-400 rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-lime-400 hover:bg-lime-500 text-black"
                          : "bg-gray-700 hover:bg-gray-600 text-white"
                      }`}
                    >
                      Choose Plan
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            {[Instagram, Facebook, Twitter].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center hover:bg-lime-500 transition-colors duration-300"
              >
                <Icon className="w-6 h-6 text-black" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
