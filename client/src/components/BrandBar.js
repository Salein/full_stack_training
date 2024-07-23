import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card'
import { Context } from './../index';


const BrandBar = observer(() => {

    const { device } = useContext(Context)

    return (
        <Row className='d-flex'>
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
        </Row>
    );
})

export default BrandBar;