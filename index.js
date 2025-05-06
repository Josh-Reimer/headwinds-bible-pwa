//get the list of books for the kjv translation
/*
fetch('https://bible.helloao.org/api/eng_kjv/books.json')
    .then(request => request.json())
    .then(books => {
        //console.log("kjv english bible has these books: ", books);
        console.log(books.books);
        for(let book of books.books){
            console.log(book.name);
        }
    })
*/
const verse_view = document.getElementById("verse-to-show");
fetch('https://bible.helloao.org/api/eng_kjv/MAT/5.json')
    .then(request => request.json())
    .then(chapter => {
        //console.log('genesis 1 kjv',chapter);
        console.log(chapter.chapter.content[0].content);
        verse_view.innerText = chapter.chapter.content[0].content;
        /*
        for(let chap of chapter.chapter.content){
            console.log(chap.content);
        }
        */
    })



/*      other langugages besides english        */

/*
fetch('https://bible.helloao.org/api/fra_lsg/books.json')
.then(request => request.json())
.then(books => {
  //console.log("kjv english bible has these books: ", books);
  console.log(books.books);
  for (let book of books.books) {
    console.log(book.name);
  }
})

fetch('https://bible.helloao.org/api/fra_lsg/MAT/5.json')
.then(request => request.json())
.then(chapter => {
  //console.log('genesis 1 kjv',chapter);
  console.log(chapter.chapter.content[0].content);
  for (let chap of chapter.chapter.content) {
    console.log(chap.content);
  }
})
*/