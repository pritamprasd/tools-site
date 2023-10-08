import Dexie from "dexie";

const db = new Dexie("pritam.dev");

db.version(6).stores({
    github_projects: "++id, username, reponame, *topics",
    // file_storage: "++id, &key, *tags, filename, type, blob"
});
export default db;

export async function getAllTables() {
    return await db.tables;
}

export async function purgeTableByName(tableName) {
    switch (tableName) {
        case "github_projects":            
            await db.github_projects.clear()
            break;    
        default:
            break;
    }

}

export async function purgeAllTable() {
    await db.github_projects.clear();
}