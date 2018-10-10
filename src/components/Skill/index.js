import React from 'react'
import styles from './styles.css'
import classNames from 'classnames';

class Skill extends React.Component {


render() {
    let {text, skillLevel} = this.props;

    const progress = classNames(
      styles.progressFill,
      { [styles.red]: skillLevel < 60 },
      { [styles.orange]: skillLevel >= 60 && skillLevel < 70 },
      { [styles.purple]: skillLevel >= 70 && skillLevel < 80 },
      { [styles.blue]: skillLevel >= 80 && skillLevel < 90 },
      { [styles.green]: skillLevel >= 90 },
      );

    return (
      <div className={styles.item}>
        <div className={styles.text}> {text} </div>
        <div className={styles.progressBackground}>
          <div className={progress}/>
        </div>
      </div>
    )
  }
}

export default Skill