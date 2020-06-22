class Gallery {
static ALBUM_ATTRIBUTE = 'data-album-id';
static ALBUM_CLASS_NAME = 'album_item';
static ALBUM_CLASS_ACTIVE = 'album_active';
static ALBUM_PHOTOS_CLASS = 'album_photos';
static ALBUM_SAVED_CLASS = 'album_saved';
static HIDE_BLCOK_CLASS = 'display_none';

constructor(albumsArr){
    this.albums = albumsArr;
    this.galleryEl = document.getElementById('gallery');
    this.albumEl = this.galleryEl.querySelector('.albums_list');
    this.albumWrapperEl = this.galleryEl.querySelector('.albums_wrapper');
    this.photoTemplate = document.getElementById('photoTemplate');
    this.albumHeaders = this.albumEl.getElementsByClassName(Gallery.ALBUM_CLASS_NAME);
    this.photosList = this.galleryEl.querySelector('.photos_block');

    this.createAlbumList();
    this.init();

    this.albumWrapperEl.addEventListener('click', this.onAlbumListClick.bind(this));
}

static setStatusActive(el){
    el.classList.add(Gallery.ALBUM_CLASS_ACTIVE);
}

static removeStatusActive(el){
    el.classList.remove(Gallery.ALBUM_CLASS_ACTIVE);
}

static hideAlbum(el){
    el.classList.add(Gallery.HIDE_BLCOK_CLASS);
}

static getID(el){
    let id = el.getAttribute(Gallery.ALBUM_ATTRIBUTE);
    return +id;
}

init(){
    Gallery.setStatusActive(this.albumEl.firstElementChild);
    this.createAlbumPhotoWrapper(1);
    this.getPhotosArray(1);
}

createAlbumList(){
    this.albums.forEach((item) => {
        this.createAlbumItem(item.title, item.id);
    });
}

createAlbumItem(albumTitle, index){
   let newItem = document.createElement('div');
   newItem.innerText = albumTitle;
   newItem.setAttribute(Gallery.ALBUM_ATTRIBUTE, index);
   newItem.className = Gallery.ALBUM_CLASS_NAME;
   this.albumEl.append(newItem); 
}

onAlbumListClick(e){
    if(e.target.classList.contains(Gallery.ALBUM_CLASS_NAME)){
        let id = Gallery.getID(e.target);

        Array.prototype.forEach.call(this.albumHeaders, Gallery.removeStatusActive);
        Gallery.setStatusActive(e.target);
        
        
        if(!e.target.classList.contains(Gallery.ALBUM_SAVED_CLASS)){
            e.target.classList.add(Gallery.ALBUM_SAVED_CLASS);
            this.createAlbumPhotoWrapper(id);
            this.getPhotosArray(id);
        }    

        Array.prototype.forEach.call(this.photosList.children, Gallery.hideAlbum);
        this.displayClickedAlbum(id);
    }
}

displayClickedAlbum(id){
    this.photosList.querySelector(`.album_number_${id}`).classList.remove(Gallery.HIDE_BLCOK_CLASS);

}

getPhotosArray(id){
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
    .then(res => res.json()).then(data => {
        data.forEach((item) => {
            this.createPhotoList(item.url, item.title);
        });
    });
}

createAlbumPhotoWrapper(id){
    let newAlbum = document.createElement('div');
    newAlbum.className = Gallery.ALBUM_PHOTOS_CLASS;
    newAlbum.classList.add(`album_number_${id}`);

    this.photosList.append(newAlbum);
}

createPhotoList(link, title){
   let newItem = this.photoTemplate.innerHTML
   .replace('{{src}}', link)
   .replace('{{title}}', title)
   .replace('{{figcaption}}', title);

   this.photosList.lastChild.innerHTML += newItem;
}

}
