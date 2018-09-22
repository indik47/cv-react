import React from 'react';
import { Link } from 'react-router-dom'

import styles from './styles.css';
import MyPhoto from '../../assets/myphoto.jpg';

class Profile extends React.Component {
    onClick = () => {
        window.location.href = "contacts";
    };

    render() {
        const { userData } = this.props;
        return (
            <React.Fragment>
                <div className={styles.outer}>
                    <div className={styles.innerRow}>
                        <div className={styles.innerColumn}>
                            <img className={styles.avatar} src={MyPhoto} alt="my avatar"/>
                        </div>
                        <div className={`${styles.innerColumn} ${styles.info}`}>
                            <h1>{userData.name}</h1>
                            <div className={styles.social}>
                                {/*//TODO Replace <a>`s with icons?*/}
                                <div><a href={userData.github} target="_blank"> Github </a></div>
                                <div><a href={userData.linkedIn} target="_blank"> LinkedIn </a></div>
                                <div><a href={userData.faceBook} target="_blank"> FaceBook </a></div>
                            </div>
                            <div className={styles.position}>{userData.position}</div>
                            <div className={styles.about}>"{userData["About me"]}"</div>
                            <div className={styles.contacts}>
                                {/*TODO Use Link here instead of button?*/}
                                <button onClick={this.onClick}>Contact me</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.outer}>
                    <div className={`${styles.innerRow} ${styles.skills}`}>
                        {
                            userData["Technical skills"].map((item, index) => {
                                {/*TODO Wrap this into a component*/}
                                {/*TODO Duplicate progressFill CSS classes to make them colored and different length*/}
                                {/*TODO Re-render component every 2-3 sec to get "bar filling" effect*/}
                                return (
                                    <div className={styles.skills__item}>
                                        <div className={styles.skills__text} key={index}> {item} </div>
                                        <div className={styles.skills__progressBackground}>
                                            <div className={styles.skills__progressFill}>    </div>
                                        </div>
                                    </div>
                                        )
                            })
                        }
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default Profile;