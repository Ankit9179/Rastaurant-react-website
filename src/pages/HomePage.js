import React from "react";
import Layout from "../components/Layout/Layout";
import Banner from "../images/banner.jpg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="home-content">
          <h4>Food Website</h4>
          <span>you can order</span>
          <Link to={"/menu"}>
            <button>Now</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
