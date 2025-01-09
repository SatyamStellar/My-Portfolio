import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react";
import { ScrollParallax } from "react-just-parallax";
import { BackgroundCircles } from "./decoration/Hero";
import { TypeAnimation } from 'react-type-animation';

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas"

const Hero = () => {

  const [isXlMobile, setIsXlMobile] = useState(false);

  useEffect(() => {
    const handleMediaQuery = () => {

      setIsXlMobile(window.matchMedia("(max-width: 1028px)").matches);
    };

    handleMediaQuery();
    window.addEventListener("resize", handleMediaQuery);

    return () => {
      window.removeEventListener("resize", handleMediaQuery);
    };
  }, []);


  const parallaxRef = useRef(null)
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden" ref={parallaxRef}>

      <div className={`${styles.paddingX} absolute inset-0 xl:items-center items-start xl:top-0 top-[120px] max-w-7xl mx-auto flex flex-row  gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-sec" />
          <div className="w-1 sm:h-80 h-40 black-gradient-back" />
        </div>
        <div>
          <h1 className={`font-sfMono text-white  font-bold lg:text-[50px] sm:text-[30px] xs:text-[20px] text-[20px] mt-2 tracking-wide`}>Satyam Stellar</h1>
          <p className={`w-[40%] font-liberationMono text-white uppercase lg:text-[16px] sm:text-[12px] xs:text-[10px] text-[8px] ml-4 mt-2 `}>I'm adedicated frontend developer with a passion for creating visually appealing, modern, and highly responsive user interfaces that deliver seamless experiences. </p>
        </div>
      </div>
      <div className="relative size-full">

        <ScrollParallax isAbsolutelyPositioned >
          <div className={`absolute top-1/3 right-0 lg:top-[30rem] lg:right-[30rem] 2xl:top-[40rem] 2xl:right-[50rem] pr-5 backdrop-blur-sm bg-black bg-opacity-10 p-3 lg:rounded-2xl rounded-l-2xl lg:rounded-tr-none`}>
            <TypeAnimation className="font-monaco text-sm md:text-lg 2xl:text-2xl"
              sequence={[

                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'We produce food for Hamsters',
                1000,
                'You suck at programming',
                1000,
                'But you can improve yourself',
                1000
              ]}
              wrapper="span"
              speed={40}
              deletionSpeed={55}
              repeat={Infinity}
            />
          </div>
        </ScrollParallax>
        <div className="size-full lg:pl-[20rem] xl:pl-0">
          <ComputersCanvas />
        </div>
        <ScrollParallax isAbsolutelyPositioned>
          <div className={`absolute lg:hidden top-[80%] left-0  pr-5 backdrop-blur-sm bg-black bg-opacity-10 p-3 lg:rounded-2xl rounded-r-2xl`}>
            <TypeAnimation className="font-monaco text-sm md:text-lg 2xl:text-2xl"
              sequence={[

                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'We produce food for Hamsters',
                1000,
                'You suck at programming',
                1000,
                'But you can improve yourself',
                1000
              ]}
              wrapper="span"
              speed={40}
              deletionSpeed={55}
              repeat={Infinity}
            />
          </div>


        </ScrollParallax>


      </div>
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
    </section >
  )
}

export default Hero
