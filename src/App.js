import { Container } from "react-bootstrap";
import { person } from "./data.js";
import { useEffect, useState } from 'react';
import DataCount from "./component/DataCount.js";
import DateList from "./component/DateList.js";
import Buttons from "./component/Buttons.js";


function App() {

  const [personData, setPersonData] = useState(person)
  // to delete data
  const onDelet=()=>{
    setPersonData([])
  }
  // to full the data
  const onView=()=>{
    setPersonData(person)
  }
  // this will make the data empty when i open the project
  useEffect(() =>{
    setPersonData([])
  }, [])

  return (
    <>
      <div className="front color-body">
        <Container className="py-5">
          <DataCount person={personData} />
          <DateList person={personData} />
          <Buttons deletData={onDelet} viewData={onView}/>
        </Container>
      </div>
    </>
  );
}

export default App;
