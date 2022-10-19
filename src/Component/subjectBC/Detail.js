import React, { useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import { Col, Container, Row, Table, Form } from "react-bootstrap";
import "../../Css/Detail.css";
import DetailList from "./DetailList";

const Detail_AB = (props) => {
  const Data = Object.entries(props.value);
  // const val = Object.values(props.value);
  const keys = Object.keys(props.value);

  const [Coutry, setCoutry] = useState(props.Country);
  const [Warning, setWarning] = useState();
  const getButton = () => {
    return keys.sort().map((keys, index) => {
      return (
        <option key={uuidv4()} className="" value={keys}>
          {keys}
        </option>
      );
    });
  };

  const getData = () => {
    let res = keys.find((items) => {
      return items.toUpperCase() === props.Country;
    });
    if (res === undefined) {
      setWarning(true);
    } else {
      setWarning(false);
    }

    return Data.map((keys) => {
      if (keys[0].toUpperCase() === Coutry.toUpperCase()) {
        return (
          <div key={uuidv4()} style={{ height: "400px", marginTop: "30px" }}>
            <div>
              <h5 style={{ padding: "0px", marginTop: "30px" }}>
                {keys[0].toUpperCase()} จำนวน {keys[1].length} ยี่ห้อ
              </h5>
            </div>
            <Table striped bordered hover responsive>
              <thead>
                <tr style={{ backgroundColor: "#10B49E" }}>
                  <th>ลำดับ</th>
                  <th>ยี่ห้อรถ</th>
                  <th>ประเทศ</th>
                </tr>

                {keys[1].map((data, i) => {
                  return <DetailList key={uuidv4()} val={data} no={i} />;
                })}
              </thead>
            </Table>
          </div>
        );
      }
    });
  };

  const [Tag, setTag] = useState();

  useEffect(() => {
    setTag(getData());
  }, [Coutry]);

  return (
    <>
      <Container>
        <Row>
          <Col>
            {Warning && (
              <h2 style={{ marginTop: "20px" }}>
                ไม่พบข้อมูลรถในประเทศ : {props.Country}
              </h2>
            )}
            {!Warning && (
              <Form.Select
                size="md"
                className="DdCoutry"
                value={Coutry}
                onChange={(e) => setCoutry(e.target.value)}
              >
                <option defaultValue={Coutry} value={Coutry}>
                  {Coutry}
                </option>
                {getButton()}
              </Form.Select>
            )}
          </Col>
        </Row>
        <Row>
          <Col>{Tag}</Col>
        </Row>
      </Container>
    </>
  );
};

export default Detail_AB;
