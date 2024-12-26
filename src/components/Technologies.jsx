import { RiReactjsLine } from "react-icons/ri";
import { TbBrandTypescript, TbBrandTailwind, TbBrandRedux, TbBrandGraphql, TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs, FaPython } from "react-icons/fa";
import { BiLogoAws, BiLogoDocker } from "react-icons/bi";
import { SiMysql, SiPostgresql, SiMongodb, SiFastapi, SiKubernetes } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-9"
      >
        {[
          { icon: FaPython, color: "text-yellow-400", duration: 2.5 },
          { icon: TbBrandNextjs, color: "text-black-400", duration: 3 },
          { icon: RiReactjsLine, color: "text-cyan-400", duration: 2.5 },
          { icon: TbBrandRedux, color: "text-purple-400", duration: 3 },
          { icon: TbBrandTypescript, color: "text-blue-400", duration: 6 },
          { icon: TbBrandTailwind, color: "text-cyan-400", duration: 8 },
          { icon: TbBrandGraphql, color: "text-pink-400", duration: 2 },
          // { icon: FaNodeJs, color: "text-green-400", duration: 3.5 },
          { icon: SiMysql, color: "text-grey-400", duration: 4 },
          { icon: SiPostgresql, color: "text-blue-400", duration: 3 },
          { icon: SiMongodb, color: "text-green-400", duration: 5 },
          { icon: SiFastapi, color: "text-teal-400", duration: 2.5 },
          // { icon: SiRestapi, color: "text-teal-400", duration: 1 },
          { icon: BiLogoAws, color: "text-orange-400", duration: 2 },
          { icon: BiLogoDocker, color: "text-blue-400", duration: 3 },
          { icon: SiKubernetes, color: "text-indigo-400", duration: 5 },
        ].map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(tech.duration)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-6"
          >
            <tech.icon className={`text-7xl ${tech.color}`} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Technologies;
