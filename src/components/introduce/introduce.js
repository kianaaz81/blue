import "./introduce.css";
import { motion } from "framer-motion";

const Introduce = () => {
  return (
    <div>
      <motion.h2
        className="h2-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.5 , duration: 0.5,} }}
      >
        Blue Dream - where every sip feels like a dream
      </motion.h2>
      <div className="squre">
        <div className="text-container">
          <motion.h6
            initial={{ x: -850 }}
            animate={{
              x: 0,
              transition: {
                delay: 1.5,
                type: "spring",
                stiffness: "50",
                ease: "easeIn",
                duration: 0.5,
              },
            }}
          >
            The initial idea behind Blue Dream Café was born from a dream of
            creating a serene and delightful space for coffee lovers and those
            who cherish life's precious moments. Each of us has a story about
            the first sip of coffee that changed our lives. For me, coffee has
            always been more than just a drink; it's the aroma of sweet moments,
            a cozy corner to reflect, or even the spark for great ideas.
          </motion.h6>
          <motion.h6
           initial={{ x: -1000 }}
           animate={{
             x: 0,
             transition: {
               delay: 1.6,
               type: "spring",
               stiffness: "50",
               ease: "easeIn",
               duration: 0.5,
             },
           }}
          >
            Inspired by this, Blue Dream Café came to life. Our goal is to
            provide a unique coffee experience—a place where every sip takes you
            to another world. Our coffee is made from the finest, carefully
            selected beans, offering a blend of authentic flavors and a sense of
            tranquility in every cup.
          </motion.h6>
          <motion.h3  
          initial={{ x: -850 }}
           animate={{
             x: 0,
             transition: {
               delay: 1.7,
               type: "spring",
               stiffness: "50",
               ease: "easeIn",
               duration: 0.5,
             },
           }}>kiana - the founder of Blue Dream Café</motion.h3>
        </div>
      </div>
      <div className="circle-container">
        <div className="circle-text">
          {[
            "blue",
            "dream",
            "blue",
            "dream",
            "blue",
            "dream",
            "blue",
            "dream",
          ].map((word, index) => (
            <span key={index} className="word">
              {word}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Introduce;
