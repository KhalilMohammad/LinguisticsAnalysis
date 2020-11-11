import React from "react";
import { useSelector } from "react-redux";
import { Col, Form, FormGroup, Label } from "reactstrap";
import { selectUniqueWork } from "../reducers/UniqueWordReducer";

const UniqueWordAnalysis = () => {
  const state = useSelector(selectUniqueWork);

  return (
    <Form>
      <FormGroup row={true}>
        <Label htmlFor="totalWords" sm={2}>
          Total Words
        </Label>
        <Col sm={6} className="text-left">
          {state.totalWords}
        </Col>
      </FormGroup>
      <FormGroup row={true}>
        <Label htmlFor="uniqueWords" sm={2}>
          Unique Words
        </Label>
        <Col sm={6} className="text-left">
          {state.uniqueWords}
        </Col>
      </FormGroup>
      <FormGroup row={true}>
        <Label htmlFor="uniqueWords" sm={2}>
          Fraction form
        </Label>
        <Col sm={6} className="text-left">
          {state.uniqueWords / state.totalWords || 0}
        </Col>
      </FormGroup>
    </Form>
  );
};

export default UniqueWordAnalysis;
