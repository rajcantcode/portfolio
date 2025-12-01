import { useAnimation, useInView, motion } from "motion/react";
import { useEffect, useRef } from "react";
import { projects } from "../constants";
import ProjectCard from "../components/ProjectCard";

const Projects = ({ showHeader }: { showHeader: boolean }) => {
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
      className="mx-auto w-full mb-16"
    >
      {showHeader ? (
        <h1 className="text-2xl md:text-4xl font-bold text-center my-10">
          My Recent Projects
        </h1>
      ) : null}
      <div className="flex flex-col items-center gap-4">
        {/* {recentBlogs.map((blog, key) => (
          <RecentBlogCard
            key={key}
            title={blog.title}
            thumbnail={blog.thumbnail}
            link={blog.link}
          />
        ))} */}
        {projects.map((project, key) => (
          <ProjectCard key={key} {...project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
