import Dexie from 'dexie';

class IndexedDBService {
  constructor(databaseName) {
    this.db = new Dexie(databaseName);
    this.initializeDatabase();
  }

  initializeDatabase() {
    this.db.version(1).stores({
      data: '++id, name, age',
    });
  }

  async createEntry(entry) {
    try {
      const id = await this.db.data.add(entry);
      return id;
    } catch (error) {
      throw new Error(`Error creating entry: ${error}`);
    }
  }

  async updateEntry(id, updatedEntry) {
    try {
      await this.db.data.update(id, updatedEntry);
    } catch (error) {
      throw new Error(`Error updating entry: ${error}`);
    }
  }

  async deleteEntry(id) {
    try {
      await this.db.data.delete(id);
    } catch (error) {
      throw new Error(`Error deleting entry: ${error}`);
    }
  }

  async readEntry(id) {
    try {
      const entry = await this.db.data.get(id);
      return entry;
    } catch (error) {
      throw new Error(`Error reading entry: ${error}`);
    }
  }

  async readAllEntries() {
    try {
      const entries = await this.db.data.toArray();
      return entries;
    } catch (error) {
      throw new Error(`Error reading all entries: ${error}`);
    }
  }
}

export default IndexedDBService;
