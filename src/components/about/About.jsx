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
    <div className="about" ref={ref}>
      <motion.div style={{ y: yBg }} className="image_container">
        <img src="/download.jpg" alt="foto" />
      </motion.div>

      <motion.div style={{ x: yText }} className="wrapper">
        <h1>About Me</h1>
        <p>
          A bachelor degree from Terbuka University. Turning Frontend Developer
          skilled in HTML, CSS, Javascript, React.js, and Node.js. Actively
          enrolled in a Frontend Web Developer bootcamp to enhance web
          development capabilities. Detail oriented and eager for a full-time
          opportunity in Frontend Web Development. Passionate about combining
          biology knowledge with tech skills to create innovative solutions.
        </p>

        <div className="skills">
          <h2>Programming skills:</h2>
          <img src="/HtmlLogo.png" alt="" />
          <img src="/CssLogo.png" alt="" />
          <img src="/TailwindLogo.png" alt="" />
          <img src="/JavascriptLogo.png" alt="" />
          <img src="/ReactJsLogo.png" alt="" />
          <img src="/NodeJsLogo.png" alt="" />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
