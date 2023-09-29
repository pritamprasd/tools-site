import db from ".";

export async function addAllProjectInfoToDBByUsername(all_projects, username){
    await Promise.all(
        all_projects.map(async(p) => 
            {
                const projectInfo = {
                    username: username,
                    reponame: p['name'],
                    topics: p['topics'],
                    url: p['html_url'],
                    created_at:  p['created_at'],
                    forks: p['forks'],
                    open_issues: p['open_issues'],
                    watchers: p['watchers'],
                    description: p['description']
                }
                await db.github_projects
                        .where("username")
                        .equals(username)
                        .delete()
                        .then(function (deleteCount) {console.log("Deleted " + deleteCount + " objects");});
                await db.github_projects.add(projectInfo);
            }
        )
    ); 
}

export async function getAllReposByUsernameFromDB(username, tags = null) {
    var projects = await db.github_projects
        .where('username')
        .equalsIgnoreCase(username)
        .toArray();
    return projects
}

export async function purgeTable() {
    db.github_projects.clear();
}