// index.js

let generateImageForm = 
    document.getElementById('generate-image-form');
let formInput = 
    document.getElementById('input-value');
let imageContainerText = 
    document.getElementById('imageContainerText');
let imageGenerated = 
    document.getElementById('generated-image');
let imageContainer = 
    document.getElementById('images-visible');

async function fetchImages(category) {
    try {
        imageContainerText.innerText = "Generating image...";
        imageContainer.style.display = "block";

        let imageUrl = `https://source.unsplash.com/600x400/?${category},hd`;

        imageGenerated.src = imageUrl;

        imageGenerated.onload = () => {
            imageContainerText.innerText = "Below is your generated Image:";
        };

    } catch (error) {
        console.log(error);
    }
}

generateImageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let enteredText = formInput.value;
    if (enteredText !== "") {
        fetchImages(enteredText);
    }
    else {
        imageContainerText.innerText = 
            "Input field can not be empty!";
    }
})
