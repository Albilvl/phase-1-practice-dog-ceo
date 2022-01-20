

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener(`DOMContentLoaded`, ()=>{
    renderImage()
    renderBreed()
}) 


function renderImage() {
    fetch(imgUrl)
    .then (response => response.json())
    .then(dogImg=>{
        // console.log(dogImg)
        dogImg.message.forEach(element => {addImage(element)})
    })
}


function addImage(image){
    const  dogContainer = document.querySelector(`#dog-image-container`)
    const newImgEl = document.createElement(`img`)
    newImgEl.src = (image)
    newImgEl.style.width = `300px`
    newImgEl.style.height =`300px`
    dogContainer.appendChild(newImgEl)
}


function renderBreed(){
    fetch (breedUrl)
    .then (response => response.json())
    .then (dogBreed=> { 
        const breeds = dogBreed.message
        for (breed in breeds){
           addBreed(breed) 
        }
    })
}

function addBreed(breed){
    const breedContainer = document.querySelector(`#dog-breeds`)
    const newlistEliment = document.createElement(`li`)
    newlistEliment.textContent = breed
    newlistEliment.style.cursor = `pointer`
    newlistEliment.addEventListener (`click`, updateColor)
    breedContainer.appendChild(newlistEliment)


}

function updateColor (e){
    e.target.style.color = `pink`
}

