import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaRegBookmark, FaRegEye, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import PrivateRoute from '../../../Route/PrivateRoute';

const Category = ({ news }) => {
    const { _id, title, details, image_url, author, rating, total_view } = news
    return (
        <div>
            <Card className="mb-4">
                <Card.Header className='d-flex align-items-center'>
                    <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                    <div className='ms-3 flex-grow-1'>
                        <p className='mb-0 mt-3'>{author?.name}</p>
                        <p>{moment(author?.published_date).format('YYYY-MM-D')}</p>
                    </div>
                    <div>
                        <FaRegBookmark></FaRegBookmark>
                        <FaShareAlt className='ms-2'></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {
                            details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}...<Link to={`/news/${_id}`} className='text-decoration-none'>Read more</Link></>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex">
                    <div className='flex-grow-1'>
                        <Rating
                            placeholderRating={rating?.number}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                        <span className='ms-2'>{rating?.number}</span>
                    </div>
                    <div className='d-flex align-items-center'>
                        <FaRegEye className='me-1'></FaRegEye>
                        {total_view}
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Category;