import React from 'react';
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { useState } from 'react';
import { useRef } from 'react';

const Login = () => {
    const { login, passwordReset } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const emailRef = useRef()
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/categories/0'

    const handleLoginForm = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        setError('')
        setSuccess('')

        login(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                setSuccess('Login successful')
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => setError(error.message))


    }

    const handleForgetPass = () => {
        const email = emailRef.current.value
        passwordReset(email)
            .then(result => {
                alert('Check your email')
                return
            })
            .catch(error => setError(error.message))
    }

    return (
        <div className='mt-5 border w-50 mx-auto py-5 rounded bg-light'>
            <h2 className='text-center'>Login your account</h2><hr className='w-75 mx-auto' />
            <Form className='w-75 mx-auto mt-5' onSubmit={handleLoginForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' ref={emailRef} placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                    <button className='border-0 bg-light mt-2 ps-0 text-decoration-underline' onClick={handleForgetPass}>Forget password</button>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" required />
                </Form.Group>
                <p className='text-danger'>{error}</p>
                <p className='text-success'>{success}</p>
                <Button variant="primary" type="submit" className='w-100'>
                    Login
                </Button>
                <p className='mt-3'>Don’t Have An Account ? <Link to='/register' className='text-decoration-none'>Register</Link></p>
            </Form>
        </div>
    );
};

export default Login;