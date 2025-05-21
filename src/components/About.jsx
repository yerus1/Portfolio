import picture from "../assets/about.jpg"
import {ABOUT_TEXT} from "../constants"
import{delay, motion} from "framer-motion"

const container=(delay)=>({
    hidden:{x:-100,opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5,delay:delay}
    }
})

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">About 
        <span className="text-neutral-500"> Me</span></motion.h1>

        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8">
                <motion.div 
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:1}}
                className="flex items-center justify-center">
                    <img width={470}
                    height={520}
                    alt="project.jpg"
                    className="mb-4 rounded-xl w-[510px] h-[450px] object-cover mask-fade"src={picture}  />
                </motion.div>
            </div>
            <div className="w-full lg:w-1/2">
                    <motion.div 
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:100}}
                    transition={{duration:0.6}}
                    className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6 text-neutral-400">{ABOUT_TEXT}</p>
                    </motion.div>
                </div>
        </div>
    </div>
  );
};

export default About
