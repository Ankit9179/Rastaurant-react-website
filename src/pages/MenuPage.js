import React from "react";
import Layout from "../components/Layout/Layout";
import Fooditem from "../RestaurantData";
import { Link } from "react-router-dom";

const MenuPage = () => {
  return <Layout>
    <div className="container">
      <div className="row">
        {
          Fooditem.map((item, index) => {
            return (
              <div className="col-4 mt-4 mb-4  card" key={item.id}>
                <div className="card" style={{ width: '15rem' }}>
                  <img src={item.img} className="card-img-top" alt="img" />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, damet quaerat quo numquam.</p>
                    <p className="card-title"> ₹ {item.price}</p>
                    <Link to={"/"}><a href="#" className="btn btn-primary">Order</a></Link>
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>
    </div>
  </Layout>;
};

export default MenuPage;
