export class MediaFactory {
        constructor(dataMedia){
            if(dataMedia.video == undefined){
                return  new MediaImages(dataMedia)
                    
            }else if (dataMedia.image == undefined){
                return new Videos(dataMedia)
            }
        }       
}

class Medias{

    constructor(dataMedia){
        this.id = dataMedia.id;
        this.photographerId = dataMedia.photographerId;
        this.title = dataMedia.title;
        this.likes = dataMedia.likes;
        this.date = dataMedia.date;
        this.price = dataMedia.price;
    }   
}

class MediaImages extends Medias {
    constructor(dataMedia){
        super(dataMedia);
        this.image = dataMedia.image;
        
    }

    async getMedias(){
        const gallery = document.querySelector('.gallery');
        gallery.innerHTML += `
        <figure>
            <img id="${this.id}" class="media visible" src="assets/photographers/${this.photographerId}/${this.image}" alt="">    
            <figcaption>
            <p class="title">${this.title}</p><p data-target="${this.likes}" class="like-count"></p><p class="like-button"><i class="far fa-regular fa-heart"></i></p>
            </figcaption>
        </figure>
        
        `
        
    }
    
    
}

class Videos extends Medias {
    constructor(dataMedia){
        super(dataMedia);
        this.video = dataMedia.video;
        
    }

    async getMedias(){
        const gallery = document.querySelector('.gallery');
        gallery.innerHTML += `
        <figure>
            <video id="${this.id}" class="media visible" preload="metadata" src="assets/photographers/videos/${this.video}" type="video/mp4" loop></video>
            
            <div class="bar">
                <div class="bar-line"></div>
            </div>
            <figcaption>
            <p class="title">${this.title}</p><p data-target="${this.likes}" class="like-count"></p><p class="like-button"><i class="far fa-regular fa-heart"></i></p>
            </figcaption>
            </figcaption>
        </figure>
      `
    }

   
      
    
}

