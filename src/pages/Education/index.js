import React from 'react'
import styles from './styles.css'
import InfoBlock from "../../components/InfoBlock";

import {faCalendarAlt, faCertificate, faUniversity} from "@fortawesome/free-solid-svg-icons/index";


class Education extends React.Component{
    render () {
        const {education} = this.props;

      return (
            <div className={styles.outer}>

              {education.map (item => {
                  return (<InfoBlock title={ {text: item.name, icon: faUniversity, href:'https://google.com'} }
                                     detailsItems={ [{text:item.dates, icon:faCalendarAlt},{text:item.details, icon:faCertificate}] }
                                     tags={item.tags}/>)

            })}

            </div>
        )
    }
}

export default Education