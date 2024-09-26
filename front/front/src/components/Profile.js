import React from "react";
import { Link } from "react-router-dom";

const Profile = () =>{
    return(
        <div style={{maxWidth:"900px" , margin:"0px auto"}}  >
            <div style={{display:"flex", justifyContent:'space-around', margin:"18px 0px",border:"5px"}}>
                <div>
                    <img src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3NrOTc5MS1pbWFnZS1rd3Z1amE5Ni5qcGc.jpg" style={{height:"160px",width:"160px",borderRadius:"80px"}} alt="img"></img>
                </div>
                <div>
                    <h5>Ibrahim</h5>
                    <div style={{display:"flex",justifyContent:'space-between',width:'300px'}}>
                        <h6>40 posts</h6>
                        <h6>40 followers</h6>
                        <h6>40 following</h6>
                    </div>
                    <Link to='/createpost'><i className="material-icons">add</i></Link>
                </div>
                

            </div>

            <div className="gallery">
                <img className="images" src="https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg?cs=srgb&dl=pexels-pripicart-620337.jpg&fm=jpg" alt="images"></img>
                <img className="images" src="https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg?cs=srgb&dl=pexels-pripicart-620337.jpg&fm=jpg" alt="images"></img>
                <img className="images" src="https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg?cs=srgb&dl=pexels-pripicart-620337.jpg&fm=jpg" alt="images"></img>
                <img className="images" src="https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg?cs=srgb&dl=pexels-pripicart-620337.jpg&fm=jpg" alt="images"></img>
                <img className="images" src="https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg?cs=srgb&dl=pexels-pripicart-620337.jpg&fm=jpg" alt="images"></img>
                <img className="images" src="https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg?cs=srgb&dl=pexels-pripicart-620337.jpg&fm=jpg" alt="images"></img>
            </div>
        </div>

    )
}


export default Profile