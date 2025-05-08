// consumer.js
// This file uses the data once it's available (works on any page)

/*
******************* THIS IS A TEMPLATE FILE FOR  MAKING VIEW CONTROLLERS IN THIS APP*******************
*/

import dataStore from './data-store.js';

document.addEventListener("DOMContentLoaded", function() {
  console.log("Consumer initialized");
  
  // Register for data notification
  dataStore.onDataReady(items => {
    console.log("Data is now available!");
    
    // Now we can safely work with the items array
    if (document.getElementById('items-container')) {
      displayItems(items);
    }
    
    if (document.getElementById('total')) {
      processItems(items);
    }
  });
  
  function displayItems(items) {
    const container = document.getElementById('items-container');
    container.innerHTML = ''; // Clear existing content
    
    items.forEach(item => {
      const element = document.createElement('div');
      element.textContent = item.name;
      container.appendChild(element);
    });
  }
  
  function processItems(items) {
    const total = items.reduce((sum, item) => sum + (item.value || 0), 0);
    document.getElementById('total').textContent = `Total: ${total}`;
  }
});