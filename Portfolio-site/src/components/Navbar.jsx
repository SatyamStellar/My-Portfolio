import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useWindowScroll } from "react-use"
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";

import { navLinks, projects } from "../constant";
import { logo, menu, close } from "../assets";


const Navbar = ({ source_code_link }) => {

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false)


  const [lastScrollY, setLastScrollY] = useState(0)
  const [isNavVisible, setIsNavVisible] = useState(true)

  const navContainerRef = useRef(null);


  const { y: currentScrollY } = useWindowScroll();


  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true)
      navContainerRef.current.classList.remove('floating-nav')
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add('floating-nav')
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add('floating-nav')
    }

    setLastScrollY(currentScrollY)
  }, [currentScrollY, lastScrollY])


  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2
    })
  }, [isNavVisible])


  return (
    <nav ref={navContainerRef} className={`${styles.paddingX} flex w-full items-center py-3 transition-all duration-700  border-none fixed z-20 top-4 rounded-2xl`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto rounded-2xl">
        <Link
          to="/"
          className="flex  items-center gap-2"
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white font-newtype text-[20px] font-bold cursor-pointer flex">Satyam &nbsp; <span className="sm:block hidden font-newtype ">Stellar</span></p>
        </Link>
        <ul className="list-none items-center hidden sm:flex flex-row gap-16">

          {navLinks.map((links) => (
            <li
              key={links.id}
              className="font-moonrising hover:text-sec hover:-translate-y-1 transition-all ease-in-out duration-100 text-[14px]  cursor-pointer"
              onClick={() => setActive(links.title)}
            >
              <a className="font-moonrising" href={`#${links.id}`}>{links.title}</a>
            </li>
          ))

          }
          <li className="hover:-translate-y-1 ease-in-out duration-75"> <motion.div whileTap={{ scale: 0.85 }} onClick={() => window.open("https://github.com/satyamStellar", "_blank")}
            className="bg-transparent w-7 h-7 rounded-full flex justify-center items-center cursor-pointer  ">
            <img src={github} alt="github" className="size-full object-contain" />
          </motion.div></li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center" >
          <img src={toggle ? close : menu} alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => { setToggle(!toggle) }}
          />
          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 mx-4 right-0 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((links) => (
                <li
                  key={links.id}
                  className={`${active === links.title ? "text-white" : "text-secondary"} text-white cursor-pointer text-[14px]`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(links.title)
                  }}
                >
                  <a className="font-moonrising" href={`#${links.id}`}>{links.title}</a>
                </li>
              ))

              }
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
