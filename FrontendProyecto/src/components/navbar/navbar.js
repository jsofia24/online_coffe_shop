import React from "react";
import { Container, Nav, Navbar, Dropdown,  DropdownButton, Row} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserNinja} from "@fortawesome/free-solid-svg-icons";
import './navbar.css'
import Cookies from "universal-cookie/es6";

//import{fa-regular fa-user-gear} from "@fortawesome/free-solid-svg-icons";
//import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
//import {fa-regular fa-user-gear} from '@fortawesome/free-solid-svg-icons';

const cookies = new Cookies();
export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
    };
  }
  Logout(){
    cookies.remove('_s');
    window.location.reload();
  }
  render() {
    return (
      <Navbar fixed="top" id="navbar" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand id="navbar-title" href="/main">CAFE ONLINE <span id = "usuario-sub-branm"> </span> </Navbar.Brand>          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/tienda" >Tienda</Nav.Link>
              <Nav.Link href="#link">Pagina</Nav.Link>
              <Nav.Link href="#link">Nosotros</Nav.Link>
              <Nav.Link href="#link">Conctato</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
            <DropdownButton id="dropdown-basic-button" title="Usuario">
              <Dropdown.Header id="dropdown-header">
                <Row>
                  <FontAwesomeIcon icon={faUserNinja} />
                </Row>
                <Row>
                  #USUARIO#
                </Row>
                                  
              </Dropdown.Header>
                <Dropdown.Divider/>
              <Dropdown.Item onClick={() => this.Logout()}>Cerrar Sesion</Dropdown.Item>
              {/*<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  
}

