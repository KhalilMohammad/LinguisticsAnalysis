import React, { ChangeEvent, MouseEvent, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  Button,
} from "reactstrap";
import classnames from "classnames";

import EmotionAnalysis from "./EmotionAnalysis";
import UniqueWordAnalysis from "./UniqueWordAnalysis";
import Cpidr from "./Cpidr";
import "./App.css";
import LemmasCalculation from "./LemmasCalculation";
import { useDispatch } from "react-redux";
import { calculateEmotionAnalysis } from "../reducers/EmotionAnalysisReducer";
import { calculateUniqueWork } from "../reducers/UniqueWordReducer";
import { calculateLemmasCalculation } from "../reducers/LemmasCalculationReducer";
import ky from "ky";
import { calculateCpidr } from "../reducers/CpidrReducer";

function Menu() {
  const [activeTab, setActiveTab] = useState("Emotion analysis");
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (activeTab !== e.currentTarget.text) setActiveTab(e.currentTarget.text);
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleButton = () => {
    dispatch(calculateEmotionAnalysis(text));
    dispatch(calculateUniqueWork(text));
    dispatch(calculateLemmasCalculation(text));
    ky.get("https://localhost:5001/Cpidr?text=" + text)
      .json<string>()
      .then((data) => {
        dispatch(calculateCpidr(data));
      });
  };

  console.log({
    text,
    activeTab,
  });

  return (
    <div className="my-5">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12">
            <Card>
              <CardHeader>Enter text for analysis</CardHeader>
              <CardBody>
                <Form>
                  <FormGroup row={true}>
                    <Label htmlFor="phrase" sm={2}>
                      Phrase
                    </Label>
                    <Col sm={6}>
                      <Input
                        type="textarea"
                        name="text"
                        id="phrase"
                        onChange={handleInput}
                        value={text}
                      ></Input>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Button type="button" onClick={handleButton}>
                      Generate
                    </Button>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Nav tabs={true} card={true}>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: activeTab === "Emotion analysis",
                      })}
                      onClick={handleClick}
                    >
                      Emotion analysis
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: activeTab === "Unique word analysis",
                      })}
                      onClick={handleClick}
                    >
                      Unique word analysis
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: activeTab === "Lemmas calculation",
                      })}
                      onClick={handleClick}
                    >
                      Lemmas calculation
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: activeTab === "CPIDR5 desktop application",
                      })}
                      onClick={handleClick}
                    >
                      CPIDR5 desktop application
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>
              <CardBody className="p-4">
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="Emotion analysis">
                    <EmotionAnalysis></EmotionAnalysis>
                  </TabPane>
                  <TabPane tabId="Unique word analysis">
                    <UniqueWordAnalysis></UniqueWordAnalysis>
                  </TabPane>
                  <TabPane tabId="Lemmas calculation">
                    <LemmasCalculation></LemmasCalculation>
                  </TabPane>
                  <TabPane tabId="CPIDR5 desktop application">
                    <Cpidr></Cpidr>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
