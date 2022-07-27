import React, { useEffect, useState} from "react";
import {  IWork } from "./types/types";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WorkLisn from "./components/WorkLisn";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";




const App: React.FC = () => {
  const [works, setWorks] = useState<IWork[]>([{
    id:1 , title: "погулять" ,complete: false }
  ])
  const [title, setTitle] = useState<string>("")
  const [filtered, setFiltered] = useState(works)

  useEffect(() => {
    setFiltered(works)
  }, [works])

  const AddNewWorks = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (title !== "") {
      const newWork = {
        id: Date.now(),
        title: title ,
        complete: false
      }
      setWorks([...works, newWork])
      setTitle("")
    }
  }

  const updateWork = (id: IWork['id']) => {
    const update = filtered.map((work) => {
        if (work.id === id) { 
          return {
            ...work, 
            complete: !work.complete
          }
        }
        return work
      }) 
      setWorks(update)
  }

  const workFilter = (complete:string| boolean) => {
    if(complete === 'all') {
      setFiltered(works)
      setWorks(works)
    }  
      let newWork = [...filtered].filter(work => work.complete === complete)
      setFiltered(newWork)
  }

  return (
    <>
    <Container fluid="sm">
    <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={AddNewWorks}>
            <Form.Group className="mb-3">
            <Form.Control value={title} onChange={e => setTitle(e.target.value)}/>
            </Form.Group>
            <ButtonGroup>
              <Button onClick={() => workFilter('all')}>Все</Button>
              <Button onClick={() => workFilter(false)}>Не выполненные</Button>
              <Button onClick={() => workFilter(true)}>Выполненные</Button>
            </ButtonGroup>
          </Form>
          {filtered.map((work, index) => (
            <WorkLisn
              updateWork={updateWork}
              key={work.id}
              works={work}
            />
          ))}
          
        </Col>
    </Row>
    </Container>

    </>
  );
}

export default App;
