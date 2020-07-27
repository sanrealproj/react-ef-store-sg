import React from 'react';
import Info from "../components/AboutPage/Info";
import Bodyinfo from "../components/Bodyinfo";
import aboutBcg from "../images/aboutBcg.jpeg";

export default function About() {
    return (
      <>
        <Bodyinfo img={aboutBcg} />
        <Info />
      </>
    );
  }
  