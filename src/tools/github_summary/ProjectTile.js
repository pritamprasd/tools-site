import './GithubSummary.css';
import React from 'react'

export function ProjectTile({ project, setActiveProject }) {
    const cre_date = new Date(project['created_at']);
    return (
        <div className="projecttile" onClick={() => setActiveProject(project)}>
            <div className="projecttitle">{project['reponame']}</div>
            <div className="projectdesc">{project['description']}</div>
            <ProjectTopics topics={project['topics']} />
            <div className="watchers">Watchers: {project['watchers']}</div>
            <div className="created_date">Created: {cre_date.getFullYear()}-{cre_date.getMonth() + 1}-{cre_date.getDate()}</div>
        </div>
    );
}

export function ProjectModal({ toggleShowModal, project }) {
    return (
        <div className="modal" tabIndex="-1" style={{ display: 'block' }}>
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header custom-overlay">
                        <h5 className="modal-title custom-overlay">{project['reponame']}</h5>
                        <button type="button" className="btn-close btn-close-white" onClick={toggleShowModal} />
                    </div>
                    <div className="modal-body custom-overlay custom-card">
                        <div>Repository Name: <b>{project['reponame']}</b></div>
                        <div style={{ fontSize: 'smaller' }}>{project['description']}</div>
                        {project['topics'].length !== 0 && <div>Topics: <b>{project['topics'].map(t => t + ", ")}</b></div>}
                        <div style={{ fontSize: 'small' }}>Created: {project['created_at']}</div>
                        <div style={{ fontSize: 'small' }}>Watchers: {project['watchers']} &#x1F464;</div>
                        <a style={{ fontSize: 'small' }} href={project['url']}>{project['url']}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
function ProjectTopics({ topics }) {
    return (
        <div className="topicscontainer">
            {topics.map(t => `#${t}, `)}
        </div>
    )
}