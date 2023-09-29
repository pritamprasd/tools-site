import Dexie from "dexie";

const db = new Dexie("pritam.dev");
db.version(5).stores({
    github_projects: "++id, username, reponame, *topics",
    // file_storage: "++id, &key, *tags, filename, type, blob"
});
export default db;

export async function getAllTableNames() {
    return await db.tables;
}