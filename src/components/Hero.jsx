import{HERO_CONTENT} from "../constants";
import { HERO_NAME } from "../constants";
import profile from "../assets/main.png";
import{delay, motion} from "framer-motion"

const container=(delay)=>({
    hidden:{x:-100,opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5,delay:delay}
    }
})

const Hero = () => {
  return (
 
      <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1
                     variants={container(0)}
                     initial="hidden"
                     animate="visible"
                    className="pb-14 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                        {HERO_NAME}</motion.h1>
                        <motion.span 
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            Java Developer</motion.span>
                            <motion.p 
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-5 font-light tracking-tighter ">{HERO_CONTENT}</motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center rounded-2xl">
                <motion.img 
                initial={{opacity:0,x:100}}
                transition={{duration:1,delay:1.2}}
                animate={{x:0,opacity:1}}
                    width={470}
                    height={520}
                    alt="project.jpg"
                    className="mb-4 rounded-xl w-[510px] h-[510px] object-cover mask-fade"
                src={profile} />
            </div>
            </div>
        </div>
        </div>
  );
}

export default Hero
