import About from "../components/About";
import Contact from "../components/Contact";
import Facts from "../components/Facts";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Resume from "../components/Resume";
import Services from "../components/Services";
import Skills from "../components/Skills";
// import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <main id="main">
        <About />
        <Facts />
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
        {/* <Testimonials /> */}
        <Contact />
      </main>
    </>
  );
};

export default Home;
