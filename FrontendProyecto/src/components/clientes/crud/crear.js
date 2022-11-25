import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import "../clientes.css";
import { request } from "../../helper/helper";
import Loading from "../../loading/loading";
import MessagePrompt from "../../prompts/message";

export default class ClientesCrear extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rediret: false,
      message: {
        text: "",
        show: false,
      },
      loading: false,
      cliente: {
        nombres: "",
        apellidos: "",
        telefono: "",
        documento: "",
        correo: "",
        clave: "",
        direccion: "",
        metodoPago: [],
        rol: "",
        lugarId: "",
      },
    };
    this.onExitedMessage = this.onExitedMessage.bind(this);
  }
  setValue(inicioc, value) {
    this.setState({
      cliente: {
        ...this.state.cliente,
        [inicioc]: value,
      },
    });
  }
  guardarClientes() {
    this.setState({ loading: true });
    request
      .post("/clientes", this.state.cliente)
      .then((response) => {
        console.log(response);
        if (response.data.id) {
          this.setState({
            rediret: true,
            message: {
              text: "CLIENTE GUARDADO",
              show: true,
            },
          });
        }
        this.setState({ loading: false });
      })
      .catch((err) => {
        // console.error(err);
        this.setState({
          rediret: false,
          message: {
            text: "Campos Incompletos",
            show: true,
          },
        });
        this.setState({ loading: true });
      });
  }

  onExitedMessage() {
    if (this.state.rediret) this.props.changeTab("buscar");
  }

  render() {
    return (
      <Container id="clientes-crear-container">
        <MessagePrompt
          text={this.state.message.text}
          show={this.state.message.show}
          duration={2500}
          onExited={this.onExitedMessage}
        />
        <Loading show={this.state.Loading} />
        <Row>
          <h1>Crear clientes</h1>
        </Row>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Nombres*</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("nombres", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Apellidos*</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("apellidos", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Numero de Teléfono*</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("telefono", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Documento*</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("documento", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo electrónico*</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("correo", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Clave</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("clave", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("direccion", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Metodo de Pago</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("metodoPago", [e.target.value])}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Rol</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("rol", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>lugar Id</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("lugarId", e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              onClick={() => console.log(this.guardarClientes())}
            >
              Guardar cliente
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
