import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { AiOutlineCloudServer } from "react-icons/ai";
import { GrServices } from "react-icons/gr";
import { FaDocker } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { DiRedis } from "react-icons/di";
import { FaHtml5, FaCss3Alt,FaGitAlt } from "react-icons/fa";
import{animate, delay, motion} from "framer-motion"

const iconvarient=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration: duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    }
})

const Technology = () => {
  return (
    <motion.div 
    whileInView={{opacity:1,x:0}}
    initial={{opacity:0,x:-100}}
    transition={{duration:1.5}} className= "border-b border-neutral-800 pb-24">
      <motion.h2 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Technology</motion.h2>
       <div className="flex flex-wrap justify-center gap-4">
       <motion.div 
       variants={iconvarient(2)}
       initial="initial"
       animate="animate"
       className="rounded-2xl border-4 border-neutral-800 p-4">
       <FaHtml5 className="text-4xl text-[#E34F26]" /> {/* HTML5 */}
        </motion.div>
        <motion.div 
       variants={iconvarient(3.5)}
       initial="initial"
       animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
        <FaCss3Alt className="text-4xl text-[#1572B6]" /> {/* CSS3 */}
        </motion.div>
        <motion.div 
         variants={iconvarient(5)}
         initial="initial"
         animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoJavascript className="text-4xl text-[#F7DF1E]" /> {/* JavaScript */}
        </motion.div>
        <motion.div 
         variants={iconvarient(2)}
         initial="initial"
         animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaReact className="text-4xl text-[#61DBFB]" /> {/* React */}
        </motion.div>
        <motion.div 
         variants={iconvarient(3.5)}
         initial="initial"
         animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssFill className="text-4xl text-[#38BDF8]" /> {/* Tailwind CSS */}
        </motion.div>
        <motion.div 
         variants={iconvarient(5)}
         initial="initial"
         animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaJava className="text-4xl text-[#007396]" /> {/* Java */}
        </motion.div>
        <motion.div 
         variants={iconvarient(2)}
         initial="initial"
         animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiSpringboot className="text-4xl text-[#6DB33F]" /> {/* Spring Boot */}
        </motion.div>
        <motion.div 
         variants={iconvarient(5.0)}
         initial="initial"
         animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoPostgresql className="text-4xl text-[#336791]" /> {/* PostgreSQL */}
        </motion.div>
        <motion.div 
         variants={iconvarient(2.0)}
         initial="initial"
         animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaGitAlt className="text-4xl text-[#F05032]" /> {/* Git */}
        </motion.div>
        <motion.div 
         variants={iconvarient(3.5)}
         initial="initial"
         animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <AiOutlineCloudServer className="text-4xl text-[#6366F1]" /> {/* Backend Server */}
        </motion.div>
        <motion.div 
         variants={iconvarient(5.0)}
         initial="initial"
         animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <GrServices className="text-4xl text-[#10B981]" /> {/* Services */}
        </motion.div>
        <motion.div 
         variants={iconvarient(2.0)}
         initial="initial"
         animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaDocker className="text-4xl text-[#2496ED]" /> {/* Docker */}
        </motion.div>
        <motion.div 
         variants={iconvarient(3.5)}
         initial="initial"
         animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <VscAzure className="text-4xl text-[#0078D4]" /> {/* Microsoft Azure */}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Technology;
