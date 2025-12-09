import { Link, useLocation } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { GrProjects } from "react-icons/gr";
import { IoDocumentOutline } from "react-icons/io5";

const Header = () => {
  const location = useLocation();
  return (
    <header className="w-full sticky top-1 flex items-center justify-center z-10">
      <div className="header-content flex items-center bg-[#0a0a0a] rounded-3xl gap-2 cursor-pointer p-1">
        <Link
          to="/"
          className={`nav-item home ${
            location.pathname === "/" ? "active" : ""
          }`}
        >
          <GoHome />
          <span>Home</span>
        </Link>
        <Link
          to="/about"
          className={`nav-item about ${
            location.pathname === "/about" ? "active" : ""
          }`}
        >
          <CgProfile />
          <span>About</span>
        </Link>
        <Link
          to="/projects"
          className={`nav-item projects ${
            location.pathname === "/projects" ? "active" : ""
          }`}
        >
          <GrProjects />
          <span>Projects</span>
        </Link>
        <a
          href="https://drive.google.com/file/d/1DN5Gf7aQfWxekYYgP16xrxPKjhmlmchM/view?usp=sharing"
          target="_blank"
          className={`nav-item resume ${
            location.pathname === "/resume" ? "active" : ""
          }`}
        >
          <IoDocumentOutline />
          <span>Resume</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
