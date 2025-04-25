import React from "react";
import "./find.css";
import location1 from "../../assets/location1.jpg";
import location2 from "../../assets/location2.jpg";
import { motion } from "framer-motion";

const FindUs = () => {
  return (
    <React.Fragment>
      <motion.h2
        className="location-h2"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.5,
            stiffness: "100",
            ease: "easeInOut",
            type: "spring",
          },
        }}
      >
        blue dream location
      </motion.h2>
      <div className="location">
        <div className="location-text">
          <motion.h3
            initial={{ x: -850 }}
            animate={{
              x: 0,
              transition: {
                delay: 0.6,
                type: "spring",
                stiffness: "50",
                ease: "easeIn",
                duration: 0.5,
              },
            }}
          >
            our address
          </motion.h3>
          <motion.p
            initial={{ x: -850 }}
            animate={{
              x: 0,
              transition: {
                delay: 0.6,
                type: "spring",
                stiffness: "50",
                ease: "easeIn",
                duration: 0.5,
              },
            }}
          >
            123 trendy avenue, chicville, ca 90210{" "}
          </motion.p>
          <motion.h3
            initial={{ x: -850 }}
            animate={{
              x: 0,
              transition: {
                delay: 0.6,
                type: "spring",
                stiffness: "70",
                ease: "easeIn",
                duration: 0.5,
              },
            }}
          >
            we are opened at:
          </motion.h3>
          <motion.p
            initial={{ x: -850 }}
            animate={{
              x: 0,
              transition: {
                delay: 0.6,
                type: "spring",
                stiffness: "70",
                ease: "easeIn",
                duration: 0.5,
              },
            }}
          >
            monday - friday: 7 am - 10 pm
          </motion.p>
          <motion.p
            initial={{ x: -850 }}
            animate={{
              x: 0,
              transition: {
                delay: 0.6,
                type: "spring",
                stiffness: "70",
                ease: "easeIn",
                duration: 0.5,
              },
            }}
          >
            saturday - sunday: 8 am - 11 pm
          </motion.p>
        </div>
        <div className="img-location">
          <motion.img
            initial={{ x: 670 }}
            animate={{
              x: 0,
              transition: {
                delay: 0.6,
                type: "spring",
                ease: "easeInOut",
                stiffness: "70",
                duration: 0.2,
              },
            }}
            src={location1}
            alt="location"
            className="location-img"
          />
          <motion.img
            initial={{ x: 670 }}
            animate={{
              x: 0,
              transition: {
                delay: 0.7,
                type: "spring",
                ease: "easeInOut",
                stiffness: "70",
                duration: 0.2,
              },
            }}
            src={location2}
            alt="location"
            className="location-img"
          />
        </div>
      </div>
    </React.Fragment>
  );
};
export default FindUs;
