import React from "react"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/esm/Col"
import Image from "react-bootstrap/esm/Image"
import Row from "react-bootstrap/esm/Row"
import bigStar from "../assets/bigStar.png"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/esm/Button"

const DevicePage = () => {
    const device = {
        id: 1,
        name: "Iphone 12 pro",
        price: 2500,
        rating: 5,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgEXpJPdThteDNHAPLwxl3ckT-fPdJu1hRJQ&s",
    }

    const description = [
        { id: 1, title: "Оперативная память", description: "5гб" },
        { id: 2, title: "Камера", description: "12мп" },
        { id: 3, title: "Процессор", description: "Intel Core" },
        { id: 4, title: "Кол-во ядер", description: "4" },
        { id: 5, title: "Аккумулятор", description: "5000" },
    ]

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img} />
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{
                                background: `url(${bigStar}) no-repeat center center`,
                                width: 240,
                                height: 240,
                                backgroundSize: "cover",
                                fontSize: 40,
                            }}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{
                            width: 300,
                            height: 300,
                            fontSize: 32,
                            border: "5px solid lightgray",
                        }}
                    >
                        <h3>От: {device.price}руб.</h3>
                        <Button variant={"outline-dark"}>
                            Добавить в корзину
                        </Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {description.map((info, index) => (
                    <Row
                        key={info.id}
                        style={{
                            background:
                                index % 2 === 0 ? "lightgray" : "transparent",
                            padding: 10,
                        }}
                    >
                        {info.title}: {info.description}
                    </Row>
                ))}
            </Row>
        </Container>
    )
}

export default DevicePage
