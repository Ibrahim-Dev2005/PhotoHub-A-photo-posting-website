import React,{useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import M from 'materialize-css'

 

const Signup = () =>{
    const navigate = useNavigate()
    const [name,setName] = useState("")
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const PostData = ()=>{
        if(!/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm){
            M.toast({html:'Invalid Email',classes:"#f44336 red"})
            return
        }

        fetch("/signup",{
        method:'post',
        headers:{
            "Content-Type" : "application/json"
        },

        body:JSON.stringify({
            name,
            email,
            password,
        })
        }).then(res=>res.json()).then(data=>{
            if(data.error){
                M.toast({html:data.error,classes:"#f44336 red"})

            }
            else{
                M.toast({html:data.message,classes:"#00e676 green accent-3"})
                navigate('/signin')
            }

    }).catch(err=>{
        console.log('Error')
    })
    }
    return(
        <div className="signupcard">
        <div className="authcard">
            <h2>Instagram</h2>

            <input type='text' placeholder="name"
            value = {name}
            onChange={(e)=>setName(e.target.value)}
            ></input>

            <input type='text' placeholder="email"
            value = {email}
            onChange={(e)=>setEmail(e.target.value)}
            ></input>

            <input type="text" placeholder="password"
            value = {password}
            onChange={(e)=>setPassword(e.target.value)}
            ></input>

            <button className="btn waves-effect waves-light #1e88e5 blue darken-1" type="submit" name="action" onClick={()=>PostData()}>Login</button>
            <h6>OR</h6>
            <h5><Link to="/signin">Already have an account?</Link></h5>
        </div>
    </div> 
    )
}


export default Signup