import React from 'react';
import { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';


const Home = () => {

    const [name, setName] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div>
            <h1>Home page</h1>

            <Container className="mt-5">
                <h1 className="text-center mb-4">🚀 React-Bootstrap Demo</h1>

                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                        <Form.Label>Enter your name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Your name here"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="mt-3">
                        Submit
                    </Button>
                </Form>
            </Container>

            {submitted &&
                <Card className="mt-4 text-center">
                    <Card.Body>
                        <Card.Title>Hello, {name}!</Card.Title>
                        <Card.Text>Welcome to React-Bootstrap 😄</Card.Text>
                    </Card.Body>
                </Card>


            }


        </div>
    );
}

export default Home;
