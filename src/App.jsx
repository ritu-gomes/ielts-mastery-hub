import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Testimonials from './components/Testimonial/Testimonials';
import './index.css';

function App() {

  return (
    <>
      <div className="min-h-screen bg-base-200">
        <Navbar/>
        <Hero></Hero>
        <Features></Features>
        <Testimonials></Testimonials>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
