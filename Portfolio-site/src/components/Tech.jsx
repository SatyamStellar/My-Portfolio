import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

const technologies = [
  "./insta.glb",
  "./insta1.glb",
  "./insta2.glb",

];

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <div className="w-28 h-28" key={index}>
          <BallCanvas iconPath={technology} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");

