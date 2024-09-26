import React,{useEffect, useState} from "react";
import M from "materialize-css"
import { useNavigate } from "react-router-dom";



const CreatePost = ()=>{
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [image,setImage]= useState("")
    const [url,setUrl] = useState("")
    const navigate = useNavigate()

    useEffect(()=>{

        if(url){
        fetch("/createpost",{
            method:'post',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + localStorage.getItem('jwt')
            },
    
            body:JSON.stringify({
                title,
                body,
                pic:url
            })
            }).then(res=>res.json()).then(data=>{
                if(data.error){
                    M.toast({html:data.error,classes:"#f44336 red"})
                }
                else{
                    M.toast({html:"Posted Successfully",classes:"#00e676 green accent-3"})
                    navigate("/")
                }
        }
        
        )
    }
    
    },[url,body,navigate,title])

    const postDetails= () => {
        const data = new FormData()
            data.append('file',image)
            data.append('upload_preset','abcdefg')
            data.append('cloud_name','dfllbholh')

            fetch("https://api.cloudinary.com/v1_1/dfllbholh/image/upload",{
                method:'post',
                body:data

            }).then(res=>res.json()).then(data=>{
                setUrl(data.url)
                
            }).catch(err=>{
                console.log(err)
            })
    }

   

    
    
    return(
        <div className="postcard" style={{maxWidth:"500px" , margin:"50px auto" , padding:"20px",textAlign:'center'}}>
            <input type="text" placeholder="Title"
            value = {title}
            onChange={(e)=>{setTitle(e.target.value)}}
            ></input>

            <input type="text" placeholder="Body"
            value = {body}
            onChange={(e)=>{setBody(e.target.value)}}
            ></input>

            <div className="file-field input-field ">
                <div className="btn  #1e88e5 blue darken-1">
                    <span>Add Image</span>
                    <input type="file" onClick={(e)=>setImage(e.target.files[0])}/>
                </div>
                <div className="file-path-wrapper ">
                    <input className="file-path validate" type="text"/>
                </div>
            </div>
            <button className="btn waves-effect waves-light #1e88e5 blue darken-1" type="submit" name="action"
            onClick={(e)=>postDetails()}>Submit</button>
        </div>
    )
}

export default CreatePost