import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../login/login";
import Inicio from "../index/index";
import PrivateRouter from "../auth/privaterouter";
import Clientes from "../clientes/inicioc";
import Empleados from "../empleados/inicioe";
import Main from "../MainPage";
import Tienda from "../TiendaPage"


export default function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/login"]} component={Login} />        
        <Route exact path={["/" ]} component={Inicio} />
        <Route exact path={["/index"]} component={ Inicio } />
        <Route exact path={["/main"]} component={ Main } />
        <Route exact path={["/tienda"]} component={ Tienda } />
        <PrivateRouter exact path={[ "/empleados" ]} component={ Empleados } />
        <PrivateRouter exact path={[ "/clientes" ]} component={ Clientes } />
        <Route path={"*"} component={() => (
            <h1 style={{ marginTop: 300 }}>
              404
              <br />
              Página no encontrada
            </h1>
          )}
        />
      </Switch>
    </Router>
  );
}
