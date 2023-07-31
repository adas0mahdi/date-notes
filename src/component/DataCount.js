import React from 'react'
import { Row, Col } from 'react-bootstrap';



const DataCount = (person) => {
  return (
  <Row className='justify-content-center my-2'>
    <Col sm='8' className='' >
      You Have {person.length} Meetings Today!
    </Col>
  </Row>
  )
}

export default DataCount