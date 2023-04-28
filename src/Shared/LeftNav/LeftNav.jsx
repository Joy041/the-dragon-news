import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([])

    useEffect( () => {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.error(error))
    } , [])
    return (
        <div>
            <h4 className='mb-4 mt-5 fw-bold'>All Category</h4>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                           <Link to={`/categories/${category.id}`} className='text-decoration-none text-black ps-5 fs-5 fw-semibold'>{category.name}</Link>
                    </p> )
                }
            </div>
        </div>
    );
};

export default LeftNav;