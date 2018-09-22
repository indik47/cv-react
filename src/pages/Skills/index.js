import React from 'react'
import styles from './styles.css'

class Skills extends React.Component {

    render() {
        
        const {skills} = this.props;

        return (
            <div className={styles.outer}>
                {skills.map( (item, index) => {
                        return (
                            <div className={styles.skills__item}>
                                <div className={styles.skills__text} key={index}> {item} </div>
                                <div className={styles.skills__progressBackground}>
                                    {/*//TODO generate additional color classes eg: ${styles.blue}, ${styles.red}, ${styles.orange} etc. */}
                                    <div className={`${styles.skills__progressFill} ${styles.blue}`}/>
                                </div>
                            </div>
                        )
                    })}
            </div>
        )
    }
}

export default Skills