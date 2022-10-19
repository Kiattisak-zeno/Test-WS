import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useNavigate } from "react-router-dom";
import Headder from "../Component/Headder";
import { useUserContext } from "../Data/UserContext";
import axios from "axios";
import { URL_GITHUP } from "../Data/Url";
import Detail from "../Component/subjectBCD/Detail";
import { v4 as uuidv4 } from "uuid";
import "../Css/ShowData.css";
import DetailsEachCountry from "../Component/subjectA/DetailsEachCountry";
const ShowData = () => {
  const initialData = {
    items: [],
  };
  let history = useNavigate();
  const { userStatus } = useUserContext();
  const [Data, setData] = useState(initialData);
  const [HTMLTag, setHTMLTag] = useState();

  useEffect(() => {
    axios
      .get(URL_GITHUP)
      .then((res) => {
        let dataApi = res.data;
        const regex1 = '?({"Makes":';
        const regex2 = "});";
        dataApi = dataApi.replaceAll(regex1, "");
        dataApi = dataApi.replaceAll(regex2, "");
        dataApi = JSON.parse(dataApi);

        SetDataApi(dataApi);
      })
      .catch((error) => {
        console.log(error);
      });
    !userStatus && history("/Login");
  }, []);

  const SetDataApi = (Datas) => {
    let result = Datas.reduce((r, a) => {
      r[a.make_country] = r[a.make_country] || [];
      r[a.make_country].push(a);
      return r;
    }, Object.create(null));

    setData(result); /// Set ที่กรอกเเล้ว
  };

  const GetDetail_AD = (Country) => {
    let dataTag = (
      <DetailsEachCountry key={uuidv4()} value={Data} Country={Country} />
    );
    setHTMLTag(dataTag);
  };

  const GetDetail_B = () => {
    let dataTag = <Detail key={uuidv4()} value={Data} Country={"AUSTRALIA"} />;
    setHTMLTag(dataTag);
  };

  const GetDetail_C = (Country) => {
    let dataTag = <Detail key={uuidv4()} value={Data} Country={Country} />;
    setHTMLTag(dataTag);
  };

  return (
    <>
      <Headder />
      <Container style={{ padding: "0px" }}>
        <Row>
          <Col lg={3}>
            <div style={{ marginTop: "30px" }} className="DivSuject">
              <ul>
                <li onClick={() => GetDetail_AD()}>
                  a. แต่ละประเทศผลิตรถกี่ยี่ห้อ
                </li>
                <li onClick={() => GetDetail_B()}>
                  b. แต่ละประเทศมีรถยี่ห้ออะไรบ้าง
                </li>
                <li onClick={() => GetDetail_C("USA")}>
                  c. USA ผลิตรถกี่ยี่ห้อ ยี่ห้ออะไรบ้าง
                </li>
                <li onClick={() => GetDetail_AD("EUROPE")}>
                  d. รถยุโรป มีกี่ยี่ห้อ ยี่ห้ออะไรบ้าง
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={8} style={{ height: "400px" }}>
            {HTMLTag}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ShowData;
