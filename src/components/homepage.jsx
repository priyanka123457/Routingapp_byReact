import React from 'react';
// import './App.css';
import {Link,NavLink} from "react-router-dom"

function App1() {
  return (
    <div className="App">
      <header className="App-header ">
        <h1 style={{backgroundColor:"black",color:'white'}}>Welcome to My Simple Home Page</h1>
      </header>

      <main style={{backgroundColor:'black',color:'white'}}>
        <section>
          <h2>About Me</h2>
          <p>Hello! I'm a React developer learning how to build web apps.</p>
        </section>

        <section>
          <h2>Services</h2>
          <ul>
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Mobile App Development</li>
          </ul>
        </section>

        <section>
          <h2>Contact</h2>
          <p>Feel free to reach out if you'd like to work together!</p>
        </section>
      </main>

      <footer>
        <p>© 2025 My Simple Home Page</p>
        {/* <a href="/about">About</a> */}
        {/* <Link to = {"/about"}>About</Link>
        <br />
        <NavLink to = {"/login"}>Login</NavLink>
        <Link to = {"/lo"}>Login</Link> */}                                                               
                                                                                                                                                                                                                                              


      </footer>
    </div>
  );
}

export default App1;
