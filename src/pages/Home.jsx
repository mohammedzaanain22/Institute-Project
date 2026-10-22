import Hero from '../components/Hero'
import Courses from '../components/Courses'
import WhyUs from '../components/WhyUs'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'







function Home() {
  

  return (
    <div className="bg-[#F7F5EF] min-h-screen"> 
      <Hero/>
      <Courses/>
      <WhyUs/>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Home
