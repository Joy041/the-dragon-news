import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsight from '../EditorsInsight/EditorsInsight';

const News = () => {
    const news = useLoaderData();
    const { title, details, image_url, category_id } = news

    return (
        <div className='mt-5'>
            <h3>Dragon news</h3>
            <Card>
                <Card.Img variant="top" src={image_url} className='p-2' />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                       {details}
                    </Card.Text>
                    
                    <Link to = {`/categories/${category_id}`}><Button variant="danger"><FaArrowLeft></FaArrowLeft> All news in this category</Button></Link>
                </Card.Body>
            </Card>
            <EditorsInsight></EditorsInsight>
        </div>
    );
};

export default News;