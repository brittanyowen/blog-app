import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="team-members">
        Designed and developed by:{" "}
        <Link to="https://www.linkedin.com/in/huckleberry-ginesta/">
          Huckleberry Ginesta
        </Link>
        ,{" "}
        <Link to="https://www.linkedin.com/in/zoe-zhenwen-li-65343a179/">
          Zoe Li
        </Link>
        , and{" "}
        <Link to="https://www.linkedin.com/in/bnowen/">Brittany Owen</Link>
      </div>
      <div className="icon">
        Icons made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
