import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import "../clientes.css";
import { request } from "../../helper/helper";
import Loading from "../../loading/loading";
import MessagePrompt from "../../prompts/message";
import ConfirmationPrompts from "../../prompts/confirmation";

export default class ClientesEditar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idCliente: this.props.getIdCliente(),
      rediret: false,
      message: {
        text: "",
        show: false,
      },
      confirmation: {
        title: "Modificar Cliente",
        text: "¿Desea modificar el cliente?",
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
        metodoPago: " ",
        rol: "",
        lugarId: "",
      },
    };
    this.onExitedMessage = this.onExitedMessage.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }

  componentDidMount() {
    this.getCliente();
  }

  getCliente() {
    this.setState({ loading: true });
    request
      .get(`/clientes/${this.state.idCliente}`)
      .then((response) => {
        this.setState({
          cliente: response.data,
          loading: false,
        });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
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
      .put(`/clientes/${this.state.idCliente}`, this.state.cliente)
      .then((response) => {
        console.log(response);
        
          this.props.changeTab("buscar");
        
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

  onCancel() {
    this.setState({
      confirmation: {
        ...this.state.confirmation,
        show: false,
      },
    })
  }
  onConfirm() {
    this.setState({
      confirmation: {
         ...this.state.confirmation,
        show: false,
      },
    },
    this.guardarClientes()
    );
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
        <ConfirmationPrompts
          show={this.state.confirmation.show}
          title={this.state.confirmation.title}
          text={this.state.confirmation.text}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
        />
        <Loading show={this.state.Loading} />
        <Row>
          <h1>Editar clientes</h1>
        </Row>
        <Row>
  <Form>
    <Form.Group className="mb-3" controlId="formBasic">
      <Form.Label>Nombres</Form.Label>
      <Form.Control
        value={this.state.cliente.nombres}
        onChange={(e) => this.setValue("nombres", e.target.value)}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasic">
      <Form.Label>Apellidos</Form.Label>
      <Form.Control
        value={this.state.cliente.apelldos}
        onChange={(e) => this.setValue("apellidos", e.target.value)}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasic">
      <Form.Label>Numero de Teléfono</Form.Label>
      <Form.Control
        value={this.state.cliente.telefono}
        onChange={(e) => this.setValue("telefono", e.target.value)}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasic">
      <Form.Label>Documento</Form.Label>
      <Form.Control
        value={this.state.cliente.documento}
        onChange={(e) => this.setValue("documento", e.target.value)}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Correo electrónico</Form.Label>
      <Form.Control
        value={this.state.cliente.correo}
        onChange={(e) => this.setValue("correo", e.target.value)}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasic">
      <Form.Label>Clave</Form.Label>
      <Form.Control
        value={this.state.cliente.clave}
        onChange={(e) => this.setValue("clave", e.target.value)}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasic">
      <Form.Label>Dirección</Form.Label>
      <Form.Control
        value={this.state.cliente.direccion}
        onChange={(e) => this.setValue("direccion", e.target.value)}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasic">
      <Form.Label>Metodo de Pago</Form.Label>
      <Form.Control
        value={this.state.cliente.metodoPago}
        onChange={(e) => this.setValue("metodoPago", e.target.value)}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasic">
      <Form.Label>Rol</Form.Label>
      <Form.Control
        value={this.state.cliente.rol}
        onChange={(e) => this.setValue("rol", e.target.value)}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasic">
      <Form.Label>lugar Id</Form.Label>
      <Form.Control
        value={this.state.cliente.lugarId}
        onChange={(e) => this.setValue("lugarId", e.target.value)}
      />
    </Form.Group>
    <Button
              variant="primary"
              onClick={() =>
                this.setState({
                  confirmation: { ...this.state.confirmation, show: true },
                })
              }
              // onClick={() => console.log(this.guardarEmpleados())}
            >
              Guardar editar cliente
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}