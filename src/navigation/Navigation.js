import React from "react";
import AboutUs from "../blocks/AboutUs/AboutUs";
import BookATable from "../blocks/BookATable/BookATable";
import Concept from "../blocks/Concept/Concept";
import Header from "../blocks/Header/Header";
import Navbar from "../components/Navbar/Navbar";

const Navigation = () => {
  return (
    <>
      <Navbar />
      <Header />
      <BookATable />
      <AboutUs />
      <Concept />
    </>
  );
};

export default Navigation;
