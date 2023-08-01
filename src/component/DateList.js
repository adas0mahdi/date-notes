import React from "react";
import { Row, Col } from "react-bootstrap";


const DateList = ({person}) => {
  return (
    <div>
      <Row className="justify-content-center">
        <Col sm="8" className="">
          <div className="rectangle p-3">
            {person.length ? (
              // i use map so it will become like circle the dat will repeat
              person.map((item) => {
                return (
                  <div key={item.id} className="d-flex border-bottom mx-2 my-2">
                    <img className="img-avatar" src={item.img} alt="face" />
                    <div className="px-2">
                      <p className="d-inline fs-5">{item.name}</p>
                      <p className="fs-6">{item.date}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <h2 className="p-5 text-center">There Nothing To Do Today!</h2>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DateList;
