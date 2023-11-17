import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="image_container">
        <img src="/download.jpg" alt="foto" />
      </div>

      <div className="wrapper">
        <h1>About Me</h1>
        <p>
          A bachelor degree from Terbuka University. Turning Full-Stack
          Developer skilled in HTML,CSS,Javascript,React.js and Node.js Actively
          enrolled in a Full-Stack Web Developer bootcamp to enhance web
          development capabilities. Detail oriented and eager for a full time
          opportunity in Full-Stack Web Development. Passionate about combining
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
      </div>
    </div>
  );
};

export default About;
