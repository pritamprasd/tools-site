import { addGithubRepository } from "../storage/indexdb/github_summary_tool";
import { checkResponse } from "./helper";

const base_url = "https://api.github.com"

export async function getRepoInfoAndSaveToDb(user){
    console.log(`Calling github API...`);
    const url = `${base_url}/users/${user}/repos`;
    const all_projects = await fetch(url)
                            .then(checkResponse)
                            .then(r => r.json())
                            .catch(e => alert(`Error:  + ${e}`));
    await Promise.all(
        all_projects.map(async(p) => 
            await addGithubRepository(user, p['name'], p['topics'], p['html_url'], p['created_at'], p['forks'], p['open_issues'], p['watchers'], p['description'])
        )
    );    
}
