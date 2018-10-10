import React from 'react'
import Skill from "../../components/Skill";
import styles from './styles.css'

function SkillList(props) {
  const {skills, className} = props;

  return (
    <div className={styles[className]} >

      {skills.map((item, index) => {
        return (
          <Skill text={item.skill} skillLevel={item.level} key={index}/>
        )
      })}
    </div>
  )
}

export default SkillList