import React from "react"
import Card from "react-bootstrap/esm/Card"
import Col from "react-bootstrap/esm/Col"
import Image from "react-bootstrap/Image"
import star from "../assets/star.png"
import { useLocation } from "react-router-dom"

const DeviceItem = ({ device }) => {
    const history = useLocation()
    console.log(history)

    return (
        <Col md={4} className="mt-2" onClick={() => pathname}>
            <Card
                style={{ width: 150, cursor: "pointer" }}
                border={"light"}
                className="m-1"
            >
                <Image width={150} height={150} src={device.img} />
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center ">
                    <div>Samsung</div>
                    <div className="d-flex m-1 align-items-center">
                        <div>{device.rating}</div>
                        <Image width={20} height={20} src={star} />
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    )
}

export default DeviceItem
