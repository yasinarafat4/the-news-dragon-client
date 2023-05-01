import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import first from "../../../assets/1.png";
import second from "../../../assets/2.png";
import third from "../../../assets/3.png";
import { FaCalendar } from "react-icons/fa";

const CategoryInsights = () => {
  return (
    <>
      <h4 className="mt-5 mb-3">Editors Insight</h4>
      <Row xs={1} md={1} lg={1} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={first} />
            <Card.Body>
              <Card.Title>
                Bayern Slams Authorities Over Flight Delay to Club World Cup
              </Card.Title>
              <div className="d-flex gap-2">
                <p className="fw-semibold">Sports</p>
                <p style={{ color: "#9F9F9F" }}>
                  <FaCalendar></FaCalendar> Jan 4, 2022
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={second} />
            <Card.Body>
              <Card.Title>
                Bayern Slams Authorities Over Flight Delay to Club World Cup
              </Card.Title>
              <div className="d-flex gap-2">
                <p className="fw-semibold">Sports</p>
                <p style={{ color: "#9F9F9F" }}>
                  <FaCalendar></FaCalendar> Jan 4, 2022
                </p>
              </div>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={third} />
            <Card.Body>
              <Card.Title>
                Bayern Slams Authorities Over Flight Delay to Club World Cup
              </Card.Title>

              <div className="d-flex gap-2">
                <p className="fw-semibold">Sports</p>
                <p style={{ color: "#9F9F9F" }}>
                  <FaCalendar></FaCalendar> Jan 4, 2022
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CategoryInsights;
