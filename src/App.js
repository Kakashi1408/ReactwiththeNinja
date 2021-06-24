import Navbar from './Navbar';
import Home from './Home';
//This is not written in html but in jsx and then converted to html
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className = "content">
        <Home />
      </div>
    </div>
  );
}

export default App;
//so that we can use it in other files



/*THIS IS THE INITIAL LESSON CODE*/ 

/*import './App.css';
//This is not written in html but in jsx and then converted to html
function App() {
  //variable
  const title = 'Welcome to the new blog';
  const likes = 50;
  const link = "http://www.google.com";

  return (
    <div className="App">
      <div className = "content">
        <h1>App Component</h1>
        <h2>{ title }</h2>
        <p>Liked { likes } times</p>
        <p>{"Hello ninjas"}</p>

        <a href={link}>Google site</a>
      </div>
    </div>
  );
}

export default App;
//so that we can use it in other files*/