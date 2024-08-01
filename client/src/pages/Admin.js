import React, { useState } from "react"
import Button from "react-bootstrap/esm/Button"
import Container from "react-bootstrap/esm/Container"
import CreateBrand from "../components/modals/CreateBrand"
import CreateDevice from "../components/modals/CreateDevice"
import CreateType from "../components/modals/CreateType"

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button variant="outline-dark" className="mt-4 p-2">
                Добавить тип
            </Button>
            <Button variant="outline-dark" className="mt-4 p-2">
                Добавить бренд
            </Button>
            <Button variant="outline-dark" className="mt-4 p-2">
                Добавить устройство
            </Button>
            <CreateBrand show={brandVisible}/>
            <CreateDevice show={deviceVisible}/>
            <CreateType show={typeVisible}/>
        </Container>
    )
}

export default Admin
