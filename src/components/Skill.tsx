const Skill = ({ title, skills }: { title: string; skills: string }) => {
  return (
    <div className="flex items-baseline">
      <p className="text-lg md:text-xl min-w-1/2">{title}</p>
      <p className="text-lg md:text-xl font-bold"> : &nbsp;</p>
      <p className="text-sm md:text-base">{skills}</p>
    </div>
  );
};

export default Skill;
