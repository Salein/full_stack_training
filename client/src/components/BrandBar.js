import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/esm/Col';
import { Context } from './../index';


const BrandBar = observer(() => {

    const { device } = useContext(Context)

    return (
        <Col className='d-flex flex-wrap'>
            {device.brands.map(brand =>
                <Card
                style={{cursor:'pointer'}}
                onClick={() => device.setSelectedBrand(brand)}
                border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                key={brand.id}
                className='p-3'>
                    {brand.name}
                </Card>
            )}
        </Col>
    );
})

export default BrandBar;