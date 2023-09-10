import GithubSummary from "../tools/GithubSummary";

export function getToolFromToolId(toolId){
    switch (toolId) {
        case "github_summary":
            return <GithubSummary />                
        default:
            return <div>404</div>;
    }
}