import React from 'react'
import userData from '../../jsonSrc/cv.json';


class Profile extends React.Component {
    
    render() {
        return (
              <React.Fragment>
                <div className="content-container">
                    <div>PICTURE</div>
                    <h1>{userData.name}</h1>
                    <div><a href={userData.github} target="_blank"> Github </a></div>
                    <div><a href={userData.linkedIn} target="_blank"> LinkedIn </a></div>
                    <div><a href={userData.faceBook} target="_blank"> FaceBook </a></div>
                    <div>{userData.position}</div>
                    <div>"{userData["About me"]}"</div>
                </div>
            </React.Fragment>
        )
    }
}

export default Profile;