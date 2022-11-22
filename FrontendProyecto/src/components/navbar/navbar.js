import React from "react";
import { Container, Nav, Navbar, Dropdown,  DropdownButton, Row} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserNinja} from "@fortawesome/free-solid-svg-icons";
import './navbar.css'


export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
      <Navbar fixed="top" id="navbar" bg="primary" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Novios.com <span id = "usuario-sub-branm"> </span> </Navbar.Brand>          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Catalogo</Nav.Link>
              <Nav.Link href="../tienda/tienda.js">Nosotros</Nav.Link>
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
              <Dropdown.Item href="#/action-1">Cerrar Sesion</Dropdown.Item>
              {/*<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>

              <Row>
              <footer class="footer spad">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-3 col-md-6 col-sm-6">
                          <div class="footer__about">
                              <div class="footer__about__logo">
                                  <a href="#" class="logo">CAFE ONLINE</a>
                              </div>
                              <ul>
                                  <li>Ubicacion: Colombia</li>
                                  <li>Telefono: 1234567890</li>
                                  <li>Email: juanitovaldes@gmail.com</li>
                              </ul>
                          </div>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                          <div class="footer__widget">
                              <h6>Links de Utilidad</h6>
                              <ul>
                                  <li><a href="#">Sobre Nosotros</a></li>
                                  <li><a href={"/FrontendProyecto/src/components/tienda/tienda.js"}>Sobre nuestra Tienda</a></li>
                                  <li><a href="#">Compra Segura</a></li>
                                  <li><a href="#">Informacion de Entrega</a></li>
                                  <li><a href="#">Política de Privacidad</a></li>
                                  <li><a href="#">Our Sitemap</a></li>
                              </ul>
                              <ul>
                                  <li><a href="#">Quienes Somos</a></li>
                                  <li><a href="#">Nuestros Servicios</a></li>
                                  <li><a href="#">Projectos</a></li>
                                  <li><a href="#">Contacto</a></li>
                                  {/* <li><a href="#">Innovation</a></li>
                                  <li><a href="#">Testimonials</a></li> */}
                              </ul>
                          </div>
                      </div>
                      <div class="col-lg-4 col-md-12">
                          <div class="footer__widget">
                              <h6>Únete a nuestro boletín ahora</h6>
                              <p>Reciba actualizaciones por correo electrónico sobre nuestra últimas novedade y ofertas especiales..</p>
                              <form action="#">
                                  <input type="text" placeholder="Ingresa tu Correo" />
                                  <button type="submit" class="site-btn">Suscríbete</button>
                              </form>
                              <div class="footer__widget__social">
                                  <a href="#"><i class="fa fa-facebook"></i></a>
                                  <a href="#"><i class="fa fa-instagram"></i></a>
                                  <a href="#"><i class="fa fa-twitter"></i></a>
                                  <a href="#"><i class="fa fa-pinterest"></i></a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-lg-12">
                          <div class="footer__copyright">
                              <div class="footer__copyright__text"><p>
        Copyright &copy;2021 All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="#" target="_blank">Jassa</a>
      </p></div>
                              <div class="footer__copyright__payment"><img src="assets/img/payment-item.png" alt="" /></div>
                          </div>
                      </div>
                  </div>
              </div>
          </footer>
              </Row>
              
      </Container>
    );
  }

  
}

