import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Fauzan
        </motion.span>
        <div className="social">
          <Link to="about" className="span" smooth={true} duration={500}>
            About
          </Link>
          <Link to="portfolio" className="span" smooth={true} duration={500}>
            Portofolio
          </Link>
          <Link to="contact" className="span" smooth={true} duration={500}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
