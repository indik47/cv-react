import React from 'react';
import {Link} from 'react-router-dom'
import styles from './styles.css';
import MyPhoto from '../../assets/myphoto02.png';
import SkillList from "../../components/SkillList";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

class Profile extends React.Component {

  Avatar = () => {
    return (
      <div className={styles.innerColumn}>
        <img className={styles.avatar} src={MyPhoto} alt="my avatar"/>
      </div>
    )
  };

  Icon = (props) => {
    const {userData} = this.props;
    const {data, icon} = props;

    return (
      <a href={userData[data]} target="_blank" >
        <FontAwesomeIcon icon={icon}
                         size="2x"/>
      </a>
    )
  };

  Position = () => {
    const {userData} = this.props;

    return (
      <div className={styles.position}>{userData.position}</div>
    )
  };

  AboutMe = () => {
    const {userData} = this.props;

    return (
      <div className={styles.about}>{userData["About me"]}</div>
    )
  };

  Button = (props) => {
    return (
      <div className={styles["button__link"]}>
        <Link to={props.linkTo} className={styles[`contacts__link`]}>
          {props.text}
        </Link>
      </div>
    )
  };

  render() {
    const {main: mainSkills} = this.props.userData["Technical skills"];
    const {userData} = this.props;
    const {Avatar, Icon, Position, AboutMe, Button} = this;

    return (
      <main>
        <div className={styles.outer}>
          <div className={styles.innerRow}>
            <Avatar/>
            <div className={`${styles.innerColumn} ${styles.info}`}>
              <h1>{userData.name}</h1>

              <div className={styles.social}>
                <Icon data='github' icon={faGithubSquare}/>
                <Icon data='linkedIn' icon={faLinkedin}/>
                <Icon data='faceBook' icon={faFacebookSquare}/>
              </div>

              <Position/>
              <AboutMe/>
              <Button text='Contact me' linkTo="/contacts"/>

            </div>
          </div>
        </div>
        <SkillList skills={mainSkills} className='profile__skills'/>
        <Button text="more..." linkTo="/skills"/>
      </main>
    )
  }
}

export default Profile;