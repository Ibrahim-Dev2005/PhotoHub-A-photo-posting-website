import React,{useState,useContext} from "react";
import { Link,useNavigate } from "react-router-dom";
import M from 'materialize-css'
import { userContext } from "../App";

const LogIn = () =>{
    const {state,dispatch} = useContext(userContext)
    const navigate = useNavigate()
    const [email,setEmail] = useState("")
    const [password,setPassword] =useState("")


    const PostData = ()=> {
        if(!/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm){
            M.toast({html:'Invalid Email',classes:"#f44336 red"})
            return
        }
        fetch("/signin",{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },

            body:JSON.stringify({
                email,
                password,
            })
            }).then(res=>res.json()).then(data=>{
                if(data.error){
                    M.toast({html:"Invalid Email or Password",classes:"#f44336 red"})
                }
                else{
                    localStorage.setItem('jwt',data.token)
                    localStorage.setItem('userdata',JSON.stringify(data.user))
                    dispatch({type:'USER',payload:data.user})
                    M.toast({html:"Signed in successfully",classes:"#00e676 green accent-3"})
                    navigate("/")
                }
        }
        
        )
    }


    return(
        <section className="login">
        <div className="signin">
        <div className="logincard">
            <div className="authcard">
                <h2>PhotoHub</h2>
                <input type='text' placeholder="email"
                    value = {email}
                    onChange={(e)=>setEmail(e.target.value)}
                    style={{color:'white'}}
                    ></input>

                    <input type="text" placeholder="password"
                    value = {password}
                    onChange={(e)=>setPassword(e.target.value)}
                    ></input>
                <button className="btn waves-effect waves-light #1e88e5 blue darken-1" type="submit" name="action" onClick={()=>{PostData()}}>        Login      
                    
                </button>
                <h6 style={{color:'white'}}>OR</h6>
                <h5><Link to="/signup">Create an account</Link></h5>
            </div>

        </div> 

</div>
</section>
       
        
    )
}


export default LogIn