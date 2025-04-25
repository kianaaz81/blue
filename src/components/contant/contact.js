import logo from "../../assets/logo.png";
import "./contact.css";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="footer ">
      {/* logo */}
      <div className="item-footer">
        <motion.div
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
          className="logo-footer"
        >
          <img src={logo} alt="Blue Dream Logo" />
          <h1>Blue Dream</h1>
        </motion.div>
      </div>
      {/* menu */}
      <div className="item-footer">
        <motion.h2
          initial={{ x: 1550 }}
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
          Blue Dream Menu
        </motion.h2>
        <ul>
          <motion.li
            initial={{ x: 1550 }}
            animate={{
              x: 0,
              transition: {
                delay: 0.7,
                type: "spring",
                stiffness: "50",
                ease: "easeInOut",
                duration: 0.5,
              },
            }}
          >
            Hot Coffee
          </motion.li>
          <motion.li
            initial={{ x: 1550 }}
            animate={{
              x: 0,
              transition: {
                delay: 0.8,
                type: "spring",
                stiffness: "50",
                ease: "easeInOut",
                duration: 0.5,
              },
            }}
          >
            Iced Coffee
          </motion.li>
          <motion.li
            initial={{ x: 1550 }}
            animate={{
              x: 0,
              transition: {
                delay: 0.9,
                type: "spring",
                stiffness: "50",
                ease: "easeInOut",
                duration: 0.5,
              },
            }}
          >
            Dessert
          </motion.li>
          <motion.li
            initial={{ x: 1550 }}
            animate={{
              x: 0,
              transition: {
                delay: 1,
                type: "spring",
                stiffness: "50",
                ease: "easeInOut",
                duration: 0.5,
              },
            }}
          >
            Snack
          </motion.li>
        </ul>
      </div>
      {/* information */}
      <div className="item-footer">
        <motion.h2   initial={{ x: 1550 }}
          animate={{
            x: 0,
            transition: {
              delay: 0.6,
              type: "spring",
              stiffness: "50",
              ease: "easeIn",
              duration: 0.5,
            },
          }}>Information</motion.h2>
        <motion.p initial={{ x: 1550 }}
            animate={{
              x: 0,
              transition: {
                delay: 0.7,
                type: "spring",
                stiffness: "50",
                ease: "easeInOut",
                duration: 0.5,
              },
            }}>Phone: +12 345 6789</motion.p>
        <motion.p initial={{ x: 1550 }}
            animate={{
              x: 0,
              transition: {
                delay: 0.8,
                type: "spring",
                stiffness: "50",
                ease: "easeInOut",
                duration: 0.5,
              },
            }}>Email: bludream@example.com</motion.p>
        <motion.p initial={{ x: 1550 }}
            animate={{
              x: 0,
              transition: {
                delay: 0.9,
                type: "spring",
                stiffness: "50",
                ease: "easeInOut",
                duration: 0.5,
              },
            }}>Address: 123 Trendy Avenue, Chicville, CA 90210</motion.p>
      </div>
    </div>
  );
};
export default Contact;
