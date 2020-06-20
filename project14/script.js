async function getLists (){

    let photosResponse = await fetch('https://jsonplaceholder.typicode.com/photos');
    let photosList = await photosResponse.json();
    
    
    let albumsResponse = await fetch('https://jsonplaceholder.typicode.com/albums');
    let albumsList = await albumsResponse.json();
    
    new Gallery(albumsList, photosList);

}

getLists();
