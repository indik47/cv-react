import React from 'react'
import styles from './styles.css'

class Education extends React.Component{
    render () {
        return (
            <div className={styles.outer}>
                <div className={styles.infoBlock}>
                    <h1 className={styles.title}>NTUU Kyiv Polytechnic</h1>
                    <div className={styles.details}>
                        <span className={styles.detailsItem}>Specialist</span>
                        <span className={styles.detailsItem}>2003-2009</span>
                    </div>
                    <div className={styles.additional}>
                        <button>someTxt</button>
                        <button>someTxt</button>
                        <button>someTxt</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Education