import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { HiOutlineClock } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import "../Css/Content.css";
const Content = () => {
  return (
    <>
      <Container style={{ maxWidth: "100%" }}>
        <Row>
          <Col xxl={8} lg={12} md={12}>
            <Row>
              <h3 style={{ paddingTop: "40px" }}>
                GRIDUS RESUME HTML TEMPLATE
              </h3>
              <h6 style={{ color: "red" }}>
                {" "}
                PROJECT FOR CV / RESUME OR PORTFOLIO WEBSITE
              </h6>
            </Row>
            <Row>
              <Col lg={4} md={12} xs={12}>
                <Row>
                  <Col md={3} xs={3} className="ColorIcon">
                    <HiOutlineClock size={"50px"} />
                  </Col>
                  <Col md={9} xs={9}>
                    <h5>Para graph1 </h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laboriosam beatae repudiandae iure, ex atque praesentium
                      tempora veritatis illo facilis eius. Iure adipisci
                      possimus animi, inventore doloremque quia soluta
                      cupiditate eveniet.
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col lg={4} md={12} xs={12}>
                <Row>
                  <Col md={3} xs={3} className="ColorIcon">
                    <RiEditCircleLine size={"50px"} />
                  </Col>
                  <Col md={9} xs={9}>
                    <h5>Para graph2 </h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laboriosam beatae repudiandae iure, ex atque praesentium
                      tempora veritatis illo facilis eius. Iure adipisci
                      possimus animi, inventore doloremque quia soluta
                      cupiditate eveniet.
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col lg={4} md={12} xs={12}>
                <Row>
                  <Col md={3} xs={3} className="ColorIcon">
                    <FiSettings size={"50px"} />
                  </Col>
                  <Col md={9} xs={9}>
                    <h5>Para graph3 </h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laboriosam beatae repudiandae iure, ex atque praesentium
                      tempora veritatis illo facilis eius. Iure adipisci
                      possimus animi, inventore doloremque quia soluta
                      cupiditate eveniet.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xxl={4} lg={12} md={12} xs={12} style={{ padding: "0px" }}>
            <div style={{ backgroundColor: "#ededed", maxWidth: "100%" }}>
              <h3 className="H-PERSONAL">PERSONAL INFO</h3>
              <Row className="RowPersonal">
                <Col xxl={3} xs={3}>
                  <h6>NAME</h6>
                </Col>
                <Col xxl={9} xs={9}>
                  Kiattisak Savetrungruang
                </Col>
              </Row>
              <Row className="RowPersonal">
                <Col xxl={3} xs={3}>
                  <h6>BIRTH DATE</h6>
                </Col>
                <Col xxl={9} xs={9}>
                  15/01/39
                </Col>
              </Row>
              <Row className="RowPersonal">
                <Col xxl={3} xs={3}>
                  <h6>ADDRESS</h6>
                </Col>
                <Col xxl={9} xs={9}>
                  64/1 BANKANG CHALERMPRAKIAT SARABURI 18000{" "}
                </Col>
              </Row>
              <Row className="RowPersonal">
                <Col xxl={3} xs={3}>
                  <h6>PHONE</h6>
                </Col>
                <Col xxl={9} xs={9}>
                  0645464991
                </Col>
              </Row>
              <Row className="RowPersonal" style={{ paddingBottom: "50px" }}>
                <Col xxl={3} xs={3}>
                  <h6>EMAIL</h6>
                </Col>
                <Col xxl={9} xs={9}>
                  RAINS4109@GMAIL.COM
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Content;
