import React from "react";
import Bodyinfo from "../components/Bodyinfo";
import defaultBcg from "../images/defaultBcg.jpeg";
import { Link } from "react-router-dom";
export default function ErrorComponent() {
  return (
    <>
      <Bodyinfo img={defaultBcg} title="404" max="true">
        <h2 className="text-uppercase">page not found</h2>
        <Link to="/" className="main-link" style={{ marginTop: "2rem" }}>
          return home
        </Link>
      </Bodyinfo>
    </>
  );
}