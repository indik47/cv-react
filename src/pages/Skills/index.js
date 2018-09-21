import React from 'react'

class Skills extends React.Component {

    render() {
        
        const {skills} = this.props;

        return (
                    skills.map( (item, index) => {
                        return (
                            <div key={index}> {item} </div>
                        )
                    })
        )
    }
}

export default Skills