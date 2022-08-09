import React from "react";
import Photo from "../../components/Photo/Photo";
import images from "../../core/constants/images";
import classes from "./Header.module.scss";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";

const Header = () => {
  return (
    <div className={classes.headerContainer}>
      <div className={classes.headerLeft}>
        <img src={images.logo} className={classes.headerLogo} />
        <h3>Bun venit la</h3>
        <h1>Domeniile Panciu</h1>
        <h2>Restaurantul spaniol din Copou</h2>
        <div className={classes.btn}>
        <ButtonGroup
          display="block"
          firstBtnText="Comanda acum"
          secondBtnText="Initiaza comanda de grup"
        />
        </div>
      </div>

      {/* <img className={classes.headerImg} src={images.headerImg} /> */}
      <div className={classes.headerRight}>
        <Photo
          width="820px"
          height="799px"
          src={images.headerImg}
          alt="Delicious Dish"
        />
      </div>
    </div>
  );
};

export default Header;
