import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <div>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='text-secondary fs-5'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format('dddd, MMMM D, YYYY')}</p>
            </div>
            <Container className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={100} pauseOnHover={true}>
                    I can be a React component, multiple React components, or just some text...  I can be a React component, multiple React components, or just some text.
                </Marquee>
            </Container>
            
        </div>
    );
};

export default Header;