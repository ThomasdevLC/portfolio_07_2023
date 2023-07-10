import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import worklist from "../worklist/worklistData";
import MyIntro from "../components/Home/MyIntro";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <div className="home__content">
        <div className="home__intro">
          <MyIntro />
        </div>
        <div className="home__works">
          <div className=" home__works__container ">
            {worklist.map((item) => (
              <NavLink
                to={`/${item.link}/${item.id}`}
                key={item.id}
                className={`work work-${item.id} overlay`}
              ></NavLink>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
