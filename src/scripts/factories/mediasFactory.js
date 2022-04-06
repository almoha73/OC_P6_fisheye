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
            <img src="assets/photographers/${this.photographerId}/${this.image}" alt="">    
            <figcaption>
            <span>${this.title}</span><span>${this.likes}<i class="far fa-regular fa-heart"></i></span>
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
            <video preload="metadata" src="assets/photographers/videos/${this.video}" id="video_media" type="video/mp4" loop></video>
            
            <div class="bar">
                <div class="bar-line"></div>
            </div>
            <figcaption>
            <span>${this.title}</span><span>${this.likes}<i class="far fa-regular fa-heart"></i></span>
            </figcaption>
        </figure>
      `
    }

    // async controlMedia(){
    //     const videoMedia = document.getElementById('video_media');

    //             videoMedia.addEventListener('mouseenter', () => {
    //                 videoMedia.play();
    //             })
    //             videoMedia.addEventListener('mouseout', () => {
    //                 videoMedia.pause();
    //             })
    // }
      
    
}

