import React from "react";

const Home = () =>{
    return(

        <body style={{backgroundColor:"black",maxHeight:'100000px'}}>
        <div className="home">

            <div className="card home-card" style={{backgroundColor:'black',boxShadow:'0px 0px 5px white',borderRadius:"5px"}}>
                <h5 style={{color:"white"}}>Ibrahim</h5>
                <div className="cardimg">
                     <img src="https://images.unsplash.com/photo-1597027269532-558925ca9ea2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3Dg" alt='img'></img>
                </div>
                <div className="info" style={{color:"white"}}>
                <i className="material-icons">favorite_border</i>
                    <h6>Title</h6>
                    <p>Beautiful scenery</p>
                    <input type="text" placeholder="comment"></input>
                </div>
            </div>

            <div className="card home-card" style={{backgroundColor:'black',boxShadow:'0px 0px 5px white',borderRadius:"5px"}}>
                <h5 style={{color:"white"}}>Monke</h5>
                <div className="cardimg">
                     <img src="https://images.unsplash.com/photo-1597027269532-558925ca9ea2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3Dg" alt='img'></img>
                </div>
                <div className="info" style={{color:"white"}}>
                <i className="material-icons">favorite_border</i>
                    <h6>Title</h6>
                    <p>Beautiful scenery</p>
                    <input type="text" placeholder="comment"></input>
                </div>
            </div>

            <div className="card home-card" style={{backgroundColor:'black',boxShadow:'0px 0px 5px white',borderRadius:"5px"}}>
                <h5 style={{color:"white"}}>Monke</h5>
                <div className="cardimg">
                     <img src="https://images.unsplash.com/photo-1597027269532-558925ca9ea2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3Dg" alt='img'></img>
                </div>
                <div className="info" style={{color:"white"}}>
                <i className="material-icons">favorite_border</i>
                    <h6>Title</h6>
                    <p>Beautiful scenery</p>
                    <input type="text" placeholder="comment"></input>
                </div>
            </div>
        

        </div>

        </body>
    )
}


export default Home 