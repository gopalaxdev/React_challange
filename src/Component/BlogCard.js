import React from 'react'
import './BlogCard.css'
function BlogCard({ data }) {
    //console.log(data)
    return (
        <div className='blog__card__container'>
            <div className="card__header">
                {data.name}
            </div>
            <div className="card__body">
                {data.para}
            </div>
        </div>
    )
}

export default BlogCard
