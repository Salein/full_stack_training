import React, { useCallback, useContext } from "react"
import { Context } from "../index"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { NavLink, useNavigate } from "react-router-dom"
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import { observer } from "mobx-react-lite"

const NavBar = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate()
    const handleClickAdmin = useCallback(() => {
        navigate(ADMIN_ROUTE)
    }, [navigate])

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
                    Купи девайс
                </NavLink>
                {user.isAuth ? (
                    <Nav className="ml-auto" style={{ color: "white" }}>
                        <Button
                            variant={"outline-light"}
                            onClick={handleClickAdmin}
                        >
                            Админ панель
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => navigate(LOGIN_ROUTE)}
                            className="ml-4"
                        >
                            Выйти
                        </Button>
                    </Nav>
                ) : (
                    <Nav className="ml-auto" style={{ color: "white" }}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => user.setIsAuth(true)}
                        >
                            Авторизация
                        </Button>
                    </Nav>
                )}
            </Container>
        </Navbar>
    )
})

export default NavBar
