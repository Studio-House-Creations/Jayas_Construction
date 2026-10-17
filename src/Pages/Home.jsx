import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Services from "../components/Home/Services";
import Projects from "../components/Home/Projects";
import Testimonials from "../components/Home/Testimonials";
import useLenis from "../hooks/useLenis";

function App() {
  useLenis();
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Services />
       <Testimonials />
    </>
  );
}

export default App;