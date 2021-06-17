import React from 'react'
import BlogCard from './BlogCard'
function BlogMiddleComp({ data }) {
    //   console.log(data)
    return (
        <>
            {data.map((d) => <BlogCard data={d} key={d.id} />
            )}
        </>
    )
}

export default BlogMiddleComp
