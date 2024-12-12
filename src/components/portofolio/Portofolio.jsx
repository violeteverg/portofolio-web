import { useRef } from "react";
import "./portofolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Leafy Nest",
    img: "LeafyNest.png",
    desc: "Leafty Nest is a project developed during the Phincon Academy, designed to simulate an e-commerce platform for plant enthusiasts. My role in this project included integrating user authentication on the frontend and building features for managing products and user data on the backend. This project highlights the collaborative effort of our team in creating a fully functional and visually appealing platform tailored for plant lovers.",
    link: "https://leafy-nest-user.vercel.app/",
  },
  {
    id: 2,
    title: "Expanse App",
    img: "Expanses.png",
    desc: "Expanse App is a full-stack project built using Next.js for the frontend and backend, with PostgreSQL as the database. This application enables users to manage their financial expenses efficiently. Working on this project gave me hands-on experience in developing a full-stack application, seamless frontend-backend integration, and implementing database management with PostgreSQL.",
    link: "https://project-assignment-sooty.vercel.app/login",
  },
  {
    id: 3,
    title: "Twitter clone",
    img: "Twitter-clone.png",
    desc: "Twitter Clone is the final project we developed during the HariSenin bootcamp. In this project, I was responsible for implementing authentication on the frontend, while on the backend, my focus was on retrieving user data from the database we built. This project reflects our team's work in creating a functional clone of the Twitter application",
    link: "https://final-project-kel2.vercel.app/",
  },
  {
    id: 4,
    title: "World Wise App",
    img: "World-wise.png",
    desc: "World Wise is a project where users can conveniently mark the places they have visited. This application is built using React.js and provides an interactive experience for users to record and remember meaningful locations in their travels.",
    link: "#",
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
      <div className='container'>
        <div className='wrapper'>
          <div className='imageContainer' ref={ref}>
            <img src={item.img} alt='' />
          </div>
          <motion.div className='textContainer' style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link}>
              <button>See Demo</button>
            </a>
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
    <div className='portfolio' ref={ref}>
      <div className='progress'>
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className='progressBar'></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
