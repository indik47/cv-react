import React from 'react'
import styles from './styles.css'


class Projects extends React.Component {
    render() {
        return (
            <div className={styles.outer}>
                <div className={styles.infoBlock}>
                    <h1 className={styles.title}>Our cool calculator</h1>
                    <div className={styles.details}>
                        <span className={styles.detailsItem}>We did this just for fun</span>
                    </div>
                    <div className={styles.additional}>
                        <button>HTML</button>
                        <button>CSS</button>
                        <button>JS</button>
                        <button>no frameworks</button>
                    </div>
                </div>
                <div className={styles.infoBlock}>
                    <h1 className={styles.title}>Star Wars info portal</h1>
                    <div className={styles.details}>
                        <span className={styles.detailsItem}>Test task</span>
                    </div>
                    <div className={styles.additional}>
                        <button>react.js</button>
                        <button>first try</button>
                        <button>must do better</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects