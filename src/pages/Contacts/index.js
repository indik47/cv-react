import React from 'react'
import styles from './styles.css'
import Contact from '../../components/Contact'

class Contacts extends React.Component {
  render() {
    const {contacts} = this.props;

    return (
      <div className={styles.outer}>
        {contacts.map(contact => {
          return (<Contact contact={contact}/>)
        })}
      </div>
    )
  }
}

export default Contacts