import React, { useRef } from "react";
import "./about.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className='about' ref={ref}>
      <motion.div style={{ x: yText }} className='wrapper'>
        <h1>About Me</h1>
        <p>
          As a Junior Full-Stack Developer, I bring a versatile skill set in
          building dynamic and user-centric web applications. With hands-on
          experience in React.js, Next.js, and Tailwind CSS, I specialize in
          crafting seamless, responsive front-end interfaces. On the backend, I
          am proficient in Node.js, Express, and MySQL with Sequelize, allowing
          me to implement robust server-side logic and efficient database
          management. I excel at integrating APIs, optimizing performance, and
          ensuring scalability, while maintaining clean and reusable code.
          Driven by a passion for delivering impactful solutions, I continuously
          explore emerging technologies to improve my development workflows and
          bridge front-end and back-end systems.
        </p>

        <div className='skills'>
          <h2>Programming skills:</h2>
          <img src='/HtmlLogo.png' alt='' />
          <img src='/CssLogo.png' alt='' />
          <img src='/TailwindLogo.png' alt='' />
          <img src='/JavascriptLogo.png' alt='' />
          <img src='/typescript.png' alt='' />
          <img src='/ReactJsLogo.png' alt='' />
          <img src='/nextjs.jpeg' alt='' />
          <img src='/NodeJsLogo.png' alt='' />
          <img src='/jest.jpeg' alt='' />
          <img src='/MySql.png' alt='' />
          <img src='/postgresql.jpeg' alt='' />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
