"use client"
import { motion } from "framer-motion"
import { Check, Target, Heart, Users, Award, Star } from "lucide-react"
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
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-lime-400" />,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable results through personalized training programs and continuous progress tracking.'
    },
    {
      icon: <Heart className="w-8 h-8 text-lime-400" />,
      title: 'Health First',
      description: 'Your well-being is our priority. We promote sustainable fitness practices that enhance your overall quality of life.'
    },
    {
      icon: <Users className="w-8 h-8 text-lime-400" />,
      title: 'Community',
      description: 'Building a supportive fitness community where members motivate each other to reach their personal best.'
    },
    {
      icon: <Award className="w-8 h-8 text-lime-400" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in equipment, training, and customer service to exceed your expectations.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Head Trainer & Nutritionist',
      experience: '8+ years',
      specialty: 'Strength Training, Nutrition Planning',
      image: sarahJohnson
    },
    {
      name: 'Mike Rodriguez',
      role: 'Fitness Director',
      experience: '12+ years',
      specialty: 'CrossFit, Athletic Performance',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Emma Chen',
      role: 'Yoga & Wellness Coach',
      experience: '6+ years',
      specialty: 'Yoga, Mindfulness, Recovery',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'David Thompson',
      role: 'Personal Training Lead',
      experience: '10+ years',
      specialty: 'Weight Loss, Muscle Building',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
    }
  ];

  const philosophyPoints = [
    "Fitness is a lifestyle, not a destination",
    "Every body is different, every journey is unique",
    "Consistency beats perfection every time",
    "Mental strength builds physical strength",
    "Community support amplifies individual success",
    "Health is the ultimate wealth"
  ];

  return (
    <div className="bg-black text-white">

  {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
        {/* Background Floating Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-16 h-16 bg-lime-400 rounded-full opacity-20"
          />
          <motion.div
            animate={{
              y: [0, 30, 0],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute top-1/3 right-1/4 w-12 h-12 bg-lime-400 rounded-full opacity-30"
          />
          <motion.div
            animate={{
              y: [0, -15, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-lime-400 rounded-full opacity-25"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight"
              >
                About <span className="text-lime-400">Fitolution</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed"
              >
                Transforming lives through fitness since 2019. We're more than just a gym – 
                we're your partners in achieving a healthier, stronger, and more confident you.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                size="lg"
                className="bg-lime-400 hover:bg-lime-500 text-lime-500 font-semibold px-8 py-4 text-lg"
                > Our Story </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg bg-transparent"
                >
                  Meet Our Team
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Content - Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex justify-center"
            >
              <div className="relative">
                <img
                  src={heroAbout}
                  alt="Man doing weight lifting"
                  className="w-full max-w-md h-auto object-cover rounded-lg"
                />
               </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl lg:text-6xl font-bold text-lime-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are & Our Story Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Who We <span className="text-lime-400">Are</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Fitolution was born from a simple belief: everyone deserves access to quality fitness 
                guidance and a supportive community. Founded in 2019 by a team of passionate fitness 
                professionals, we started with a vision to revolutionize how people approach their 
                health and wellness journey.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                What began as a small local gym has evolved into a comprehensive fitness platform 
                that combines cutting-edge technology with personalized training approaches.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Today, Fitolution continues to innovate, offering both in-person and digital 
                solutions to make fitness accessible, enjoyable, and sustainable for everyone.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={motivationImg}
                alt="Fitolution Team"
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Philosophy Section */}
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
              Our <span className="text-lime-400">Mission</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              To empower individuals to transform their lives through fitness, providing expert 
              guidance, state-of-the-art facilities, and a supportive community that makes 
              achieving health goals both achievable and enjoyable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {philosophyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 p-4 bg-gray-900/50 rounded-lg"
              >
                <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-black" />
                </div>
                <span className="text-gray-300">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
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
              Our Core <span className="text-lime-400">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              These principles guide everything we do and shape the experience we create for our members.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-colors duration-300 border-2 border-lime-400/30 hover:border-lime-400/60"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our <span className="text-lime-400">Expert Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our certified trainers and wellness experts are here to guide you every step of the way.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-colors duration-300 border-2 border-lime-400/30 hover:border-lime-400/60"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
        
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-lime-400 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-400 mb-3">{member.experience} Experience</p>
                <p className="text-sm text-gray-300">{member.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Matching your existing style */}
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
              Ready to Start <br />
              <span className="text-gray-800">Your Journey?</span>
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Join thousands of members who have transformed their lives with Fitolution. 
              Your healthiest, strongest self is waiting.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg">
                Start Your Journey
              </Button>
             <Button
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg bg-white"
              >
                View Programs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs