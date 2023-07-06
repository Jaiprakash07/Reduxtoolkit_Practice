import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

function Home() {
    return (
        <>
            <div className="pt-5">

                <Container>
                    <Row>
                        <Col className="text-center">
                            <Card className='mx-auto mb-4' style={{ width: '22rem' }}>
                                <Card.Img variant="top" src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/e92395cd83e4574aa720957d/pexelsphoto3691336.jpeg" style={{width: '100%', height: '300px', objectFit: 'cover'}} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="text-center">
                            <Card className='mx-auto mb-4' style={{ width: '22rem' }}>
                            <Card.Img variant="top" src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/e92395cd83e4574aa720957d/pexelsphoto3691336.jpeg" style={{width: '100%', height: '300px', objectFit: 'cover'}} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="text-center">
                            <Card className='mx-auto mb-4' style={{ width: '22rem' }}>
                            <Card.Img variant="top" src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/e92395cd83e4574aa720957d/pexelsphoto3691336.jpeg" style={{width: '100%', height: '300px', objectFit: 'cover'}} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="text-center">
                            <Card className='mx-auto mb-4' style={{ width: '22rem' }}>
                            <Card.Img variant="top" src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/e92395cd83e4574aa720957d/pexelsphoto3691336.jpeg" style={{width: '100%', height: '300px', objectFit: 'cover'}} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="text-center">
                            <Card className='mx-auto mb-4' style={{ width: '22rem' }}>
                            <Card.Img variant="top" src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/e92395cd83e4574aa720957d/pexelsphoto3691336.jpeg" style={{width: '100%', height: '300px', objectFit: 'cover'}} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Home;