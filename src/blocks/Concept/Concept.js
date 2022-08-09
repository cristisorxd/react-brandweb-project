import React from "react";
import Section from "../../components/Section/Section";
import strings from "../../core/constants/strings";
import images from "../../core/constants/images";
import classes from "./Concept.module.scss";

const Concept = () => {
  return (
    <div className={classes.conceptContainer}>
      <Section
        title={strings.concept.title}
        subtitle={strings.concept.subtitle}
        description={strings.concept.description}
        src={images.concept}
      />
    </div>
  );
};

export default Concept;
