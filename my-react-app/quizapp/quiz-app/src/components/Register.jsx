
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


const Register=()=>{
useEffect(()=>{
    getDetails()
},[])

async function handleEntry(){

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    const username = usernameInput.value;
    const password = passwordInput.value;

    try {
        const response = await fetch('https://quiz-api-5.onrender.com/add-ques', {
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
    } catch (error) {
        console.error('Error adding entry:', error);
    }
}
async function  getDetails(){
    try {
        const response = await fetch('https://quiz-api-5.onrender.com/get-ques');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching expense details:', error);
    }
}

    
    return(
<>
<div id="divr"> 
    <div id="divr1">
<img src="images/register.webp" id="divr12" />
    </div>
    <div id="divr2">
    <h3 id="divr21">Register</h3>
            <form action="/submit" method="post" id="div22">
                 <div id="divr22">
                <label htmlFor="name"><b>UserName</b></label>
                <input type="text" id="username" name="name"    required></input><br />

                <label htmlFsetTor="name" ><b>Password</b></label>
                <input type="password" id="password" name="class"   required></input><br />

                <Link to="/login"><button type="submit"  id="divr23" onClick={handleEntry}>Register</button></Link>
                </div>
            </form>
            <Link to="/login" id="divr24">
               Already Have an Account? Click here to <b>Login.</b>
              </Link>
    </div>
</div>
</>
    )
    }

export default Register