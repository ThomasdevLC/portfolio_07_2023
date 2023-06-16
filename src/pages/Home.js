import React from "react";
import HeaderNav from "../components/HeaderNav";
import pic from "../assets/images/pic.png";
const Home = () => {
  return (
    <div className="home">
      <HeaderNav />

      <div className="home__content">
        <div className="home__intro">
          <div className="home__intro__pic">
            <img src={pic} alt="photo" />
          </div>
          <h1 className="home__intro__name">Thomas Le Cam</h1>
          <h2 className="home__intro__position">Développeur web</h2>
          <p className="home__intro__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            laborum minus dolores aperiam esse nostrum voluptas est
            consequuntur, veniam praesentium beatae nisi obcaecati quia
            reiciendis recusandae soluta ea harum placeat labore atque adipisci
            qui. Sunt commodi perferendis.
          </p>
          <p className="home__intro__city">Montpellier</p>
          <p className="home__intro__contact">
            06 43 84 36 32 <br />
            thomas.lecam@gmail.com
          </p>
          <div className="home__intro__socials">
            <i class="fa-brands fa-linkedin-in"></i>
            <i class="fa-brands fa-github"></i>
            <i class="fa-regular fa-envelope"></i>
          </div>
        </div>

        <div className="home__works br"></div>
      </div>
    </div>
  );
};

export default Home;
