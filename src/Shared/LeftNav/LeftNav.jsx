import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import first from '../../assets/1.png'
import second from '../../assets/2.png'
import third from '../../assets/3.png'

const LeftNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div className='position'>
            <h4 className='mb-4 mt-5 fw-bold'>All Category</h4>
            <div className='position-sticky'>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/categories/${category.id}`} className='text-decoration-none text-black ps-5 fs-5 fw-semibold'>{category.name}</Link>
                    </p>)
                }
            </div>
            <div className='mt-5 position-sticky'>
                <Row xs={1} className="g-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={first} />
                            <Card.Body>
                                <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={second} />
                            <Card.Body>
                                <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={third} />
                            <Card.Body>
                                <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default LeftNav;