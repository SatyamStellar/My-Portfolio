import { motion } from "framer-motion"
import { useRef } from "react";
import { ScrollParallax } from "react-just-parallax";
import { BackgroundCircles } from "./decoration/Hero";


import { styles } from "../styles";
import { ComputersCanvas } from "./canvas"

const Hero = () => {
  const parallaxRef = useRef(null)
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden" ref={parallaxRef}>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-sec" />
          <div className="w-1 sm:h-80 h-40 black-gradient-back" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadSecText}`}>Hi I{"'"}m<span className={`${styles.heroHeadText}`}>Satyam</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-black`}>I'm a creative <br className="sm:block hidden" /> frontend developer</p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-8 bottom-4 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[32px] h-[64px] rounded-3xl border-2 border-secondary flex justify-center items-start py-1 px-2">
            <motion.div
              animate={{
                y: [0, 28, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-0"
            />
          </div>
        </a>
      </div>
      <BackgroundCircles />
    </section>
  )
}

export default Hero
