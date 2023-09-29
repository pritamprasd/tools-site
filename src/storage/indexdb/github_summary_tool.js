import db from ".";

export async function addGithubRepository(username, repo, topics, url, created_at, forks, open_issues, watchers, description) {
    console.log(`Saving project row for repo: ${repo}`);
    const projectInfo = {
        username: username,
        reponame: repo,
        topics: topics,
        url: url,
        created_at: created_at,
        forks: forks,
        open_issues: open_issues,
        watchers: watchers,
        description: description
    }
    await db.github_projects.where("username").equals(username).delete().then(
        function (deleteCount) {
            console.log("Deleted " + deleteCount + " objects");
        });
    await db.github_projects.add(projectInfo);
}

export async function getAllRepoBy(username, tags = null) {
    var projects = await db.github_projects.where('username').equalsIgnoreCase(username).toArray();
    if (tags == null) {
        return projects;
    } else {
        const filtered = projects.map(p => p['topics'].filter(v => tags.includes(v)).length > 0);
        console.log(`filtered: ${filtered}`)
        return filtered;
    }
}