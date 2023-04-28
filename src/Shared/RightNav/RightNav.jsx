import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import bg from '../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <div className='mt-5'>
                <h4 className='fw-bold pb-2'>Login With</h4>
                <Button variant="outline-primary" className='mb-2'> <FaGoogle /> Login with Google</Button>
                <Button variant="outline-secondary"><FaGithub /> Login with Github</Button>
            </div>
            <div className='mt-5'>
                <h4 className='fw-bold pb-2'>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
                <Qzone></Qzone>
                <div className='text-center position-relative'>
                    <img src={bg} alt="" />
                    <div className='position-absolute top-50 start-50 translate-middle text-white'>
                    <p className='fs-2 fw-bold px-5'>Create an Amazing Newspaper</p>
                    <p className='px-5 pt-2'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant="danger" className='p-3 mt-3'>Learn More</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightNav;