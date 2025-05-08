// data-store.js
// This module will manage shared data with localStorage persistence

const DATA_STORAGE_KEY = 'app_shared_data';
const LOADED_FLAG_KEY = 'app_data_loaded';

const dataStore = {
  items: [],
  isLoaded: false,
  listeners: [],
  
  // Initialize store by checking localStorage
  init() {
    // Check if we have stored data
    const storedData = localStorage.getItem(DATA_STORAGE_KEY);
    const isDataLoaded = localStorage.getItem(LOADED_FLAG_KEY) === 'true';
    
    if (storedData && isDataLoaded) {
      try {
        this.items = JSON.parse(storedData);
        this.isLoaded = true;
        console.log("Data loaded from localStorage");
      } catch (e) {
        console.error("Failed to parse stored data:", e);
        this.isLoaded = false;
      }
    }
  },
  
  // Set data, store in localStorage, and notify listeners
  setData(newData) {
    this.items = newData;
    this.isLoaded = true;
    
    // Persist to localStorage
    try {
      localStorage.setItem(DATA_STORAGE_KEY, JSON.stringify(this.items));
      localStorage.setItem(LOADED_FLAG_KEY, 'true');
    } catch (e) {
      console.error("Failed to store data in localStorage:", e);
    }
    
    this.notifyListeners();
  },
  
  // Clear data (useful for logout/reset)
  clearData() {
    this.items = [];
    this.isLoaded = false;
    localStorage.removeItem(DATA_STORAGE_KEY);
    localStorage.removeItem(LOADED_FLAG_KEY);
  },
  
  // Register callbacks for when data is ready
  onDataReady(callback) {
    if (this.isLoaded) {
      // If data is already loaded, execute callback immediately
      callback(this.items);
    } else {
      // Otherwise store the callback for later execution
      this.listeners.push(callback);
    }
  },
  
  // Notify all registered listeners
  notifyListeners() {
    this.listeners.forEach(callback => callback(this.items));
    // Clear listeners after notifying them
    this.listeners = [];
  }
};

// Initialize on module load
dataStore.init();

export default dataStore;
