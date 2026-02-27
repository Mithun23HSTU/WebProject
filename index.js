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

        // Working API (no key required)
        let imageUrl = `https://picsum.photos/600/400?random=${Date.now()}`;

        imageGenerated.src = imageUrl;

        imageGenerated.onload = function () {
            imageContainerText.innerText = 
                "Below is your generated Image:";
        };

        imageGenerated.onerror = function () {
            imageContainerText.innerText = 
                "Failed to load image. Try again.";
        };

    } catch (error) {
        console.log(error);
        imageContainerText.innerText = "Something went wrong!";
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

