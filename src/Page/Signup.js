import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import Content from "../Component/Content";
import Headder from "../Component/Headder";
import { validEmail, validPassword } from "../Component/Regex";
import { useUserContext } from "../Data/UserContext";
import signup from "../Image/signup.png";

const Signup = () => {
  let history = useNavigate();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);

  const { userAction } = useUserContext();

  const [showWrnSignup, setShowWrnSignup] = useState(false);
  const handleClose_Signup = () => {
    setShowWrnSignup(false);
    history("/");
  };
  const handleShow_Signup = () => {
    setShow(false);
    setShowWrnSignup(true);
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
    userAction.addUser({ Email: email, Password: password });
    handleShow_Signup();
  };

  return (
    <>
      <Headder />
      <Content />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Signup</Modal.Title>
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={validate}>
            Signup
          </Button>
        </Modal.Footer>
      </Modal>

      {/* //warning */}
      <Modal show={showWrnSignup} onHide={handleClose_Signup} size="sm">
        <Modal.Header closeButton></Modal.Header>
        <Container>
          <Row>
            <Col sm={5} xs={5} style={{ textAlign: "right" }}>
              <img src={signup} alt="signup" />
            </Col>
            <Col style={{ textAlign: "left" }}>
              <h3>Signup Successful !!</h3>
            </Col>
          </Row>
        </Container>
      </Modal>
    </>
  );
};

export default Signup;
