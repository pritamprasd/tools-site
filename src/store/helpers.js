import React from 'react'
import GithubSummary from "../tools/github_summary/GithubSummary";
import SettingsPage from '../tools/site-settings/SettingsPage';
import { appConfig } from '../appConfig';

export function getToolFromToolId(toolId){
    switch (toolId) {
        case "github_summary":
            return <GithubSummary />    
        case "site_settings":
            return <SettingsPage />             
        default:
            return <div>404</div>;
    }
}

export function getToolConfigByToolId(toolId){
    const tool = appConfig.toolsList.filter(t => t.id === toolId)
    return tool[0].config
}
