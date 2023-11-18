import React from "react";
import "./about.css";
import AboutImg from "../../assets/hari.jpg";
import Info from "./info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">About Me</h2>
      <span className="section_subtitle">My introduction</span>

      <div className="about_container container grid">
        <img src={AboutImg} alt="" className="about_img" />

        <div className="about_data">
          <Info />

          <p className="about_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quidem voluptates similique! Distinctio optio dignissimos vel earum quam, odit fuga recusandae sit rerum corporis illum?</p>

          <a href="" className="button button--flex">
            Download Cv
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
