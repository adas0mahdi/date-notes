import { Container, Button , Row, Col } from 'react-bootstrap';
import {person} from './data.js';
import DataCount from './component/DataCount.js';

function App() {

  return (
    <> 
    <div className='front color-body'>
      <Container className='py-5'>
        <DataCount person={person} />
        <Row className='justify-content-center'>
          <Col sm='8' className=''>
            <div className='rectangle p-3' >
              {person.length ? (person.map((item) => {
                  return(       
                  <div className='d-flex border-bottom mx-2 my-2'>
                    <img className='img-avatar' src={item.img} alt="face" />
                    <div className='px-2'>
                      <p className='d-inline fs-5'>{item.name}</p>
                      <p className='fs-6'>{item.date}</p>
                    </div>
                  </div>
                  )
              })) : <h2 className='p-5 text-center'>There Nothing To Do Today!</h2>}
            </div>
          </Col>
        </Row>
        <Row className='justify-content-center my-2'>
          <Col sm='8' className='d-flex justify-content-between'>
            <button className='btn-style p-2'>Delete All</button>
            <button className='btn-style p-2'>View All</button>
          </Col>
        </Row>



      </Container>
    </div>
    </>
  );
}

export default App;
