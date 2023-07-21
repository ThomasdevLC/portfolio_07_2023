import React from "react";
import MyIntro from "../components/Home/MyIntro";
import WorksTitle from "../components/Home/WorksTitle";
import WorksLinks from "../components/Home/WorksLinks";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.3 }}
    >
      <div className="home__content">
        <div>
          <MyIntro />
        </div>
        <div className="home__works">
          <div className="home__works__title">
            <WorksTitle />
          </div>
          <div className=" home__works__container ">
            <WorksLinks />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
