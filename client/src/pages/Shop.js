import React, { useContext, useEffect } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/esm/Col"
import TypeBar from "../components/TypeBar"
import BrandBar from "../components/BrandBar"
import DeviceList from "../components/DeviceList"
import { observer } from "mobx-react-lite"
import { Context } from "../index"
import { fetchBrands, fetchTypes, fetchDevices } from "../http/deviceAPI"

const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(()=> {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices().then(data => device.setDevices(data.rows))
    }, [device])

    return (
        <Container>
            <Row className="mt-3">
                <Col md={2}>
                    <TypeBar />
                </Col>
                <Col md={5}>
                    <BrandBar />
                    <DeviceList />
                </Col>
            </Row>
        </Container>
    )
})

export default Shop
