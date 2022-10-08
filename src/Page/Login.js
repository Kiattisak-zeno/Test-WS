import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Link, useNavigate } from "react-router-dom";
import Content from "../Component/Content";
import Headder from "../Component/Headder";
import { validEmail, validPassword } from "../Component/Regex";
import { useUserContext } from "../Data/UserContext";
import login from "../Image/login.png";
const Login = () => {
  let history = useNavigate();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const [emailNotFound, setEmailNotFound] = useState(false);
  const [pwdNotFou, setPwdNotFound] = useState(false);

  const { user, userAction } = useUserContext();
  const [showWrnLogin, setShowWrnLogin] = useState(false);
  const handleClose_Login = () => {
    setShowWrnLogin(false);
    history("/ShowData");
  };
  const handleShow_Login = () => {
    setShow(false);
    setShowWrnLogin(true);
  };

  const handleClose = () => {
    setShow(false);
    history("/");
  };

  const handleShow = () => setShow(true);

  useEffect(() => {
    handleShow();
  }, []);

  const validate = () => {
    let chkE = true;
    let chkP = true;
    if (!validEmail.test(email)) {
      setEmailErr(true);
      chkE = false;
    } else {
      setEmailErr(false);
      chkE = true;
    }
    if (!validPassword.test(password)) {
      setPwdError(true);
      chkP = false;
    } else {
      setPwdError(false);
      chkP = true;
    }

    ///User
    if (chkE && chkP) FuncUser();
  };

  const FuncUser = () => {
    const userArr = user.items;
    const getUser = userArr.find((chkEmail) => chkEmail.Email === email);

    if (getUser === undefined) {
      setEmailNotFound(true);
    } else {
      setEmailNotFound(false);

      ////check password
      if (getUser.Password === password) {
        userAction.LoginUser(getUser.Email); //เก็บ Email ที่ใช้ Login ในขณะนี้
        userAction.setUserStatus(true); ///เปลี่ยนสถานะการ login

        setPwdNotFound(false); ///ปิด การเเเจ้งเตือน Password          setShow(false); ///ปิดหน้าตอ

        handleShow_Login();
      } else {
        setPwdNotFound(true);
      }
    }
  };

  return (
    <>
      <Headder />
      <Content />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            {emailErr && (
              <p style={{ color: "red", fontSize: "13px" }}>
                Your email is invalid according to the email Format
                name@example.com
              </p>
            )}
            {emailNotFound && (
              <p style={{ color: "red", fontSize: "13px" }}>Email Not Found.</p>
            )}
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                maxLength="8"
              />
            </Form.Group>
            {pwdError && (
              <p style={{ color: "red", fontSize: "13px" }}>
                Password must be 8 characters long <br />
                contain one uppercase and one lowercase <br />
                and one number character.
              </p>
            )}
            {pwdNotFou && (
              <p style={{ color: "red", fontSize: "13px" }}>
                Password Not Found.
              </p>
            )}
          </Form>
          <Form.Text
            className="text-muted text_title"
            style={{ textAlign: "center" }}
          >
            Don't have an account?{" "}
            <Link
              to="/SignUp"
              style={{ margin: "10px", fontSize: "16px" }}
              className="responsive"
            >
              SignUp
            </Link>
          </Form.Text>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={validate}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showWrnLogin} onHide={handleClose_Login} size="sm">
        <Modal.Header closeButton></Modal.Header>
        <Container>
          <Row>
            <Col sm={5} xs={5} style={{ textAlign: "right" }}>
              <img src={login} alt="login" />
            </Col>
            <Col style={{ textAlign: "left" }}>
              <h3>Login Successful !!</h3>
            </Col>
          </Row>
        </Container>
      </Modal>
    </>
  );
};

export default Login;
