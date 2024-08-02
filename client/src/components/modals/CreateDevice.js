import React, { useContext, useState } from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/esm/Button"
import Form from "react-bootstrap/Form"
import { Context } from "./../../index"
import DropDown from "react-bootstrap/Dropdown"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const CreateDevice = ({ show, onHide }) => {
    const { device } = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, { title: "", description: "", number: Date.now() }])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить устройство
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <DropDown className="mt-3">
                        <DropDown.Toggle>Выберите тип</DropDown.Toggle>
                        <DropDown.Menu>
                            {device.types.map((type) => (
                                <DropDown.Item key={type.id}>
                                    {type.name}
                                </DropDown.Item>
                            ))}
                        </DropDown.Menu>
                    </DropDown>
                    <DropDown className="mt-3">
                        <DropDown.Toggle>Выберите брэнд</DropDown.Toggle>
                        <DropDown.Menu>
                            {device.brands.map((brand) => (
                                <DropDown.Item key={brand.id}>
                                    {brand.name}
                                </DropDown.Item>
                            ))}
                        </DropDown.Menu>
                    </DropDown>
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите название устройства"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите стоимость устройства"
                        type="number"
                    />
                    <Form.Control className="mt-3" type="file" />
                    <hr />
                    <Button variant="outline-dark" onClick={addInfo}>
                        Добавить новое свойство
                    </Button>
                    {info.map((i) => (
                        <Row className="mt-3" key={i.number}>
                            <Col md={4}>
                                <Form.Control placeholder="Введите название свойства" />
                            </Col>
                            <Col md={4}>
                                <Form.Control placeholder="Введите описание свойства" />
                            </Col>
                            <Col md={4}>
                            <Button
                            onClick={() => removeInfo(i.number)}
                            variant="outline-danger">Удалить</Button>
                            </Col>
                        </Row>
                    ))}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>
                    Закрыть
                </Button>
                <Button variant="outline-success" onClick={onHide}>
                    Добавить
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateDevice
