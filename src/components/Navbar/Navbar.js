import React from "react";
import { NavHashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import images from "../../core/constants/images";
import strings from "../../core/constants/strings";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import classes from "./Navbar.module.scss";

const Navbar = () => {
  const links = [
    {
      to: "#order",
      name: strings.navbar.order,
    },
    {
      to: "#book",
      name: strings.navbar.book,
    },
    {
      to: "#aboutus",
      name: strings.navbar.aboutUs,
    },
    {
      to: "#contact",
      name: strings.navbar.contact,
    },
  ];
  return (
    <div className={classes.navContainer}>
      <div className={classes.navLeft}>
        <NavLink to="/">
          <img src={images.logo} className={classes.logo} />
        </NavLink>
      </div>
      <div className={classes.navRight}>
        {links.map((link) => (
          <NavHashLink to={link.to}>{link.name}</NavHashLink>
        ))}
        <AccountCircleOutlinedIcon sx={{ color: "white" }} />
        <ShoppingBagOutlinedIcon sx={{ color: "white" }} />
        <div className={classes.dropdown}>
            <div></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
