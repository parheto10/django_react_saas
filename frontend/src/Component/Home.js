import React, {Component} from "react";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <Container>
                <h1>Accueil</h1>
                <p>
                    <Link to="/login/">Connexion</Link>
                </p>
                <p>
                    <Link to="/signup/">Inscription</Link>
                </p>
                <p>
                    <Link to="/dashboard/">Dashboard</Link>
                </p>
            </Container>
        );
    }
}

export default Home;