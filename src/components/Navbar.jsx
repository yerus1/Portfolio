import logo from "../assets/yin.png";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://github.com/yerus1" target="_blank"><FaGithub/></a>
        <a href="https://linkedin.com/in/surendar-uthaminathan"target="_blank"><FaLinkedin/></a>
        <a href="https://leetcode.com/u/neo124/"target="_blank"><SiLeetcode/></a>
    </div>
  </nav>
}

export default Navbar
