const request = new XMLHttpRequest();
request.open('GET','https://api.giphy.com/v1/gifs/random?api_key=fcB2Bv4P2I9bFpqxUwzy13kkFXjExQYA');
request.onload = function(){
    const response = request.response;
    const GIF= JSON.parse(response);
    const img = GIF.data.images.original.url;
    console.log(GIF.data.images.original.url);

    const imag = document.createElement('img');
    // imag.setAttribute('src',img);
    imag.src = img;
    document.body.appendChild(imag);

}
request.send();