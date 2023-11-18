import { useRef } from "react";
import "./portofolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Twitter clone",
    img: "Twitter-clone.png",
    desc: "Twitter Clone is the final project we developed during the HariSenin bootcamp. In this project, I was responsible for implementing authentication on the frontend, while on the backend, my focus was on retrieving user data from the database we built. This project reflects our team's work in creating a functional clone of the Twitter application",
  },
  {
    id: 2,
    title: "Expanse App",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Expanse App is my first full-stack project, combining React for the frontend and Node.js with MySQL for the backend. This application allows users to manage their financial expenses. The project provided me with valuable experience in frontend-backend integration and database management.",
  },
  {
    id: 3,
    title: "World Wise App",
    img: "World-wise.png",
    desc: "World Wise is a project where users can conveniently mark the places they have visited. This application is built using React.js and provides an interactive experience for users to record and remember meaningful locations in their travels.",
  },
  {
    id: 4,
    title: "Guess Number",
    img: "Guess-number.png",
    desc: "Guess Number is my first JavaScript project, designed for users to guess a random number. Players have 20 chances to guess the number, and with each opportunity that decreases, their points also diminish. This project provided an engaging experience for users to test their guessing skills and numerical intuition.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
