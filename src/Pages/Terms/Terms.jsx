import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h3 className='text-center fw-bold mt-5'>Terms and Conditions</h3><hr className='w-25 mx-auto mb-5' />
            <p> 1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur explicabo id ipsa! Recusandae, beatae. Laudantium odio a sit nostrum ex facere obcaecati reprehenderit. Sapiente, excepturi.</p>
            <p> 2. Dolor sit amet consectetur adipisicing elit. Facilis nihil tempore qui illum aperiam reiciendis nemo repellendus, in quibusdam aliquam </p>
            <p>3. Amet consectetur adipisicing elit. Iure enim vel similique temporibus quasi consectetur velit nemo minima, nostrum, ipsum ipsa dolorum est a animi dignissimos voluptates! Eligendi corrupti nisi error reiciendis minima ab cum!</p>
            <p>4. Expedita necessitatibus facilis voluptatem? Doloribus deleniti similique mollitia porro maiores harum sapiente! Ad deleniti itaque unde quidem molestias necessitatibus labore dolorem nobis officiis consectetur voluptatibus maxime, porro recusandae beatae impedit at commodi accusamus voluptatum omnis et! Totam.</p>
            <p>5. Facilis aperiam quidem voluptate molestias atque, eveniet ullam tenetur accusantium nulla suscipit hic nostrum dolor pariatur. Harum eaque eveniet ut, consectetur cumque tenetur. Natus architecto modi laboriosam blanditiis ipsa.</p>
            <p className='text-center mt-4'>Go back to <Link to = '/register' className='text-decoration-none' >Register</Link></p>
        </Container>
    );
};

export default Terms;