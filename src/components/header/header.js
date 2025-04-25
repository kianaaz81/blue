import React from "react";
import { motion } from "framer-motion";
import coffee4 from "../../assets/coffee4.png";
import coffeebeans from "../../assets/coffeebean.png";
import "./header.css";

const coffeeVariants = {
  hidden: { x: 500 },
  visible: {
    x: 0,
    transition: {
      delay: 1.5,
      type: "spring",
      ease: "easeIn",
      stiffness: 50,
    },
  },
};

const Header = () => {
  return (
    <div className="head">
      <div className="circle"></div>
      <div className="header-img">
        <motion.img
          src={coffee4}
          alt="coffee"
          className="coffee"
          variants={coffeeVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.img
          variants={coffeeVariants}
          initial="hidden"
          animate="visible"
          src={coffeebeans}
          alt="coffee beans"
          className="bean"
        />
      </div>

      <motion.div
        initial={{ x: -850 }}
        animate={{
          x: 0,
          transition: {
            delay: 2,
            type: "spring",
            stiffness: "100",
            ease: "ease",
          },
        }}
        className="text"
      >
        <h1>Blue Dream Café</h1>
        <h3>where coffee meets serenity</h3>
        <h6>
          escape the ordinary and experience coffee like never before.where
          every sip feels like a dream let us take you on a journy of flavors,
          comfort, and warmth, one cup at a time. your dream cafe experience
          awaits
        </h6>
        <motion.button
          whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}
          className="menu-btn"
        >
          <h2>Our Menu</h2>
        </motion.button>
      </motion.div>
    </div>
  );
};
export default Header;
