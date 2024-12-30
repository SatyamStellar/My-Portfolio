import { Tilt } from "react-tilt";
import { motion } from "framer-motion";



import { styles } from "../styles";
import { github, play } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constant";
import { fadeIn, textVariant } from "../utils/motion";


const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
            </div>
            <div onClick={() => window.open(live_link, "_blank")}
              className="bg-white-100 ml-2 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={play} alt="github" className="w-1/2 h-1/2 object-contain " />
            </div>

          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="text-secondary text-[14px] mt-2">{description}</p>
        </div>
        <div className="flex flex-wrap mt-4 gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[16px] ${tag.color}`}>#{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}


const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Some of my work
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects.
        </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1, 1)}
          className="max-w-3xl mt-3 text-secondary text-[17px] leading-[30px]">
          These projects highlight my expertise and practical experience by presenting real-world examples of my work. Each project is concisely described and includes links to the source code and live demos. They demonstrate my proficiency in tackling complex challenges, working with diverse technologies, and efficiently managing projects from start to finish
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "work")
