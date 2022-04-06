export async function fetchPhotographers() {
    let dataPh;
    return fetch("./data/photographers.json")
    .then(res => res.json())
    .then((data) => (dataPh = data.photographers))
    .catch(error => alert(error));
  }

  export async function fetchPhotographersMedias() {
    let dataMedia;
    return fetch("./data/photographers.json")
      .then(res => res.json())
      .then((data) => (dataMedia = data.media))
      .catch(error => alert(error));
      
  }