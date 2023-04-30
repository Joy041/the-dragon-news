import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';

const Categories = () => {
    const categoryNews = useLoaderData()
    return (
        <div className='mt-5'>
            <h4 className='fw-bold'>Dragon News Home</h4>
            {
                categoryNews.map( news => <Category
                 key={news._id}
                 news = {news}
                ></Category>)
            }
        </div>
    );
};

export default Categories;