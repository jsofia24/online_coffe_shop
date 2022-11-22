import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "../footer/footer";
// import Inicio from "../index/index";
// import PrivateRouter from "../auth/privaterouter";
// import empleados from "../empleados/inicioe";
import Tienda from "../tienda/tienda";


export default function AppRoutes() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path={["/login"]} component={Login} />         */}
        {/* <Route exact path={["/" ]} component={Inicio} /> */}
        {/* <Route exact path={["/index"]} component={ Inicio } /> */}
        <Route exact path={["/foter"]} component={ Footer } />
        <Route exact path={["/tienda"]} component={ Tienda } />
        {/* <PrivateRouter exact path={[ "/empleados" ]} component={ empleados } /> */}
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
