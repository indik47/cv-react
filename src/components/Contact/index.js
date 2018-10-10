import React from 'react'
import styles from './styles.css'

class Contacts extends React.Component {

  render() {
    const {contact} = this.props;

    return (
      <div className={styles.contact}>
        <span className={styles.type}>{contact.type}</span>
        {contact.payload.includes('http')?
          <a href={contact.payload}><span className={styles.payload}>{contact.payload}</span></a>
          :
          <span className={styles.payload}>{contact.payload}</span>
        }
      </div>
    )
  }
}

export default Contacts