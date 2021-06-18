import React, { useState } from 'react'
import './BlogPage.css'

import BlogMiddleComp from './BlogMiddleComp'
import { data } from '../data'
function BlogPage() {

    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
        console.log(searchTerm)
    }

    const searchFilter = () => {

        let arr = data.filter(function (d) {
            // console.log(d.name)
            if (d.name != undefined) {
                return d.name.toLowerCase().includes(searchTerm.toLowerCase())
            }
        })

        return arr;
    }

    return (

        <div className='blogs'>
            {/* Seach Bar  */}
            <input className='blogs__search__input' type="text" placeholder="@Search" onChange={(e) => handleSearch(e)} />
            {/* Display Blogs  */}

            {/* Data will come here in form of array map it to the blogCard compo */}
            <div className="blog__body" >
                <BlogMiddleComp data={searchFilter()} />
            </div>


        </div >
    )
}

export default BlogPage
