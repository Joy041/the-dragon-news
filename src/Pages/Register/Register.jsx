import React from 'react';
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { useState } from 'react';

const Register = () => {
    const { register, profile, verification } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('') 
    const navigate = useNavigate()
    const [accepted, setAccepted] = useState(false);

    const handelRegisterForm = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(name, email, password, confirm)

        setError('')
        setSuccess('')

        if (password !== confirm) {
            alert('confirm password not match')
            return;
        }

        else if (password.length < 8) {
            setError('Should contain at last 8 characters')
            return;
        }

        else if (!/(?=.*\d)/.test(password)) {
            setError('Should contain at last one digit')
            return;
        }

        else if (!/(?=.*[A-Z])/.test(password)) {
            setError('Should contain at last one upper case')
            return;
        }

        else if (!/(?=.*[a-z])/.test(password)) {
            setError('Should contain at last one lower case')
            return;
        }

        register(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            setSuccess('Register successful') 
            profileName(loggedUser, name)
            verificationMail(loggedUser)
            form.reset()
            navigate('/login')
        })
        .catch(error => setError(error.message))

    }

    const profileName = (user, name) => {
        profile(user, name)
        .then(() => {})
        .catch(error => setError(error.message))
    }

    const verificationMail = (user) => {
        verification(user)
        .then(result => {
            alert('Check your email')
            return
        })
    }

    const handleAccepted = (event) => {
          setAccepted(event.target.checked)
    } 

    return (
        <div className='mt-5 border w-50 mx-auto py-5 rounded bg-light'>
            <h2 className='text-center'>Register your account</h2><hr className='w-75 mx-auto' />
            <Form className='w-75 mx-auto mt-5' onSubmit={handelRegisterForm}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name='confirm' placeholder="Confirm Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleAccepted} type="checkbox" label={<>Accept <Link to = '/terms' className='text-decoration-none'>Terms and Condition</Link></>} required />
                </Form.Group>
                <p className='text-danger'>{error}</p>
                <p className='text-success'>{success}</p>
                <Button variant="primary" disabled={!accepted} type="submit" className='w-100'>
                    Register
                </Button>
                <p className='mt-3'>Already Have An Account ? <Link to='/login' className='text-decoration-none'>Login</Link></p>
            </Form>
        </div>
    );
};

export default Register;