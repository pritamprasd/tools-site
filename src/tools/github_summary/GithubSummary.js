import React, { useEffect, useState } from 'react'
import './GithubSummary.css';
import useGlobalState, { GlobalStateNames } from '../../store/store';
import { getToolConfigByToolId } from '../../store/helpers';
import { getAllRepoBy } from '../../storage/indexdb/github_summary_tool';
import { getRepoInfoAndSaveToDb } from '../../apis/github_apis';
import Loading from '../../components/loading/Loading';

const toolId = "github_summary"

export default function GithubSummary() {
  const [username, setUsername] = useGlobalState(GlobalStateNames.git_username);
  const [liveUsername, setLiveUsername] = useState(getToolConfigByToolId(toolId).default_username);
  const [projects, setProjects] = useState([]);
  const [loading, setloading] = useState(false)
  useEffect(() => {
      async function update_projects() {
          setloading(true)
          var projects = await getAllRepoBy(username);
          if (projects == null || projects.length < 1) {
              console.log(`Username: ${username} not found in db.`)
              await getRepoInfoAndSaveToDb(username);
          }
          projects = await getAllRepoBy(username);
          setProjects(projects);
          setloading(false);
      }
      update_projects();
  }, [username]);
  // useEffect(() => {
  //     console.log(`projects: ${JSON.stringify(projects)}`);
  // }, [projects]);

  function onInputChange(e) {
      setLiveUsername(e.target.value);
      if (e.key === 'Enter' || e.keyCode === 13) {
          setUsername(e.target.value);
      }
  }
  return (
      <div className="githubsummarycontainer">
          <div className="header">
              <div style={{ fontSize: 'large' }}>Username: </div>
              <input className="usernameinput" type='text' onKeyUp={onInputChange} />
              <div className="searchbutton" onClick={() => setUsername(liveUsername)}><img src='/icons/search.svg' alt="search"/></div>
          </div>
          <div className="content">
              {!loading && projects.map(p => <ProjectTile key={p['reponame']} project={p} />)}
              {loading && <Loading/>}
          </div>
      </div>
  )
}
function ProjectTile({ project }) {
  const cre_date = new Date(project['created_at']);
  const [showModal, setShowModal] = useState(false);
  function toggleShowModal(){
      setShowModal(!showModal);
  }
  return (
      <div className="projecttile" onClick={toggleShowModal}>
          {showModal && <ProjectModal toggleShowModal={toggleShowModal} project={project}/>}
          <div className="projecttitle">{project['reponame']}</div>
          <div className="projectdesc">{project['description']}</div>
          <ProjectTopics topics={project['topics']} />
          <div className="watchers">Watchers: {project['watchers']}</div>
          <div className="created_date">Created: {cre_date.getFullYear()}-{cre_date.getMonth() + 1}-{cre_date.getDate()}</div>
      </div>
  );
}

function ProjectTopics({ topics }) {
  return (
      <div className="topicscontainer">
          {topics.map(t => <div key={t}>{t}</div>)}
      </div>
  )
}

function ProjectModal({ toggleShowModal, project }) {
  function closeButtoonClicked(){
      toggleShowModal();
  }
  return (
      <div>
          <div className="darkBG" onClick={closeButtoonClicked} />
          <div className="modal">
              <div className="modalHeader">
                  <div className="heading">{project['reponame']}</div>                    
              </div>
              <div className="closeBtn" onClick={closeButtoonClicked}>
                  <img src='/icons/close.svg' style={{ marginBottom: "-3px" }} alt ="close"/>
              </div>
              <div className="modalContent">
                  {Object.keys(project).map(k => <div>{k} : {project[k]}</div>)}
              </div>
          </div>
      </div>
  )
}