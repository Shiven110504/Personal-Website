import { useCallback, useEffect } from "react";
import Navbar from "../components/Sections/Navbar";
import Experience from "../components/Sections/Experience";
import Skills from "../components/Sections/Skills";
import ContactForm from "../components/Sections/ContactForm";
import Hero from "../components/Sections/Hero";
import Projects from "../components/Sections/Projects";
import Footer from "../components/Sections/Footer";

const Main = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className="relative bg-primary-white w-full overflow-hidden flex flex-col items-center justify-start tracking-[normal]">
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Main;
