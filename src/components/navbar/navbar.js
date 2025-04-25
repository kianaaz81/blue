import { useEffect, useState } from "react";
import "./navbar.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  useEffect(() => {
    setHasLoaded(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar ">
      <div className="logo">
        <motion.h2
          initial={{ opacity: 0, x: -150 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 2, delay: 1, ease: "easeInOut" },
          }}
        >
          Blue Dream
        </motion.h2>

        <motion.svg
          className="moon"
          width="30"
          height="30"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* moon path */}
          <motion.path
            initial={{ opacity: 1, rotate: 0 }}
            animate={{
              opacity: hasLoaded ? 1 : 1,
              rotate: hasLoaded ? -45 : 0,
              transition: { duration: 2, ease: "easeInOut", delay: 0.3 },
            }}
            fill="khaki"
            d="M75.075,64.591c-21.906,0-39.666-17.759-39.666-39.667c0-4.712,0.826-9.231,2.333-13.424  
        C22.442,17.003,11.5,31.638,11.5,48.833C11.5,70.741,29.259,88.5,51.167,88.5c17.195,0,31.53-10.942,37.333-26.242  
        C84.307,63.765,79.789,64.591,75.075,64.591z"
          ></motion.path>

          {/* tea path */}
          <motion.path
            initial={{ opacity: 0 }}
            animate={{
              opacity: hasLoaded ? 1 : 0,
              transition: { duration: 2, ease: "easeInOut", delay: 1.5 },
            }}
            fill="khaki"
            d="M72.31,69.335c2.334,1.65,5.198,2.62,7.919,2.62h3.181c6.231,0,11.3-5.069,11.3-11.301c0-6.23-5.068-11.299-11.3-11.299h-7.983v-0.729H15.713v4.289c0,0.244,0.011,0.486,0.026,0.728c-0.016,0.431-0.026,0.861-0.026,1.296c0,11.43,5.473,21.475,13.734,27.227H7.85c-1.413,0-2.559,1.146-2.559,2.559c0,1.414,1.146,2.559,2.559,2.559h8.99c0,1.016,0.823,1.54,1.538,1.54H72.46c1.016,0,1.539-0.824,1.539-1.54h8.989c1.413,0,2.559-1.145,2.559-2.559c0-1.412-1.146-2.559-2.559-2.559H61.685C66.209,79.015,69.897,74.581,72.31,69.335z M75.421,55.27h7.988c2.97,0,5.386,2.416,5.386,5.385c0,2.97-2.416,5.386-5.386,5.386h-3.181c-2.038,0-4.438-1.12-5.821-2.709C75.045,60.757,75.396,58.055,75.421,55.27z"
          ></motion.path>
          <motion.path
            initial={{ opacity: 0 }}
            animate={{
              opacity: hasLoaded ? 1 : 0,
              transition: { duration: 2, ease: "easeInOut", delay: 1.5 },
            }}
            fill="khaki"
            d="M35.887,24.743c1.127-2.535,1.409-5.352,0.563-8.168c-0.563-2.253-3.098-3.943-5.352-2.817c0,0-0.281,0.282-0.281,0.564  c0.281,2.253,1.408,4.225,0.845,6.478c-0.845,2.816-2.816,4.788-3.662,7.604c-0.845,2.535-0.563,5.352,0.563,7.605  c0.776,1.294,1.612,2.38,4.359,2.38c0.677,0,1.226-0.548,1.226-1.226c0-0.189-2.074-4.941-0.797-7.633  C34.197,27.841,35.324,26.433,35.887,24.743z"
          ></motion.path>
          <motion.path
            initial={{ opacity: 0 }}
            animate={{
              opacity: hasLoaded ? 1 : 0,
              transition: { duration: 2, ease: "easeInOut", delay: 1.5 },
            }}
            fill="khaki"
            d="M64.738,24.743c1.126-2.535,1.407-5.352,0.562-8.168c-0.562-2.253-3.099-3.943-5.352-2.817c0,0-0.281,0.282-0.281,0.564  c0.281,2.253,1.408,4.225,0.845,6.478c-0.845,2.816-2.816,4.788-3.661,7.604c-0.845,2.535-0.563,5.352,0.562,7.605  c0.777,1.294,1.612,2.38,4.359,2.38c0.677,0,1.227-0.548,1.227-1.226c0-0.189-2.074-4.941-0.798-7.633  C63.048,27.841,64.175,26.433,64.738,24.743z"
          ></motion.path>
          <motion.path
            initial={{ opacity: 0 }}
            animate={{
              opacity: hasLoaded ? 1 : 0,
              transition: { duration: 2, ease: "easeInOut", delay: 1.5 },
            }}
            fill="khaki"
            d="M51.66,23.053c0.563-1.69,0.281-3.38,0.281-5.07c0-1.126-0.281-1.972-0.562-3.098c-0.027-0.109-0.102-0.224-0.148-0.326  c-0.051-0.108-0.102-0.216-0.156-0.322c-0.107-0.213-0.224-0.422-0.354-0.623c-0.268-0.41-0.592-0.78-0.953-1.111  c-0.363-0.333-0.763-0.638-1.196-0.875c-0.416-0.226-0.878-0.381-1.353-0.401c-0.379-0.016-0.762,0.034-1.132,0.113  c-0.365,0.078-0.755,0.151-1.049,0.399c-0.072,0.061-0.138,0.135-0.188,0.215c-0.109,0.176-0.079,0.345-0.019,0.533  c0.038,0.117,0.052,0.24,0.083,0.359c0.038,0.148,0.077,0.295,0.116,0.442c0.08,0.298,0.161,0.597,0.244,0.895  c0.168,0.604,0.341,1.207,0.501,1.513c0.156,0.59,0.304,1.185,0.409,1.787c0.104,0.591,0.158,1.193,0.101,1.793  c-0.061,0.635-0.248,1.244-0.459,1.544c-0.026,0.073-0.047,0.152-0.079,0.223c-1.408,3.099-3.38,5.633-4.225,9.013  c-0.845,3.38-0.845,7.323,1.409,10.14c1.126,1.127,3.098,2.253,4.788,1.127c0.282-0.282,0.563-0.563,0.563-0.845  c0-0.564,0-0.845-0.281-1.409c-1.127-2.535-1.409-5.352-0.563-7.887C48.843,28.687,50.815,26.151,51.66,23.053z"
          ></motion.path>
        </motion.svg>
      </div>
      <motion.ul
        initial={{ y: -155 }}
        animate={{
          y: 0,
          transition: {
            delay: 2,
            type: "spring",
            stiffness: "100",
            ease: "easeInOut",
          },
        }}
        className={`nav-links ${isOpen ? "active" : ""}`}
      >
        <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <a href="#menu">Menu</a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <a href="#about">About Us</a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <a href="#team">Our Team</a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <a href="#contact">Contant</a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <a href="#find">Find Us</a>
        </motion.li>
      </motion.ul>
      <motion.span
        initial={{ y: -100 }}
        animate={{
          y: 0,
          transition: {
            delay: 1.5,
            stiffness: "100",
            ease: "easeInOut",
            type: "spring",
          },
        }}
        className="icon"
      >
        <FontAwesomeIcon icon={faUser} className="icon" />
        <FontAwesomeIcon icon={faShoppingCart} className="icon" />
        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>
      </motion.span>
    </div>
  );
};
export default Navbar;
