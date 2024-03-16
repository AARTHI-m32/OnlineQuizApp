import { useState } from "react"
import { Link } from 'react-router-dom'


const Header = () => {

  const [isLoggedIn,setLoggedIn] =useState(true)

const handleLogin=()=>{
  setLoggedIn(!isLoggedIn)
}
    return (
        <div >
<div id="div1">
            <span id="div13" >QuizzMania</span>
            <div id="div12">
            <nav>
            <a href="/" class="div11">Home</a>
                <a href="/play" class="div11">Topic</a>
                <a href="/" class="div11">Contact</a>
              <Link to='/login'><button onClick={handleLogin} class="div14" > { isLoggedIn?"Login":"Logout"} </button></Link>  
            </nav>
       
            </div>
        </div>

        <div id="div16">
            <img id="div15" src="images/frontpage.gif" ></img>
            <div>
            <p><b>"Ready to challenge your mind? Join our online quiz app and embark
                 on a journey of discovery. Explore diverse topics, compete with 
                 fellow enthusiasts, and see how far your knowledge can take you.
                  Start quizzing now!"</b></p>

                
                  <Link to="/play"><button id="div17"><b>Get Started!!</b></button></Link>
           
                  </div>                 
        </div>     
    </div>
    )
}

export default Header