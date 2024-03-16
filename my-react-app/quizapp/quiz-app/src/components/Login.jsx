import { Link } from "react-router-dom"
import { useState } from "react"
const Login = () => {

   
    
    

    async function handleEntry() {
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
    
        const username = usernameInput.value;
        const password = passwordInput.value;
    
        try {
            const response = await fetch('https://quiz-api-5.onrender.com/validate-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
            });
            const data = await response.json();
            console.log(data);
            
            if (response.status === 401) {
                alert('Invalid credentials. Please try again.');
            } else {
                // Process response data for valid user
            }
        } catch (error) {
            console.error('Error validating user:', error);
        }
    }
    
  
    

    return(
<>
<div id="divl"> 
    <div id="divl1">
<img src="images/loginnn.gif" id="divl12" />
    </div>
    <div id="divl2">
    <h3 id="divl21">Login</h3>
            <form action="/submit" method="post" id="div22">
                 <div id="divl22">
                <label htmlFor="name"><b>UserName</b></label>
                <input type="text" id="username" name="name"    required></input><br />

                <label htmlFsetTor="name" ><b>Password</b></label>
                <input type="password" id="password" name="class"   required></input><br />

               <Link to='/homePage'> <button type="submit"  id="divl23" onClick={handleEntry}>Login</button></Link>
                </div>
            </form>
            <Link to="/register" id="divl24">
               New to our App? Click here to <b>SignUp.</b>
              </Link>
    </div>
</div>
</>
    )
}

export default Login