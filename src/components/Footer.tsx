import { motion } from "framer-motion";
import { EmailIcon, GithubIcon, LinkedInIcon, TwitterIcon } from "./Icons";
const Footer = () => {
  return (
    <div className="mt-auto flex flex-col items-center gap-0 pb-4 mb-0">
      <p className="text-center text-sm md:text-base">
        Designed and Developed by Raj Mahadeshwar
      </p>
      <div className="flex justify-center items-center flex-wrap gap-8 mt-4">
        <motion.a
          href="https://github.com/rajcantcode"
          target="_blank"
          whileHover={{ y: -6 }}
          whileTap={{ scale: 1 }}
        >
          <GithubIcon className="w-6" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/raj-mahadeshwar-7467b7316/"
          target="_blank"
          whileHover={{ y: -6 }}
          whileTap={{ scale: 1 }}
        >
          <LinkedInIcon className="w-6" />
        </motion.a>
        <motion.a
          href="https://x.com/rajdotenv"
          target="_blank"
          whileHover={{ y: -6 }}
          whileTap={{ scale: 1 }}
        >
          <TwitterIcon className="w-6" />
        </motion.a>
        <motion.a
          href="mailto:mahadeshwarraj@gmail.com"
          target="_blank"
          whileHover={{ y: -6 }}
          whileTap={{ scale: 1 }}
        >
          <EmailIcon className="w-8" />
        </motion.a>
      </div>
    </div>
  );
};

export default Footer;
