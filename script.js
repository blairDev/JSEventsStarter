let counter = 0;

const btnLoadNews = document.getElementById('btnLoadNews');

const newsheader1 = document.getElementById('newsHeader1');
const newsheader2 = document.getElementById('newsHeader2');
const newsheader3 = document.getElementById('newsHeader3');

const newsbrief1 = document.getElementById('newsBrief1');
const newsbrief2 = document.getElementById('newsBrief2');
const newsbrief3 = document.getElementById('newsBrief3');

const newsurl1 = document.getElementById('newsUrl1');
const newsurl2 = document.getElementById('newsUrl2');
const newsurl3 = document.getElementById('newsUrl3');

//use AJAX to read JSON file
//-----------------------------
var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            newsFeed = JSON.parse(xhr.responseText);
        }
    }
xhr.open('GET', 'articles.json');
xhr.send();
//-----------------------------

function loadNews() {

    if(counter % 2 == 0) {
            
        newsheader1.innerHTML = newsFeed[0].header;
        newsbrief1.innerHTML = newsFeed[0].brief;
        newsurl1.href = newsFeed[0].url;
        newsurl1.innerHTML = newsFeed[0].tag;

        newsheader2.innerHTML = newsFeed[1].header;
        newsbrief2.innerHTML = newsFeed[1].brief;
        newsurl2.href = newsFeed[1].url;
        newsurl2.innerHTML = newsFeed[1].tag;

        newsheader3.innerHTML = newsFeed[2].header;
        newsbrief3.innerHTML = newsFeed[2].brief;
        newsurl3.href = newsFeed[2].url;
        newsurl3.innerHTML = newsFeed[2].tag;

    } else {
            
        newsheader1.innerHTML = newsFeed[3].header;
        newsbrief1.innerHTML = newsFeed[3].brief;
        newsurl1.href = newsFeed[3].url;
        newsurl1.innerHTML = newsFeed[3].tag;

        newsheader2.innerHTML = newsFeed[4].header;
        newsbrief2.innerHTML = newsFeed[4].brief;
        newsurl2.href = newsFeed[4].url;
        newsurl2.innerHTML = newsFeed[4].tag;

        newsheader3.innerHTML = newsFeed[5].header;
        newsbrief3.innerHTML = newsFeed[5].brief;
        newsurl3.href = newsFeed[5].url;
        newsurl3.innerHTML = newsFeed[5].tag;
    
    }

    counter++;
};

btnLoadNews.addEventListener('click', loadNews);