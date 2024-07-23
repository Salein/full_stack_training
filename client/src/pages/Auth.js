import React from "react"
import Container from "react-bootstrap/esm/Container"
import Form from "react-bootstrap/Form"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import { NavLink } from "react-router-dom"
import { REGISTRATION_ROUTE } from "../utils/consts"

const Auth = () => {
    return (
        <Container
            className="d-flex justify-conetent-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5 m-auto">
                <h2 className="m-auto">Авторизация</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email..."
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                    />
                    <Row className="d-flex justify-content-end mt-3 pl-3">
                        <div className="mt-3">
                            Нет аккаунта?
                            <NavLink to={REGISTRATION_ROUTE}>
                                Зарегистрируйся!
                            </NavLink>
                        </div>
                        <Button
                            style={{ width: 100 }}
                            variant={"outline-success"}
                        >
                            Войти
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    )
}

export default Auth
