class LocalStorageService {
    static setItem(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(`Error writing to localStorage: ${error}`);
      }
    }
  
    static getItem(key, defaultValue) {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
      } catch (error) {
        console.error(`Error reading from localStorage: ${error}`);
        return defaultValue;
      }
    }
  
    static removeItem(key) {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.error(`Error removing from localStorage: ${error}`);
      }
    }
  }
  
  export default LocalStorageService;
  