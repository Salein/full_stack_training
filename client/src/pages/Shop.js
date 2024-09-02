import React, { useContext, useEffect } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/esm/Col"
import TypeBar from "../components/TypeBar"
import BrandBar from "../components/BrandBar"
import DeviceList from "../components/DeviceList"
import { observer } from "mobx-react-lite"
import { Context } from "../index"
import { fetchTypes } from "../http/deviceAPI"

const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(()=> {
        fetchTypes().then(data => device.setTypes(data))
    }, [])

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
