import { useState, useEffect }from 'react';
import BlogList from './BlogLIst';

const Home= () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ])

      const[name, setName] = useState('mario');

      const handleDelete = (id) =>{
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
      }

      useEffect(() => {
          console.log('use effect ran')
          console.log({name})
      }, [name]);

    return ( 
        <div className = "home">
           <BlogList blogs = {blogs} title = "All Blogs!" handleDelete = {handleDelete}></BlogList>
           <BlogList blogs = {blogs.filter((blog) => blog.author === 'mario')} title = "Mario's Blogs!"></BlogList>
           <button onClick = {() => setName('Luigi')}>change Name </button>
           <p>{name}</p>
        </div>

     );
}
 
export default Home;

/*

const handleClick = () => {
    console.log('hello, ninjas')
}
const handleClickAgain = (name) => {
    console.log('hello ' + name )
}
*/ 

/*import { useState }from 'react';

const Home= () => {

    const [ name, setName] = useState('Mario');
    const [ age, setAge] = useState(25);

    const handleClick = () => {
    setName('Peroca');
    setAge (30);
    }

    
    return ( 
        <div className = "home">
            <h2>Home Page</h2>
            <p>{name } is { age } years old.</p>
            <button onClick = {handleClick}>Click Me</button>
        </div>

     );
}*/

/*[NOTES FOR LECTURE 11]
import { useState }from 'react';
import BlogList from './BlogLIst';

const Home= () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ])

    return ( 
        <div className = "home">
        //blogs and title below are the props
           <BlogList blogs = {blogs//FROM THE ABOVE CONST} title = "These are the blogs"></BlogList>
        </div>

     );
}
 
export default Home;

*/ 