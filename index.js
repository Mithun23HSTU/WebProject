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
        imageContainer.style.display = "block";
        imageContainerText.innerText = "Generating image...";

        let response = await fetch(
            `https://api.unsplash.com/photos/random?query=${category}&client_id=hxXF604LEZpNI5Nt9877dH-3bnn4yjb0SDRQAh2jj2k`
        );

        let data = await response.json();

        imageGenerated.src = data.urls.regular;

        imageContainerText.innerText =
            "Below is your generated Image:";

    } catch (error) {
        imageContainerText.innerText = "Failed to fetch image.";
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




