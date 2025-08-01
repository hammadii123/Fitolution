"use client"

import { motion } from "framer-motion"
import { Check, Target, Heart, Users, Award } from "lucide-react"
import Button from "../components/ui/Button"
import motivationImg from "../assets/images/motivation.jpg"
import heroAbout from "../assets/images/hero-about.jpg"
import sarahJohnson from "../assets/images/sarah-johnson.jpg"

const AboutUs = () => {
  const stats = [
    { number: '10K+', label: 'Active Members' },
    { number: '50+', label: 'Expert Trainers' },
    { number: '5+', label: 'Years Experience' },
    { number: '100+', label: 'Programs Available' }
  ]

  const values = [
    {
      icon: <Target className="w-8 h-8 text-lime-400" />, title: 'Results-Driven',
      description: 'We focus on delivering measurable results through personalized training programs and continuous progress tracking.'
    },
    {
      icon: <Heart className="w-8 h-8 text-lime-400" />, title: 'Health First',
      description: 'Your well-being is our priority. We promote sustainable fitness practices that enhance your overall quality of life.'
    },
    {
      icon: <Users className="w-8 h-8 text-lime-400" />, title: 'Community',
      description: 'Building a supportive fitness community where members motivate each other to reach their personal best.'
    },
    {
      icon: <Award className="w-8 h-8 text-lime-400" />, title: 'Excellence',
      description: 'We maintain the highest standards in equipment, training, and customer service to exceed your expectations.'
    }
  ]

  const team = [
    {
      name: 'Sarah Johnson', role: 'Head Trainer & Nutritionist', experience: '8+ years',
      specialty: 'Strength Training, Nutrition Planning', image: sarahJohnson
    },
    {
      name: 'Mike Rodriguez', role: 'Fitness Director', experience: '12+ years',
      specialty: 'CrossFit, Athletic Performance',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Emma Chen', role: 'Yoga & Wellness Coach', experience: '6+ years',
      specialty: 'Yoga, Mindfulness, Recovery',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'David Thompson', role: 'Personal Training Lead', experience: '10+ years',
      specialty: 'Weight Loss, Muscle Building',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
    }
  ]

  const philosophyPoints = [
    "Fitness is a lifestyle, not a destination",
    "Every body is different, every journey is unique",
    "Consistency beats perfection every time",
    "Mental strength builds physical strength",
    "Community support amplifies individual success",
    "Health is the ultimate wealth"
  ]

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <main className="w-full max-w-screen-xl mx-auto px-4">

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-20">
          <div className="absolute inset-0">
            <motion.div animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/4 w-16 h-16 bg-lime-400 rounded-full opacity-20" />
            <motion.div animate={{ y: [0, 30, 0], rotate: [360, 180, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/3 right-1/4 w-12 h-12 bg-lime-400 rounded-full opacity-30" />
            <motion.div animate={{ y: [0, -15, 0], x: [0, 10, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-lime-400 rounded-full opacity-25" />
          </div>

          <div className="w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-left">
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight">
                About <span className="text-lime-400">Fitolution</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
                Transforming lives through fitness since 2019. We're more than just a gym – 
                we're your partners in achieving a healthier, stronger, and more confident you.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-lime-400 hover:bg-lime-500 text-lime-500 font-semibold px-8 py-4 text-lg">
                  Our Story
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg bg-transparent">
                  Meet Our Team
                </Button>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex justify-center">
              <img src={heroAbout} alt="About Fitolution" className="w-full max-w-md h-auto object-cover rounded-lg" />
            </motion.div>
          </div>
        </section>

        {/* Other Sections (Stats, Who We Are, Philosophy, Core Values, Team, CTA) */}
        {/* Just update all `container mx-auto px-6` to `w-full max-w-screen-xl mx-auto px-4` in your existing code */}

      </main>
    </div>
  )
}

export default AboutUs
