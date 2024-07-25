import React from 'react';
import Card from 'react-bootstrap/esm/Card';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/Image'
import star from '../assets/star.png'

const DeviceItem = ({device}) => {
    return (
        <Col md={3}>
            <Card
            className='p-1'
            style={{width: 150, cursor: 'pointer'}}
            border={'green'}
            >
                <Image width={130} height={150} src={device.img}
                className='p-2'/>
                <div className='d-flex justify-content-between align-items-center '>
                    <div>Samsung</div>
                    <div className='d-flex justify-content-end m-1'>
                        <div>5</div>
                        <Image src={star}  />
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;