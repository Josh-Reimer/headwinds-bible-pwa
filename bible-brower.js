function createTile(id) {
    const tile = document.createElement("div");
    tile.className = "w-4/5 bg-blue-100 rounded-xl p-4 shadow mb-4 flex justify-between items-center";
    tile.id = `tile-${id}`;
    tile.innerHTML = `
      <span>Tile ${id}</span>
      <button onclick="removeTile(${id})" class="text-red-500 hover:underline">Remove</button>
    `;
    return tile;
  }
  
document.addEventListener("DOMContentLoaded", function() {
    const bible_browser = document.getElementById("tile-container");
    for(let verse of chapter_text){
        const tile = createTile(verse);
        bible_browser.appendChild(tile);
        console.log(verse);
    }
        
        

    console.log("bible-browser.html");

});