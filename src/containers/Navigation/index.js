import React, { Component } from 'react'
import styles from './styles.css'
import { Link } from 'react-router-dom'
import MyPhoto from '../../assets/myphoto.jpg';
// import CSSModules from 'react-css-modules';

class Navigation extends Component {
    render () {
        return (
            <div className={styles.navWrapper}>
                <div className={styles.inner}>
                    <Link to="/"><img className={styles.inner__avatar} src={MyPhoto} alt="my avatar" /></Link>
                    <Link to="/work">Work</Link>
                    <Link to="/education">Education</Link>
                    <Link to="/skills">Skills</Link>
                    <Link to="/languages">Languages</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contacts">Contacts</Link>
                </div>
            </div>
        )
    }
}

// export default CSSModules(Navigation, styles)
export default Navigation;
