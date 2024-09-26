import React,{useReducer,createContext,useContext,useEffect} from 'react'
import {RouterProvider, createBrowserRouter,} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Profile from './components/Profile'
import LogIn from './components/Signin'
import Signup from './components/Signup'
import CreatePost from './components/Creatpost'
import { useNavigate } from 'react-router-dom'


export const userContext = React.createContext();

export const initialState = {user:null};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'USER':
      return { ...state, user: action.payload };
    case 'CLEAR':
      return { ...state, user: null };
    default:
      return state;
  }
};

const router = createBrowserRouter(
  [

  {
    element:<Navbar />,
    children: [
      {
      path:"/",
      element:<Home />,
      },
      {
      path:"/profile",
      element:<Profile />,
      },
      {
        path:"/signin",
        element:<LogIn/>,
      },
      {
        path:"/signup",
        element:<Signup/>,
      },
      {
        path:'/createpost',
        element:<CreatePost/>
      }

      
    ]

}])

const AuthCheck = ()=>{

    const navigate = useNavigate();
    const [state, dispatch] = useContext(userContext);
    useEffect(() => {
  
      const user = JSON.parse(localStorage.getItem('user'));

      if (user && !state.user) {
        dispatch({ type: 'USER', payload: user });
        navigate('/');
      } 
      if(!user) {
        navigate('/signin');
      }
  
    }, [navigate,state.user,dispatch]);

    return null;
  };


const App = () => {
  const [state,dispatch] = useReducer(reducer,initialState)
  
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      dispatch({ type: 'USER', payload: storedUser });
    }
  }, []);
  
  return(

    <userContext.Provider value={{state,dispatch}}>
    <Routing>
      <AuthCheck />
    </Routing>
    </userContext.Provider>
   

  
  )
}

const Routing = ()=>{
  return(
    <RouterProvider router={router} />
  )
}
export default App