import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FiFlag } from "react-icons/fi";
import { FaHeadphonesAlt, FaPenNib } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BiMap } from "react-icons/bi";
import { MdFolderOpen, MdOutlineSaveAlt } from "react-icons/md";
import { BsFillLayersFill } from "react-icons/bs";

import Img_head from "../Image/hedderImg.jpg";
import "../Css/headder.css";
import { Link } from "react-router-dom";
import { useUserContext } from "../Data/UserContext";
import "../Css/Warning.css";
const Headder = () => {
  const { userLogin } = useUserContext();
  return (
    <>
      <nav>
        <div className="divTop">
          {userLogin}

          <Link to="/Login">
            <button
              style={{
                backgroundColor: "#5b5b5b",
                color: "#d4d4d4",
              }}
              className="btnTop"
            >
              Login
            </button>
          </Link>
          <Link to="/Signup">
            <button className="btnTop">Signup</button>
          </Link>
        </div>
        <Container style={{ maxWidth: "100%", margin: "0px" }}>
          <Row>
            <Col lg={3} md={4} style={{ padding: "0px" }}>
              <img src={Img_head} alt="imgTop" width="100%" height="100%" />
            </Col>
            <Col lg={9} md={8}>
              <Row>
                <Col
                  md={10}
                  xs={10}
                  style={{
                    padding: "3%",
                    backgroundColor: "#454545",
                    color: "#d0d0d0",
                  }}
                >
                  <h2>SAMUEL ANDERSON</h2>
                </Col>
                <Col
                  className="Colbth"
                  md={2}
                  xs={2}
                  style={{
                    padding: "3%",
                    backgroundColor: "#3c3c3c",
                    color: "#9a9a9a",
                  }}
                >
                  <MdOutlineSaveAlt size={"30px"} />
                </Col>
              </Row>
              <Row>
                <Col
                  md={10}
                  xs={10}
                  style={{
                    padding: "3%",
                    backgroundColor: "#353535",
                    color: "#b5b5b5",
                  }}
                >
                  <h6>THE EXPERIENCED UI/IX DESIGNER</h6>
                </Col>
                <Col
                  className="Colbth"
                  md={2}
                  xs={2}
                  style={{
                    padding: "3%",
                    backgroundColor: "#313131",
                    color: "#a0a09f",
                  }}
                >
                  <BsFillLayersFill size={"30px"} />
                </Col>
              </Row>

              <Row>
                <Col md={2} xs={6} className="Colbth">
                  <Link to="/">
                    <div
                      className="btnTopHeader"
                      style={{ backgroundColor: "#10b49e" }}
                    >
                      <FiFlag size={"30px"} /> <br /> HOME
                    </div>
                  </Link>
                </Col>
                <Col md={2} xs={6} className="Colbth">
                  <Link to="/ShowData">
                    <div
                      className="btnTopHeader"
                      style={{ backgroundColor: "#008fd9" }}
                    >
                      <MdFolderOpen size={"30px"} /> <br />
                      Data
                    </div>
                  </Link>
                </Col>
                <Col md={2} xs={6} className="Colbth">
                  <div
                    className="btnTopHeader"
                    style={{ backgroundColor: "#a64eb2" }}
                  >
                    <CgProfile size={"30px"} /> <br />
                    PORTFOLIO
                  </div>
                </Col>
                <Col md={2} xs={6} className="Colbth">
                  <div
                    className="btnTopHeader"
                    style={{ backgroundColor: "#fe730d" }}
                  >
                    <BiMap size={"30px"} /> <br />
                    CONTACTS
                  </div>
                </Col>
                <Col md={2} xs={6} className="Colbth">
                  <div
                    className="btnTopHeader"
                    style={{ backgroundColor: "#ff4233" }}
                  >
                    <FaHeadphonesAlt size={"30px"} /> <br />
                    FEEDBACK
                  </div>
                </Col>
                <Col md={2} xs={6} className="Colbth">
                  <div
                    className="btnTopHeader"
                    style={{ backgroundColor: "#e79f00" }}
                  >
                    <FaPenNib size={"30px"} /> <br />
                    BLOG
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </nav>

      {/* <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img alt="" src="/logo.svg" width="30" height="30" />
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar> */}
    </>
  );
};

export default Headder;
