import React from 'react';
import { Container, Row } from 'react-bootstrap';

export default class Inicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() { 
        return (
            <Container>
            <Row>
            <center>
            <h1 style={{marginTop: 200}}>BIENVENIDOS A JUANITO VALDES</h1>
            
            <img src="assets/img/junitoValdesLogo.jpg" alt='Logo' width="200px" />
            <h3> </h3>
            <a href="/main">Ingresa a la tienda</a>
            </center>
            </Row>
            </Container> 
         );
    }
}
