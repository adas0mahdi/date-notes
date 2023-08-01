import React from 'react'
import { Row, Col } from "react-bootstrap";


const Buttons = ({deletData, viewData}) => {
  return (
    <div>
        <Row className="justify-content-center my-2">
            <Col sm="8" className="d-flex justify-content-between">
              <button onClick={deletData} className="btn-style p-2">Delete All</button>
              <button onClick={viewData} className="btn-style p-2">View All</button>
            </Col>
          </Row>
    </div>
  )
}

export default Buttons