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

class Signup extends Component {
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

  onSignupClick = () => {
    const userData = {
      username: this.state.username,
      password: this.state.password
    };
    console.log("Sign up " + userData.username + " " + userData.password);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md="4">
            <h1>Inscription</h1>
            <Form>
              <Form.Group controlId="usernameId">
                <Form.Label>Nom Utilisateur</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Nom Utilisateur"
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
                  placeholder="Mot de Passe"
                  value={this.password}
                  onChange={this.onChange}
                />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
            </Form>
            <Button
              color="primary"
              className="mt-3"
              onClick={this.onSignupClick}
            >
                Inscription
            </Button>
            <p className="mt-2">
              Avez-vous un Compte ? <Link to="/login">Connexion</Link>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Signup;
