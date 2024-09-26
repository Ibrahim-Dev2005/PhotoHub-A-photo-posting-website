import React,{useContext} from 'react'
import "../App.css"
import { Outlet } from 'react-router-dom'
import { userContext } from '../App'
import { Link } from 'react-router-dom'


const Navbar = () =>{
  const {state,dispatch} = useContext(userContext)
  const renderList = ()=>{
    if(state && state.user){
      return[
        <li key='profile'><Link to="/Profile"><i className="material-icons">account_circle</i></Link></li>
      ]
    }
    else{
      return[
        <li><Link to="/Signin">Sign In</Link></li>,
        <li><Link to="/Signup">Sign Up</Link></li>
      ]
    }

  }
    return (
    <body style={{backgroundColor:'black'}}>
    <nav>
    <div className="nav-wrapper #7e57c2 deep-purple lighten-1">
      <Link to={state?"/":'/signin'} className="brand-logo left">PhotoHub</Link>
      <ul id="nav-mobile" className="right">
       {renderList()}
      </ul>
    </div>
  </nav>
  <Outlet/>
  </body>
    )


}

export default Navbar