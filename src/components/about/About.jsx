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
      <motion.div style={{ x: yText }} className="wrapper">
        <h1>About Me</h1>
        <p>
          A graduate with a bachelor's degree from Terbuka University, I am
          transitioning into a Frontend Developer role, equipped with skills in
          HTML, CSS, Javascript, React.js, and Node.js. Actively enrolled in a
          Frontend Web Developer bootcamp, I find the journey exciting and am
          committed to continuous learning, always seeking opportunities to
          explore new technologies and embrace fresh challenges. Detail-oriented
          and enthusiastic, I am eagerly pursuing a full-time opportunity in
          Frontend Web Development, aiming to contribute my skills and passion
          for crafting innovative solutions.
        </p>

        <div className="skills">
          <h2>Programming skills:</h2>
          <img src="/HtmlLogo.png" alt="" />
          <img src="/CssLogo.png" alt="" />
          <img src="/TailwindLogo.png" alt="" />
          <img src="/JavascriptLogo.png" alt="" />
          <img src="/ReactJsLogo.png" alt="" />
          <img src="/NodeJsLogo.png" alt="" />
          <img src="/gitLogo.png" alt="" />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
