import React from 'react';
import styles from './styles.css'


class Languages extends React.Component{
    render () {
        const { languages } = this.props;
        return (
            <div className={styles.outer}>

                {languages.map((item, index) => {
                    return <div key={index}>
                        <div className={styles.infoBlock}>
                            <h1 className={styles.title}>{Object.keys(item)[0]}</h1>
                            <div className={styles.details}>
                                <span className={styles.detailsItem}>{Object.values(item)[0]}</span>
                            </div>
                            <div className={styles.additional}>
                                <button>someTxt</button>
                                <button>someTxt</button>
                                <button>someTxt</button>
                            </div>
                        </div>
                    </div>
                })}



            </div>
        )
    }
}

export default Languages



