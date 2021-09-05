import React from "react";
import { useSelector } from "react-redux";
import FAB from "../../Components/FAB/FAB";
import Header from "../../Components/Header/Header";
import SideMenu from "../../Components/SideMenu/SideMenu";
import css from "./home.scss";

const Home = () => {
  useSelector((state) => {
    console.log(state);
  });
  return (
    <SideMenu>
      <div>
        <FAB className={css.fab} icon="plus" position="bottomRight" />
      </div>
    </SideMenu>
  );
};

export default Home;
