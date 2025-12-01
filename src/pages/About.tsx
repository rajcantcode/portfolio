import { useAnimation, useInView, motion } from "motion/react";
import { useEffect, useRef } from "react";
import AboutAvatarSVG from "../components/AboutAvatarSVG";
import Skill from "../components/Skill";
import { skills } from "../constants";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    mainControls.start("visible");
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="mx-auto w-full mb-16 mt-16 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between"
    >
      <div className="info md:w-1/2">
        <h1 className="text-2xl md:text-4xl font-bold">About Me</h1>
        <p className="my-6 text-sm md:text-base">
          Hi Everyone, I am Raj Mahadeshwar from Mumbai, India. I have done my
          B.Sc in IT from Mumbai University.
        </p>
        <h1 className="text-2xl md:text-4xl font-bold mb-3">
          My Technical Skills
        </h1>
        <div className="skills">
          {skills.map((skill, idx) => (
            <Skill key={idx} title={skill.title} skills={skill.skills} />
          ))}
        </div>
      </div>
      <AboutAvatarSVG className="md:w-1/2" />
    </motion.div>
  );
};

export default About;
