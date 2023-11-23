let quotes= [];
let colors = ["#C62828", "#AD1457", "#4A148C", "#311B92", "#1A237E", "#0D47A1", "#01579B", "#004D40", "#1B5E20", "#F9A825", "#E65100", "#263238"];
let shareButton= document.getElementById("share");

function GetQuotes() {
    return fetch("https://type.fit/api/quotes")
        .then(response => response.json())
        .then(data => {
            quotes = data;

            Change();
        })
}

function Change(){
    let count= quotes.length;
    let rndNumber= Math.floor(Math.random()*count);
    document.getElementById("text").innerHTML=quotes[rndNumber].text;
    document.getElementById("author").innerHTML = "-" + quotes[rndNumber].author;

    let rndColor = Math.floor(Math.random()*12);
    document.body.style.backgroundColor=colors[rndColor];

}


shareButton.addEventListener("click",function(){
    let text = document.getElementById("text").innerHTML;

    //bir sayfaya ynlendirme yapmak istediğimizde kullanıyoruz.
  window.location.href = 'https://twitter.com/intent/tweet?hashtags=birdamlayazilim&text='+ encodeURIComponent('"' + text + '"');  
})

GetQuotes();


