import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { useDispatch } from "react-redux";
import { addcart} from '../store/CartSlice';

function Product() {
    const dispatch = useDispatch();
    const [product, setproduct] = useState([]);

    useEffect(() => {
        async function Call_Api() {
            let response = await fetch('https://api.escuelajs.co/api/v1/products')
            let result = await response.json()
            // console.log(result);
            setproduct(result)
        }

        Call_Api();
    }, []) 

    function addtocart(product) {
        dispatch(addcart(product))
    }

    console.log(product)
    return (
        <>
            <div className="d-flex justify-content-evenly flex-wrap overflow-hidden">
                {product.map((product) => (
                    <div className="m-3">
                        <Container classname='mx-0 px-0' key={product.id} style={{ width: '100%' }}>
                            <Row>
                                <Col className="text-center">
                                    <Card className='mx-auto mb-4' style={{ width: '22rem' }}>
                                        <Card.Img variant="top" src={`${product.images[1]}`} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                                        <Card.Body>
                                            <Card.Title>{product.title}</Card.Title>
                                            <Card.Text className='mb-1' style={{ height: '5rem' }}>
                                                {product.description}
                                            </Card.Text>
                                        </Card.Body>
                                        <div className="d-inline m-2">
                                            <button className="px-3 p-1" onClick={() => addtocart(product)}>Add to Cart</button>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Product;