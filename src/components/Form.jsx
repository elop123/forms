import { useState, useEffect } from "react"

export const Form=()=>{

    const[name, setName] = useState("");
    const[error, setError] = useState(" ");
    const[email, setEmail] =useState("");
   
    
    console.log(name);
    console.log(email);

useEffect(()=>{
const specialSigns = /[!@#$%^&*(),.?":{}|<>]/;   

if(name.length === 0){
    setError('')
}
else if (name.length < 6 && !specialSigns.test(name)) {
    setError('Username should contain at least 6 characters and one special sign');
} else {
    setError('');
        }
},[name])

useEffect(()=>{
    const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email.length == '') {
        setError('');
      } else if (!validEmail.test(email)) {
        setError('Your email is not valid');
      } else {
        setError('');
      }
    
},[email])

    return(
    <section>
    <form>
        <label htmlFor="Username">Username</label>
        <input onChange={(e)=>setName(e.target.value)} 
               type="text" 
               value={name} />
        <label htmlFor="Email">Email</label>
        <input onChange={(e)=>setEmail(e.target.value)} 
               type="email" 
               value={email} />
      </form>
      <b style={{color:'red'}}>{error} </b>
    </section>)
}