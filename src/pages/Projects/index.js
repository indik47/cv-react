import React from 'react'
import styles from './styles.css'
import InfoBlock from "../../components/InfoBlock";
import {
  faCalendarAlt,
  faCertificate,
  faLanguage,
  faSignLanguage,
  faUniversity
} from "@fortawesome/free-solid-svg-icons/index";

class Projects extends React.Component {

  render() {
    const {projects} = this.props;

    return (
      <div className={styles.outer}>
        {projects.map (project => {
          return <InfoBlock title={ {text: project.name, icon: faUniversity, href:project.hostedHref} }
                            detailsItems={ [
                              {text:project.hostedName, icon:faCertificate, href:project.hostedHref},
                              {text:project.repoName, icon:faCertificate, href:project.repoHref}] }
                            tags={project.tags}/>
        })
        }

      </div>
    )
  }
}

export default Projects