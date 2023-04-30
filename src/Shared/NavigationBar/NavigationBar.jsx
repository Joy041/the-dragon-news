import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const NavigationBar = () => {
    const { user, logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout()
        .then(result => {
            alert('Logout successful')
        })
        .catch( (error) => console.error(error))
    }

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='mt-3 position-sticky'>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to='/categories/0' className='text-decoration-none text-black'>Home</Link>
                            <Link to='/about' className='text-decoration-none text-black mx-4'>About</Link>
                            <Link to='/' className='text-decoration-none text-black'>Career</Link>
                        </Nav>
                        <Nav className='d-flex align-items-center'>
                            <Nav.Link href="#deets">{
                                user ? <div className='fw-bold'>Welcome {user.displayName}</div> : <>Profile</>
                            }</Nav.Link>
                            <Button variant="secondary">{
                                user ? <Link onClick={handleLogout} className='text-decoration-none text-black' to = '/login'>Logout</Link> : <Link to='/login' className='text-decoration-none text-black' >Login</Link>
                            }</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;