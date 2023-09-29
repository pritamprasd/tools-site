import React, { useEffect, useState } from 'react'
import './GithubSummary.css';
import '../../App.css'
import useGlobalState, { GlobalStateNames } from '../../store/store';
import { getToolConfigByToolId } from '../../store/helpers';
import { addAllProjectInfoToDBByUsername, getAllReposByUsernameFromDB } from '../../storage/indexdb/github_summary_tool';
import { getRepoInfoAndSaveToDb } from '../../apis/github_apis';
import Loading from '../../components/loading/Loading';
import { ProjectModal, ProjectTile } from './ProjectTile';

const toolId = "github_summary"

async function getProjectSyncWithDB(username) {
  var projects = await getAllReposByUsernameFromDB(username);
  if (projects == null || projects.length < 1) {
    console.log(`Username: ${username} not found in db.`);
    const all_projects = await getRepoInfoAndSaveToDb(username);
    addAllProjectInfoToDBByUsername(all_projects, username);
  }
  projects = await getAllReposByUsernameFromDB(username);
  return projects;
}

export default function GithubSummary() {
  const [username, setUsername] = useGlobalState(GlobalStateNames.git_username);
  const [usernameLastTyped, setUserNameLastTyped] = useState(getToolConfigByToolId(toolId).default_username);
  const [projects, setProjects] = useState([]);
  const [loading, setloading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeProject, setactiveProject] = useState({});

  function toggleShowModal() {
    console.log(`showModal: ${!showModal}`)
    setShowModal(!showModal);
  }

  function setActiveProjectAndReload(p) {
    setactiveProject(p)
    toggleShowModal()
  }

  useEffect(() => {
    async function update_projects() {
      setloading(true)
      var projects = await getProjectSyncWithDB(username);
      setProjects(projects);
      setloading(false);
    }
    update_projects();
  }, [username]);

  function updateUsername(e) {
    setUserNameLastTyped(e.target.value);
    if (e.key === 'Enter' || e.keyCode === 13) {
      setUsername(e.target.value);
    }
  }
  return (
    <div className="githubsummarycontainer">
      {showModal &&
        <ProjectModal toggleShowModal={toggleShowModal} project={activeProject} />
      }
      {!showModal &&
        <div>
          <div className="header">
            <div style={{ fontSize: 'large' }}>Username: </div>
            <input className="usernameinput" type='text' onKeyUp={updateUsername} />
            <div className="searchbutton" onClick={() => setUsername(usernameLastTyped)}>
              <img src='/icons/search.svg' alt="search" /></div>
          </div>
          <div className="content">
            {!loading && projects.map(p =>
              <ProjectTile key={p['reponame']} project={p} setActiveProject={setActiveProjectAndReload} />)
            }
            {loading && <Loading />}
          </div>
        </div>
      }
    </div>
  )
}