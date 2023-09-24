const btnLoadNews = document.getElementById('btnLoadNews');
const newsFlash = document.getElementById('newsFlash');

let newsFeed = [];
var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            newsFeed = JSON.parse(xhr.responseText);
        }
    }
xhr.open('GET', 'articles.json');
xhr.send();

function loadNews() {
    let output;
    let numRows = Math.ceil(newsFeed.length / 3);
    let counter = 0;
    for(var i = 0; i < numRows; i++) {
        for(var j = 0; counter < newsFeed.length && j < 3; j++) { 
            //
            //Add ouput to newsFlash here
            //
        }
    }
    newsFlash.innerHTML = output;
};