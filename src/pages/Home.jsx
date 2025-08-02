import Hero from "../components/Hero"
import BrandLogos from "../components/BrandLogos"
import Inspiration from "../components/Inspiration"
import Services from "../components/Services"
import Training from "../components/Training"
import Experience from "../components/Experience"
import Expertise from "../components/Expertise"
import SuccessStories from "../components/SuccessStories"
import CTASection from "../components/CTASection"

const Home = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Hero />
      <BrandLogos />
      <Inspiration />
      <Services />
      <Training />
      <Experience />
      <Expertise />
      <SuccessStories />
      <CTASection />
    </div>
  )
}

export default Home
