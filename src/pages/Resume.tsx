import { useAnimation, useInView, motion } from "motion/react";
import { useEffect, useRef } from "react";
const Resume = () => {
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
      className="mx-auto w-full mb-16 h-[1000px]"
    >
      <iframe
        src="/raj_Resume.pdf#toolbar=0&navpanes=0"
        width="100%"
        height="100%"
        style={{
          border: "none",
          margin: 0,
          padding: 0,
          overflow: "hidden",
        }}
      ></iframe>
    </motion.div>
  );
};

export default Resume;
