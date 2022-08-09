import React from "react";
import { Row, Col, FormControl, Form, Container } from "react-bootstrap";
import BookingForm from "../../components/BookingForm/BookingForm";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import Photo from "../../components/Photo/Photo";
import images from "../../core/constants/images";
import classes from "./BookATable.module.scss";

const BookATable = () => {
  return (
    // <Container>
    //   <Row>
    //     <Col>
    //       <h3 className={classes.title}>Rezerva o masa</h3>
    //       <BookingForm />
    //     </Col>
    //     <Col>
    //       <Photo
    //         src={images.tableBooking}
    //         width="770px"
    //         height="800px"
    //         alt="Book a table"
    //       />
    //     </Col>
    //   </Row>
    // </Container>

    <div className={classes.container}>
      <div className={classes.bookingLeft}>
        <h3 className={classes.title}>Rezerva o masa</h3>
        <BookingForm />
      </div>
      <div className={classes.bookingRight}>
        <Photo
          src={images.tableBooking}
          width="770px"
          height="800px"
          alt="Book a table"
        />
      </div>
    </div>
  );
};

export default BookATable;
