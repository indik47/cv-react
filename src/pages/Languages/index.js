import React from 'react';
import userData from '../../jsonSrc/cv.json';

class Languages extends React.Component{
    render () {
        return (
           <div>
               <div>
                   <span>English</span>
                   <span>{userData.languages.english}</span>
               </div>
               <div>
                   <span>Russian</span>
                   <span>{userData.languages.russian}</span>
               </div>
               <div>
                   <span>Ukrainian</span>
                   <span>{userData.languages.ukrainian}</span>
               </div>
               <div>
                   <span>Deutch</span>
                   <span>{userData.languages.deutsch}</span>
               </div>
           </div>
           
        )
    }
}

export default Languages