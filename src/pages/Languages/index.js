import React from 'react'
import styles from './styles.css'
import InfoBlock from "../../components/InfoBlock";
import {faLanguage, faSignLanguage} from "@fortawesome/free-solid-svg-icons/index";

class Languages extends React.Component {

  render() {
    const {languages} = this.props;

    return (
      <div className={styles.outer}>
        {languages.map (language => {
          return <InfoBlock title={ {text: language.name, icon: faLanguage} }
                            detailsItems={ [{text:language.level, icon:faSignLanguage}] }
                            />
        })
        }

      </div>
    )
  }
}

export default Languages