import React, { useCallback } from "react"
import Card from "react-bootstrap/esm/Card"
import Col from "react-bootstrap/esm/Col"
import Image from "react-bootstrap/Image"
import star from "../assets/star.png"
import { useNavigate } from "react-router-dom"
import { DEVICE_ROUTE } from "../utils/consts"

const DeviceItem = ({ device }) => {
    const navigate = useNavigate()
    const handleClick = useCallback(() => {
        navigate(DEVICE_ROUTE + "/" + device.id)
    }, [navigate, device.id])
    console.log(navigate)

    return (
        <Col md={4} className="mt-2">
            <Card
                style={{ width: 150, cursor: "pointer" }}
                border={"light"}
                className="m-1"
                onClick={handleClick}
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
