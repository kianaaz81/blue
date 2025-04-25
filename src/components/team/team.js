import "./team.css";
import person1 from "../../assets/team-1.png";
import person2 from "../../assets/team-2.png";
import person3 from "../../assets/team-3.png";
import { motion } from "framer-motion";

const Team = () => {
  return (
    <div className="about">
      <motion.h1
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
        blue dream team: meet our team
      </motion.h1>
      <motion.p
        initial={{ x: 1050 }}
        animate={{
          x: 0,
          transition: {
            delay: 0.6,
            type: "spring",
            stiffness: "100",
            ease: "easeIn",
            duration: 0.5,
          },
        }}
      >
        The Blue Dream team is a group of passionate and creative individuals
        who have come together to create a relaxing and inspiring space for you.
        At Blue Dream, we invite you to escape the daily grind and embark on a
        journey to your dream world with a delicious cup of coffee.
      </motion.p>
      <div className="circle-container1">
        <div className="circle-text1">
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

      <div className="team">
        {[
          {
            name: "Anna Malik",
            img: person1,
            desc: "Meet Anna, our skilled barista who has mastered the art of crafting the perfect cup of coffee. With her passion for coffee and attention to detail, she'll create a beverage that's sure to delight your taste buds.",
          },
          {
            name: "Jenny Malik",
            img: person2,
            desc: "Jenny, a skilled and creative barista, brings an unforgettable flavor to every cup with her passion for the art of coffee-making. Paying close attention to details and using the finest coffee beans, she creates a warm and delightful experience with every sip.",
          },
          {
            name: "Susan Malik",
            img: person3,
            desc: "Susan, a dedicated and innovative barista, is known for her ability to craft exceptional coffee experiences. With a deep understanding of flavors and a passion for connecting with people, Susan transforms every cup into a moment of joy and inspiration.",
          },
        ].map((member, index) => (
          <div className="team-container" key={index}>
            <motion.img
              initial={{ x: 1570 }}
              animate={{
                x: 0,
                transition: {
                  delay: 0.7,
                  type: "spring",
                  ease: "easeInOut",
                  stiffness: "50",
                  duration: 0.2,
                },
              }}
              src={member.img}
              alt={member.name}
              className="team-img"
            />
            <motion.h3
              initial={{ x: 1550 }}
              animate={{
                x: 0,
                transition: {
                  delay: 0.8,
                  type: "spring",
                  stiffness: "50",
                  ease: "easeIn",
                  duration: 0.5,
                },
              }}
            >
              {member.name}
            </motion.h3>
            <motion.p
              initial={{ x: -1550 }}
              animate={{
                x: 0,
                transition: {
                  delay: 0.9,
                  type: "spring",
                  stiffness: "50",
                  ease: "easeIn",
                  duration: 0.5,
                },
              }}
            >
              {member.desc}
            </motion.p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Team;
