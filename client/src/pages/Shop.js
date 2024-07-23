import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import TypeBar from '../components/TypeBar';

const Shop = () => {
    return (
        <Container>
            <Row className='mt-3'>
                <Col md={3}>
                <TypeBar/>
                </Col>
                <Col md={9}>awd</Col>
            </Row>
        </Container>
    );
};

export default Shop;