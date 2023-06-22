import React from "react";
import Layout from "../components/Layout/Layout";

const ContactPage = () => {
  return (
    <Layout>
      <div className="d-flex contact-pag">
        <h1>Contact My Restaurant</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde voluptas minus Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus illo inventore magnam sed sequi, laborum at. Quas nisi vero eum. doloribus autem tenetur laboriosam obcaecati, rem quo quam nisi.</p>
      </div>
      <div className="contect-div " style={{ border: "2px solid black", margin: "20px", width: "400px" }}>
        <div className="d-flex align-items-center justify-content-center bg-dark text-white p-4">
          <h4 >contact details</h4>
        </div>
        <div className="mb-2 m-3">
          <br />
          <i className="fa-solid fa-handshake-angle" style={{ color: "#f8240d" }}></i> 1800-00-0000
          <hr />
          <i className="fa-regular fa-envelope" style={{ color: "#1561e5" }}></i> ak123@gkktgmail.com
          <hr />
          <i className="fa-regular fa-phone" style={{ color: "#24f097" }}></i> 9199919991
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
