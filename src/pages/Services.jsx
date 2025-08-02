"use client";
import { motion } from "framer-motion";
import { Dumbbell, Users, Clock, Target, Zap, Heart } from "lucide-react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

const services = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    description: "Build muscle and increase strength with our state-of-the-art equipment and expert guidance.",
    features: ["Free weights", "Resistance machines", "Powerlifting area", "Functional training"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=300&fit=crop",
  },
  {
    icon: Heart,
    title: "Cardio Workouts",
    description: "Improve cardiovascular health with our variety of cardio equipment and classes.",
    features: ["Treadmills", "Ellipticals", "Rowing machines", "HIIT classes"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
  },
  {
    icon: Users,
    title: "Group Classes",
    description: "Join our energetic group fitness classes led by certified instructors.",
    features: ["Yoga", "Pilates", "Zumba", "CrossFit"],
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=300&fit=crop",
  },
  {
    icon: Target,
    title: "Personal Training",
    description: "Get personalized workout plans and one-on-one coaching from our expert trainers.",
    features: ["Custom programs", "Nutrition guidance", "Progress tracking", "Flexible scheduling"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
  },
  {
    icon: Zap,
    title: "HIIT Training",
    description: "High-intensity interval training for maximum results in minimum time.",
    features: ["Fat burning", "Metabolic boost", "Time efficient", "Varied workouts"],
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=500&h=300&fit=crop",
  },
  {
    icon: Clock,
    title: "24/7 Access",
    description: "Train on your schedule with round-the-clock gym access for premium members.",
    features: ["Keycard access", "Security cameras", "Emergency support", "Flexible hours"],
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500&h=300&fit=crop",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Services = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-x-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-lime-400/20 to-green-400/20" />
        <div className="max-w-screen-xl w-full mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 break-words">
              Our <span className="text-lime-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover our comprehensive range of fitness services designed to help you achieve your goals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 overflow-x-hidden">
        <div className="max-w-screen-xl w-full mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-gray-900 border-gray-700 hover:border-lime-400 transition-all duration-300 group overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <service.icon className="w-8 h-8 text-lime-400" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-white text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-300 flex items-center">
                          <div className="w-2 h-2 bg-lime-400 rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-lime-400 hover:bg-lime-500 text-black">Learn More</Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-lime-400 to-green-400 overflow-x-hidden">
        <div className="max-w-screen-xl w-full mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-black mb-6">Ready to Start Your Fitness Journey?</h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Join thousands of members who have transformed their lives with our expert guidance and world-class
              facilities.
            </p>
            <Button size="lg" className="bg-black text-lime-400 hover:bg-gray-800 px-8 py-3 text-lg">
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
