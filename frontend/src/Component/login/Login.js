import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl
} from "react-bootstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLoginClick = () => {
    const userData = {
      username: this.state.username,
      password: this.state.password
    };
    console.log("Login " + userData.username + " " + userData.password);
  };
  render() {
    return (
      <Container>
        <Row>
          <Col md="4">
            <h1>Connexion</h1>
            <Form>
              <Form.Group controlId="usernameId">
                <Form.Label>Nom Utilisateur</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="nom utilisateur"
                  value={this.state.username}
                  onChange={this.onChange}
                />
                <FormControl.Feedback type="invalid"></FormControl.Feedback>
              </Form.Group>

              <Form.Group controlId="passwordId">
                <Form.Label>Mot de Passe</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="mot de passe"
                  value={this.state.password}
                  onChange={this.onChange}
                />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
            </Form>
            <Button className="mt-3" color="primary" onClick={this.onLoginClick}>Connexion</Button>
            <p className="mt-2">pas de Compte ? <Link to="/signup">Insription</Link>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;