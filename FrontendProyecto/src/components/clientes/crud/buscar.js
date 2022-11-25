import React from "react";
import { request } from "../../helper/helper";
import { Container, Row } from "react-bootstrap";
import "../clientes.css";
import DataGrid from "../../grid/grid";
import ConfirmationPrompts from "../../prompts/confirmation";
import Loading from "../../loading/loading";
import MessagePrompt from "../../prompts/message";

const columns = [
  {
    dataField: "id",
    text: "ID",
    hidden: true,
  },
  {
    dataField: "nombres",
    text: "Nombres",
  },
  {
    dataField: "apellidos",
    text: "Apellidos",
  },
  {
    dataField: "telefono",
    text: "Telefono",
  },
  {
    dataField: "documento",
    text: "Documento",
  },
  {
    dataField: "correo",
    text: "Correo Electronico",
  },
  {
    dataField: "clave",
    text: "Clave",
  },
  {
    dataField: "direccion",
    text: "Direccion",
  },
  {
    dataField: "metodoPago",
    text: "Metodo de Pago",
  },
  {
    dataField: "rol",
    text: "Rol",
  },
  {
    dataField: "lugarId",
    text: "Lugar Id",
  },
];

export default class ClientesBuscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      idCliente: null,
      message: {
        text: "",
        show: false,
      },
      confirmation: {
        title: "Eliminar cliente",
        text: "¿Desea eliminar el cliente?",
        show: false,
      },
    };
    this.onClickEditButton = this.onClickEditButton.bind(this);
    this.onClickDeleteButton = this.onClickDeleteButton.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }
  componentDidMount() {}
  onClickEditButton(row) {
    console.log(row)
    this.props.setIdCliente(row.id);
    this.props.changeTab("editar");
  }
  onClickDeleteButton(row) {
    this.setState({
      idCliente: row.id,
      confirmation: {
        ...this.state.confirmation,
        show: true,
      },
    });
  }

  onCancel() {
    this.setState({
      confirmation: {
        ...this.state.confirmation,
        show: false,
      },
    });
  }

  onConfirm() {
    this.setState(
      {
        confirmation: {
          ...this.state.confirmation,
          show: false,
        },
      },
      this.eliminarCliente()
    );
  }

  eliminarCliente() {
    this.setState({ loading: true });
    request
      .delete(`/clientes/${this.state.idCliente}`)
      .then((response) => {        
        this.setState({
          loading: false,
          message: {
            text: "Cliente Borrado",
            show: true,
          },
        });
        this.setState({ loading: false });
        this.reloadPage()
      })

      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  }

  reloadPage() {
    setTimeout(() => {
      window.location.reload();
    }, 2500);
  }

  render() {
    return (
      <Container id="clientes-buscar-container">
        <ConfirmationPrompts
          show={this.state.confirmation.show}
          title={this.state.confirmation.title}
          text={this.state.confirmation.text}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
        />
        <MessagePrompt
          text={this.state.message.text}
          show={this.state.message.show}
          duration={2500}
          onExited={this.onExitedMessage}
        />
        <Loading show={this.state.loading} />
        <Row>
          <h1>Buscar Cliente </h1>
        </Row>
        <Row>
          <DataGrid
            url="/clientes"
            columns={columns}
            showEditButton={true}
            showDeleteButton={true}
            onClickEditButton={this.onClickEditButton}
            onClickDeleteButton={this.onClickDeleteButton}
          />
        </Row>
      </Container>
    );
  }
}
