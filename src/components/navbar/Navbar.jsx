import "./navbar.scss";
import { motion } from "framer-motion";

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
          <a href="#">
            <span>About</span>
          </a>
          <a href="#">
            <span>Portofolio</span>
          </a>
          <a href="#">
            <span>Contact</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
