import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Container from "./components/Container";
import CountryDetail from "./components/CountryDetail";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container>
          <div className="row">
            <div className="col-5">
              <div className="list-group">
                <Link
                  className="list-group-item list-group-item-action"
                  to="/ABW"
                >
                  <span>🇦🇼</span> Aruba
                </Link>
                <Link
                  className="list-group-item list-group-item-action"
                  to="/AFG"
                >
                  🇦🇫 Afghanistan
                </Link>
                <Link
                  className="list-group-item list-group-item-action"
                  to="/AGO"
                >
                  🇦🇴 Angola
                </Link>
                <Link
                  className="list-group-item list-group-item-action"
                  to="/AIA"
                >
                  🇦🇮 Anguilla
                </Link>
                <Link
                  className="list-group-item list-group-item-action"
                  to="/ALA"
                >
                  🇦🇽 Åland Islands
                </Link>
                <Link
                  className="list-group-item list-group-item-action"
                  to="/ALB"
                >
                  🇦🇱 Albania
                </Link>
                <Link
                  className="list-group-item list-group-item-action"
                  to="/AND"
                >
                  🇦🇩 Andorra
                </Link>
                <Link
                  className="list-group-item list-group-item-action"
                  to="/ARE"
                >
                  🇦🇪 United Arab Emirates
                </Link>
                <Link
                  className="list-group-item list-group-item-action"
                  to="/ARG"
                >
                  🇦🇷 Argentina
                </Link>
                <Link
                  className="list-group-item list-group-item-action"
                  to="/ARM"
                >
                  🇦🇲 Armenia
                </Link>
                <Link
                  className="list-group-item list-group-item-action"
                  to="/ASM"
                >
                  🇦🇸 American Samoa
                </Link>
                <Link
                  className="list-group-item list-group-item-action"
                  to="/ATA"
                >
                  🇦🇶 Antarctica
                </Link>
                <Link
                  className="list-group-item list-group-item-action"
                  to="/FLK"
                >
                  🇫🇰 Falkland Islands
                </Link>
                <Link
                  className="list-group-item list-group-item-action"
                  to="/FRA"
                >
                  🇫🇷 France
                </Link>
                <Link
                  className="list-group-item list-group-item-action"
                  to="/ZWE"
                >
                  🇿🇼 Zimbabwe
                </Link>
              </div>
            </div>
            <div className="col-7">
              <Switch>
                <Route exact path="/:id" component={CountryDetail} />
              </Switch>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
