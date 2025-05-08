import dataStore from './data-store.js';
function createTile(id) {
    const tile = document.createElement("div");
    tile.className = "w-4/5 bg-blue-100 rounded-xl p-4 shadow mb-4 flex justify-between items-center";
    tile.id = `tile-${id}`;
    tile.innerHTML = `
      <span>${id}</span>
    `;
    return tile;
  }

document.addEventListener("DOMContentLoaded", function() {
    const bible_browser = document.getElementById("tile-container");
    
    // Register for data notification
  dataStore.onDataReady(items => {
    console.log("Data is now available!");
    
    // Now we can safely work with the items array
    
      for(let verse of items.chapter.content){
        
        if(verse.content[0].wordsOfJesus == undefined){
            const tile = createTile(verse.content[0]);
            bible_browser.appendChild(tile);
        } else {
            const tile = createTile(verse.content[0].text);
            bible_browser.appendChild(tile);
        }
        
        console.log(verse.content[0].text);
    
    }
    
  }); 
        

    console.log("bible-browser.html");

});