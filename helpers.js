function searchURL(){
    window.location = "https://duckduckgo.com/?q=" + document.getElementById("searchbox").value;
}

function checkKey(e){
    if (e.key === 'Enter')
        document.getElementById("search-button").click();
}