import React from 'react'
import GithubSummary from "../tools/GithubSummary";
import SettingsPage from '../tools/site-settings/SettingsPage';

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