import React, { Component } from 'react'
import styles from './styles.css'
import { Link } from 'react-router-dom'
// import CSSModules from 'react-css-modules';

class Navigation extends Component {
    render () {
        return (
            <div className={styles.navWrapper}>
                <div className={styles.inner}>
                    <Link to="/">Profile</Link>
                    <Link to="/exp">Experience</Link>
                    {/* <Link to="/projects">Abilities</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contacts">Contacts</Link> */}
                </div>
            </div>
        )
    }
}

// export default CSSModules(Navigation, styles)
export default Navigation
