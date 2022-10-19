import React, { useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import { Col, Container, Row, Table, Form } from "react-bootstrap";
import "../../Css/Detail.css";
import Detail_List from "../subjectBC/DetailList";
import { List_Country_EU } from "../../Data/Eu";

const DetailEU = (props) => {
  const Data = Object.entries(props.value);

  const [Coutry, setCoutry] = useState(props.Country);
  const [Counts, setCounts] = useState(0);

  let items = [];
  const getData = () => {
    Data.map((keys, index) => {
      return List_Country_EU.map((keysEU, indexEU) => {
        if (keys[0].toUpperCase() === keysEU.toUpperCase()) {
          return keys[1].map((data, i) => {
            items.push(data);
          });
        }
      });
    });

    setCounts(items.length);
    return items.map((data, index) => {
      return <Detail_List key={uuidv4()} val={data} no={index} />;
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
            <h5 style={{ padding: "0px", marginTop: "30px" }}>
              ยุโรปมีรถทั้งหมด {Counts} ยี่ห้อ ดังนี้
            </h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <div key={uuidv4()} style={{ height: "400px", marginTop: "30px" }}>
              <Table striped bordered hover responsive>
                <thead>
                  <tr style={{ backgroundColor: "#10B49E" }}>
                    <th>ลำดับ</th>
                    <th>ยี่ห้อรถ</th>
                    <th>ประเทศ</th>
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

export default DetailEU;
