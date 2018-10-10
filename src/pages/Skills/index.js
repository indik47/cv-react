import React from 'react'
import styles from './styles.css'
import SkillList from "../../components/SkillList";

class Skills extends React.Component {

  render() {
    const {main, additional} = this.props.skills;

    return (
      <div className={styles.outer}>
        <div className={styles[`skills__inner`]}>
          <SkillList skills={main} className='main__skills'/>
          <SkillList skills={additional} className='additional__skills'/>
        </div>
      </div>
    )
  }
}

export default Skills