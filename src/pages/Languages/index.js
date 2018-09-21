import React from 'react';

class Languages extends React.Component{
    render () {
        const { languages } = this.props;
        return (
         languages.map ( (item, index) => {
          return <div key={index}>
              <span>{Object.keys(item)[0]}</span>
             <span>{Object.values(item)[0]}</span>
          </div> 
         })
        )
    }
}

export default Languages


