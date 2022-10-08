import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import "../../Css/Detail.css";
const Details_each_country = (props) => {
  const Data = Object.entries(props.value);

  const [Tag, setTag] = useState();
  const [Counts, setCounts] = useState(0);
  let No;
  const getData = () => {
    No = 0;
    return Data.map((keys, index) => {
      No += keys[1].length;

      return (
        <tr key={uuidv4()}>
          <td style={{ paddingLeft: "20px" }}>{index + 1}</td>
          <td style={{ paddingLeft: "20px" }}>{keys[0].toUpperCase()}</td>
          <td style={{ paddingLeft: "20px" }}>{keys[1].length}</td>
        </tr>
      );
    });
  };

  useEffect(() => {
    setTag(getData());
    setCounts(No);
  }, [setTag]);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <div>
              <h5 style={{ padding: "0px", marginTop: "30px" }}>
                รวมจำนวน ยี่ห้อรถทั้งหมด {Counts} ยี่ห้อ โดยเเบ่งได้ดังนี้
              </h5>
            </div>
            <div style={{ height: "400px", marginTop: "30px" }}>
              <Table striped bordered hover responsive>
                <thead>
                  <tr style={{ backgroundColor: "#10B49E" }}>
                    <th>ลำดับ</th>
                    <th>ประเทศ</th>
                    <th>จำนวน(ยี่ห้อรถ)</th>
                  </tr>
                  {Tag}
                </thead>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Details_each_country;
