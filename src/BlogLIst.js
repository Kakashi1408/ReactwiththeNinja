const BlogList = ({blogs, title, handleDelete}) => {

    return (
        <div className = "blog-list">
            <h2>{title}</h2>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id} >
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <button onClick = {() => handleDelete(blog.id) }>delete Blog</button>
                </div>
            ))}    

        </div>
     );
}
 
export default BlogList;

/*

const BlogList = (props//refers to the props defined in the Home.js file)
{THE ABOVE CAN ALSO BE WRITTEN AS constt BlogList = ({blogs, title});
This will not need [const blogs = props.blogs;
    const title = props.title;]
}

 => {
    const blogs = props.blogs;
    const title = props.title;

    return (
        <div className = "blog-list">
            <h2>{title}</h2>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id} >
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))}    

        </div>
     );
}
 
export default BlogList;


*/