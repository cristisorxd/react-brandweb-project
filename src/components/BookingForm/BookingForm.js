import React from 'react'
import { Row, Col, FormControl, Form } from "react-bootstrap";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import classes from "./BookingForm.module.scss";

const BookingForm = () => {
    const emailHandler = () => {};
    const submitHandler = (e) => {
      e.preventDefault();
    };
  return (
    <Form onSubmit={submitHandler}>
    <Row>
      <Col>
        <Form.Group>
          <Form.Label>Nume</Form.Label>
          <Form.Control
            name="name"
            type="text"
            bsPrefix={classes.input}
          />
        </Form.Group>
      </Col>
      <Col>
        <Form.Group>
          <Form.Label>Nume</Form.Label>
          <Form.Control
            name="lastname"
            type="text"
            bsPrefix={classes.input}
          />
        </Form.Group>
      </Col>
    </Row>
    <Row>
      <Col>
        <Form.Group>
          <Form.Label>Telefon</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            bsPrefix={classes.input}
          />
        </Form.Group>
      </Col>
      <Col>
        <Form.Group>
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" bsPrefix={classes.input} />
        </Form.Group>
      </Col>
    </Row>
    <Row>
      <Col>
        <Form.Group>
          <Form.Label>Nr. de persoane</Form.Label>
          <Form.Select
            defaultValue="Nr. de persoane"
            bsPrefix={classes.input}
          ></Form.Select>
        </Form.Group>
      </Col>
      <Col>
        <Form.Group>
          <Form.Label>Ora</Form.Label>
          <Form.Select bsPrefix={classes.input}></Form.Select>
        </Form.Group>
      </Col>
      <Col>
        <Form.Group>
          <Form.Label>Data</Form.Label>
          <Form.Select bsPrefix={classes.input}></Form.Select>
        </Form.Group>
      </Col>
    </Row>
    <Row>
      <Col>
        <Form.Group>
          <Form.Label>Locatia mesei</Form.Label>
          <Form.Select bsPrefix={classes.input}></Form.Select>
          <Form.Text className={classes.formText}>
            *Anularea rezervării în cazul în care mâncarea este comandată
            în prealabil se face cu maxim 6 ore înainte de ora rezervării.
          </Form.Text>
        </Form.Group>
      </Col>
    </Row>
    <Row>
      <Col>
        <Form.Group>
          <Form.Label>Cerinte suplimentare</Form.Label>
          <Form.Control
            type="text"
            bsPrefix={classes.input}
          ></Form.Control>
          <Form.Check
            type="checkbox"
            label="Vreau sa primesc mesaje promoţionale din partea Andalu"
            className={classes.formText}
          />
        </Form.Group>
      </Col>
    </Row>
    <ButtonGroup
      display="flex"
      firstBtnText="Rezerva masa"
      secondBtnText="Rezerva & comanda in avans"
    />
  </Form>
  )
}

export default BookingForm