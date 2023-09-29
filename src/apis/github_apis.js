import { checkResponse } from "./helper";

const base_url = "https://api.github.com"

export async function getRepoInfoAndSaveToDb(user){
    const url = `${base_url}/users/${user}/repos`;
    const all_projects = await fetch(url)
                            .then(checkResponse)
                            .then(r => {
                                const res = r.json()
                                console.log(`Github API response: ${JSON.stringify(res)}`)
                                return res
                            })
                            .catch(e => alert(`Github API Error:  + ${e}`));
    return all_projects   
}
