import React from 'react';
import Card from 'react-bootstrap/esm/Card';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/Image'

const DeviceItem = ({device}) => {
    return (
        <Col md={3}>
            <Card
            style={{width: 150, cursor: 'pointer'}}
            border={'red'}
            >
                <Image width={150} height={150} src={device.img} />
                <div>
                    <div>Samsung</div>
                    <div>
                        <div>{device.rating}</div>
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;