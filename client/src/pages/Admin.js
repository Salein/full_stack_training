import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';

const Admin = () => {
    return (
        <Container className='d-flex flex-column'>
            <Button>Добавить тип</Button>
            <Button>Добавить бренд</Button>
            <Button>Добавить устройство</Button>
        </Container>
    );
};

export default Admin;