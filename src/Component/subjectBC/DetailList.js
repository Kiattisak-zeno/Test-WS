import React from "react";

const Detail_List = (props) => {
  return (
    <>
      <tr>
        <td style={{ paddingLeft: "20px" }}>{props.no + 1}</td>
        <td style={{ paddingLeft: "20px" }}>{props.val.make_display}</td>
        <td style={{ paddingLeft: "20px" }}>{props.val.make_country}</td>
      </tr>
    </>
  );
};

export default Detail_List;
