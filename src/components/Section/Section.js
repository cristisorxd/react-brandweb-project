import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import classes from "./Section.module.scss";

const Section = ({ textFirst, title, subtitle, description, src }) => {
  return (
    <Container>
      <Row>
        <Col
          md={textFirst ? { order: "first" } : { order: "last" }}
          className={classes.textSection}
          style={!textFirst ? { marginLeft: "50px" } : null}
        >
          <h3 className={classes.title}>{title}</h3>
          <h5 className={classes.subtitle}>{subtitle}</h5>
          <p className={classes.description}>{description}</p>
        </Col>
        <Col xs={textFirst ? { order: "last" } : { order: "first" }}>
          <img src={src} className={classes.sectionImg} />
        </Col>
      </Row>
    </Container>
  );
};

export default Section;
