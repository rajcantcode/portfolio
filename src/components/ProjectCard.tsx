import type { Project } from "../constants";

const ProjectCard = (props: Project) => {
  return (
    <div
      className="project-container w-[90%] md:w-[70%] lg:w-[55%] bg-[conic-gradient(at_bottom_right,var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 dark:hover:shadow-2xl dark:hover:shadow-[#10b9811a]/10 dark:bg-[#021129] dark:border-white/20 border-black/10 rounded-xl border p-4"
      style={{
        background:
          "conic-gradient(at bottom right, #0f172a, #581c87, #0f172a)",
      }}
    >
      <p className="text-xl font-bold text-neutral-600 dark:text-white">
        {props.title}
      </p>
      {props.description.map((desc, idx) => (
        <p
          key={idx}
          className={`text-neutral-500 text-sm dark:text-neutral-300 ${
            idx === 0 ? "mt-3" : ""
          } ${idx === props.description.length - 1 ? "mb-3" : ""}`}
        >
          &#x25CF;{desc}
        </p>
      ))}
      <img
        src={"/ProjectThumbnails/" + props.thumbnail}
        height="1000"
        width="1000"
        className="w-full object-cover rounded-xl"
        alt="thumbnail"
      />
      <p className="text-neutral-500 text-base dark:text-neutral-300 my-2">
        Tech used - {props.techStack.join(", ")}
      </p>
      <div
        className={`links flex items-center justify-between ${
          !props.liveLink ? "flex-row-reverse" : ""
        }`}
      >
        {props.liveLink && (
          <a
            href={props.liveLink}
            target="_blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Live Link →
          </a>
        )}
        <a
          href={props.repoLink}
          target="_blank"
          className="px-4 py-2 rounded-xl bg-[#021129] dark:bg-white dark:text-black text-white text-xs font-bold"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
