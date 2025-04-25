
import "./home.css";
import Menu from "../components/menu/menu";
import React from "react";
import Introduce from "../components/introduce/introduce";
import Header from "../components/header/header";
import FindUs from "../components/find/findus";
import Team from "../components/team/team";
import Contact from "../components/contant/contact";

const Home = () => {
  return (
    <div className="container">
      {/* header */}
     <Header/>
      {/* compony */}
     <Introduce/>
     {/* munu */}
      <Menu />
      {/* address */}
      <FindUs/>
      {/* team */}
      <Team />
<Contact/>
    </div>
  );
};
export default Home;
