import React from 'react'
import { appConfig } from '../appConfig';
import TaskPlanner from '../tools/task_planner/TaskPlanner';
import CryptoGen from '../tools/crypto_generator/CryptoGen';

const GithubSummary = React.lazy(() => import("../tools/github_summary/GithubSummary"))
const SettingsPage = React.lazy(() => import("../tools/site-settings/SettingsPage"))
const Pretify = React.lazy(() => import("../tools/prettify/Pretify"))
const ImageClassifier = React.lazy(() => import("../tools/image_classifier/ImageClassifier"))

export function getToolFromToolId(toolId) {
    switch (toolId) {
        case "github_summary":
            return <GithubSummary />
        case "site_settings":
            return <SettingsPage />
        case "pretify":
            return <Pretify />
        case "image_classifier":
            return <ImageClassifier />
        case "task_planner":
            return <TaskPlanner />
        case "crypto_generators":
            return <CryptoGen />
        default:
            return <div>404</div>;
    }
}

export function getToolConfigByToolId(toolId) {
    const tool = appConfig.toolsList.filter(t => t.id === toolId)
    return tool[0].config
}
