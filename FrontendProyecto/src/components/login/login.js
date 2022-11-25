import React from "react";
import axios from "axios";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import app from '../../app.json'
import './login.css';
import {isNull} from "util";
import Cookies from "universal-cookie";
import {calculaExtraccionSesion} from "../helper/helper";
import Loading from "../loading/loading";

const {APIHOST} =app;
const cookies = new Cookies();


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        loading: false,
        usuario: '',
        clave: '',
    };
  }
  iniciarSesion(){
    this.setState({loading: true});
    axios.post(`${APIHOST}/identificarCliente`, {
      usuario: this.state.usuario,
      clave: this.state.clave,
    })
    .then ((response) => {
      if (isNull (response.data.token)) {
          alert("Usuario y/o Contraseña Invalido");
      }
      else {
        cookies.set('_s', response.data.token, {
          path: '/',
          expires: calculaExtraccionSesion(),
        });
        this.props.history.push(("/clientes"));
                    window.location.reload();

      }
      this.setState({loading: false});
    })
    .catch((err) => {
      console.log(err);
      this.setState({loading: false});
    }); 
  }
  render() {
    return (
      <Container id="login-container">
        <Loading show={this.state.loading} />
        <Row>
          <Col>
            <Row>
              <h2> INICIAR SESION</h2>
            </Row>
            <Col 
                sm="12" 
                xs="12"
                md={{ span: 4, offset: 4}}
                lg={{ span: 4, offset: 4}}
                xl={{ span: 4, offset: 4}}>
              <Form>
                <Form.Group>
                  <Form.Label className="Form-Label">Usuario</Form.Label>
                  <Form.Control 
                   onChange={(e)=>
                   this.setState({ usuario: e.target.value})}/>                   
                </Form.Group>

                <Form.Group>
                  <Form.Label className="Form-Label">Contraseña</Form.Label>
                  <Form.Control type="password" 
                    onChange={(e)=>
                        this.setState({ clave: e.target.value})}/>                    
                </Form.Group>

                <Button
                  variant="primary"
                  onClick={()=>{
                    this.iniciarSesion();
                  }}
                >
                  Iniciar Sesion
                </Button>
              </Form>
            </Col>
          </Col>
        </Row>
      </Container>
    );
  }
}

