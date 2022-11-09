//Quote Generator API
//https://api.quotable.io/random

let quote = document.querySelector('.quote')
let author = document.querySelector('.author')
let btn = document.querySelector('.generate_btn')

const url = "https://api.quotable.io/random"

let getRandomQuote =  () =>{
    fetch(url)
    .then((data) => data.json())
    .then((item) =>{
        quote.innerText = item.content;
        author.innerText = item.author;
    })
}


window.addEventListener("load", getRandomQuote);

btn.addEventListener("click", getRandomQuote)