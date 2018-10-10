import React from 'react'
import styles from './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

InfoBlock.propTypes = {
  title: PropTypes.string.isRequired,
  icons: PropTypes.instanceOf(Array).isRequired,
  detailsItems: PropTypes.instanceOf(Array).isRequired,
  tags: PropTypes.instanceOf(Array).isRequired,
};

function InfoBlock(props) {
  const {title, detailsItems, tags} = props;

  return (
    <div className={styles.infoBlock}>
      <div className={styles.title}>
        <FontAwesomeIcon icon={title.icon} size="2x"/>
        {title.href ?
          <a href={title.href} target="_blank">
            <h1 className={styles.titleLink}>{title.text}</h1>
          </a>
          :
          <h1 className={styles.titleNoLink}>{title.text}</h1>
        }
      </div>
      <div className={styles.details}>
        {detailsItems.map(item => {
          return (
            <div className={styles.detailsItem}>
              {item.href ?
                <a href={item.href} target="_blank">
                  <FontAwesomeIcon icon={item.icon} size="2x"/>
                  <span>{item.text}</span>
                </a>
                :
                <React.Fragment>
                  <FontAwesomeIcon icon={item.icon} size="2x"/>
                  <span>{item.text}</span>
                </React.Fragment>
              }
            </div>)
        })}
      </div>
      {tags ?
        <div className={styles.additional}>
          {tags.map(tag => <button>{tag}</button>)}
        </div>
        : null
      }

    </div>)
}



export default InfoBlock
