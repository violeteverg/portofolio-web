import "./hero.scss";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>MUHAMMAD FAUZAN</motion.h2>
          <motion.h1 variants={textVariants}>Front-end developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              <Link
                to="about" // Sesuaikan dengan ID elemen Portofolio Anda
                smooth={true}
                duration={500}
              >
                About me
              </Link>
            </motion.button>
            <motion.button variants={textVariants}>
              <Link
                to="Portofolio" // Sesuaikan dengan ID elemen Portofolio Anda
                smooth={true}
                duration={500}
              >
                Portofolio
              </Link>
            </motion.button>
            <motion.button variants={textVariants}>
              <Link
                to="Contact" // Sesuaikan dengan ID elemen Kontak Anda
                smooth={true}
                duration={500}
              >
                Contact Me
              </Link>
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Frontend developer
      </motion.div>
      <div className="imageContainer">
        <img src="/Hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
