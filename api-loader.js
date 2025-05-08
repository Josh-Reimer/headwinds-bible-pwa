// api-loader.js
// This file is responsible for fetching the data if needed

import dataStore from './data-store.js';

document.addEventListener("DOMContentLoaded", function() {
  // Only fetch if data isn't already loaded from localStorage
  if (!dataStore.isLoaded) {
    console.log("Data not found in localStorage. Loading from API...");
    
    fetch('https://bible.helloao.org/api/eng_kjv/MAT/5.json')
      .then(response => response.json())
      .then(data => {
        dataStore.setData(data);
        console.log("Data loaded from API and stored in localStorage");
      })
      .catch(error => {
        console.error("Failed to load data:", error);
      });
  } else {
    console.log("Using data from localStorage, no API call needed");
  }
});