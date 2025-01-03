import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';


import { styles } from "../styles";
import { services } from "../constant";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("left", "spring", 0.5 * index, 1)}
        className="w-full border-sec group border-[1.5px] p-[1px] rounded-[20px] shadow-card  transition-all ease-in-out duration-100">
        <div options={
          {
            max: 45,
            scale: 1,
            speed: 450
          }
        }
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center">
          <img src={icon} alt={title} className="w-16 h-16 object-contain group-hover:scale-90" />
          <h3 className="text-white group-hover:text-sec text-[20px] text-center font-bold transition-all ease-in-out duration-100">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview.
        </h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white font-moonrising text-[14px] max-w-3xl tracking-wide leading-[30px]">
        - A dynamic tech enthusiast passionate about IT, quick to learn, adept at problem-solving, and fueled by curiosity. With a love for tackling challenges head-on, I'm always eager to explore and innovate.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 ">
        {services.map((serivce, index) => (
          <ServiceCard key={serivce.title}
            index={index} {...serivce} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
