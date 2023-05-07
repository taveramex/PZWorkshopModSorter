import './App.css'
import Navbar from './components/common/Navbar'
import SpotLight from './components/Spotligth'
import { Col, Container, Row } from 'react-bootstrap'

function App() {

  return (
    <Container fluid>
      <Row>
        <Col sm={2}><Navbar /></Col>
        <Col sm={10}><SpotLight /></Col>
      </Row>
    </Container>
  )
}

export default App
