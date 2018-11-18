//fetcherino
function fetcherinoFlickerinoPhotorino(){
    let script = document.createElement("script");
    script.src = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=" + document.getElementById("search").value;
    document.querySelector('head').appendChild(script);
}

function jsonFlickrFeed(data){
    let image = '';
    console.log(data);
    data.items.forEach(function(element){
        image += '<img src="' + element.media.m + '"/>';
    });
    document.getElementById('searcherinoResulterino').innerHTML = image;
}
fetcherinoFlickerinoPhotorino();