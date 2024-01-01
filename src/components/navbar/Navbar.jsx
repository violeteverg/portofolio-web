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
          <img src="mainlogo.png" alt="" />
        </motion.span>
        <motion.ul className="buttons">
          <motion.li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </motion.li>
          <motion.li>
            <Link to="Portofolio" smooth={true} duration={500}>
              Portofolio
            </Link>
          </motion.li>
          <motion.li>
            <Link to="Contact" smooth={true} duration={500}>
              Contact
            </Link>
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
};

export default Navbar;
