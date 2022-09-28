import React from 'react'
import { Container, Nav, Navbar, Image } from 'react-bootstrap'

function NavbarComponent() {
    return (
        <Navbar bg="white" collapseOnSelect expand="lg" fixed="top">
            <Container>
                <div className='container-fluid my-2'>
                    <Navbar.Brand href="#home"><Image src='../assets/images/logo.png' width='10%' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' className='float-end' />
                </div>
                <Navbar.Collapse id='responsive-navbar-nav' className="justify-content-end text-center">
                    <Nav className="ml-auto my-4">
                        <Nav.Link href="#home" className='mx-4 font-epilogue-regular'>About</Nav.Link>
                        <Nav.Link href="#work" className='mx-4 font-epilogue-regular'>Work</Nav.Link>
                        <Nav.Link href="#contact" className='mx-4 font-epilogue-regular'>Contact </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent
