import React from "react";
import Section from "../../components/Section/Section";
import images from "../../core/constants/images";
import strings from "../../core/constants/strings";
import classes from "./AboutUs.module.scss";

const AboutUs = () => {
  return (
    <div className={classes.aboutUsContainer}>
      <Section
        textFirst
        title={strings.aboutUs.title}
        subtitle={strings.aboutUs.subtitle}
        description={strings.aboutUs.description}
        src={images.aboutUs}
      />
    </div>
  );
};

export default AboutUs;
