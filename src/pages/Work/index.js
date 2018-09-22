import React from 'react'
import styles from './styles.css'

class Work extends React.Component{
    render () {
        return (
            <div className={styles.outer}>

                <div className={styles.infoBlock}>
                    <h1 className={styles.title}>Wargaming / Persha Studia</h1>
                    <div className={styles.details}>
                        <span className={styles.detailsItem}>march 2018 - june 2018</span>
                        <span className={styles.detailsItem}>CG artist</span>
                    </div>
                    <div className={styles.additional}>
                        <button>art creation</button>
                        <button>3d modelling</button>
                        <button>texturing</button>
                    </div>
                </div>

                <div className={styles.infoBlock}>
                    <h1 className={styles.title}>Samsung R&D center</h1>
                    <div className={styles.details}>
                        <span className={styles.detailsItem}>april 2011 - march 2018</span>
                        <span className={styles.detailsItem}>3d artist</span>
                    </div>
                    <div className={styles.additional}>
                        <button>character creation</button>
                        <button>3d modelling</button>
                        <button>texturing</button>
                        <button>rendering</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Work