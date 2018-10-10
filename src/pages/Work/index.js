import React from 'react'
import styles from './styles.css'
import InfoBlock from "../../components/InfoBlock";
import {faCalendarAlt, faCertificate, faUniversity} from "@fortawesome/free-solid-svg-icons/index";

class Work extends React.Component {
  
  render() {
    const {workplaces} = this.props;

    return (
      <div className={styles.outer}>
        {workplaces.map (workplace => {
          return <InfoBlock title={ {text: workplace.name, icon: faUniversity, href:workplace.href} }
                            detailsItems={ [{text:workplace.position, icon:faCertificate},{text:workplace.period, icon:faCalendarAlt}] }
                            tags={workplace.tags}/>
        })
        }

      </div>
    )
  }
}

export default Work