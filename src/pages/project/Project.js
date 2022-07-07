import { useParams } from "react-router-dom"
import { useDocument } from '../../hooks/useDocument'

//components
import ProjectSummary from "./ProjectSummary"
import ProjectComment from "./ProjectComment"

// styles
import './Project.css'


export default function Project() {
  const { id } = useParams()
  const { error, document } = useDocument('projects', id)

  if (error) {
    return <div className="error">{error}</div>
  }
  if (!document) {
    return <div className="loading">Loading...</div>
  }
  console.log({document})
  return (
    <div className="project-details">
      <ProjectSummary project={document} />
      <ProjectComment project = {document}/>
    
    </div>
  )
}