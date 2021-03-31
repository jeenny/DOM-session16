const button = document.querySelectorAll(".buttonFilter");
const images = document.querySelectorAll(".imageFilter");
const helperText = document.querySelector('#helper-text');

console.log(button);

function updateImageDisplay(animal) {
    for (let i = 0; i < images.length; i++) {
        var imageElement = images[i];

        //does it contain the name of the animal im looking for
        if (animal === 'all' | imageElement.classList.contains(animal)) {
            imageElement.style.display = 'block';
        } 
        else {
            imageElement.style.display = 'none';
        }
    }
}

function updateClickedButton(selectedButton) {
    for (let i = 0; i < button.length; i++) {
        if (button[i] === selectedButton) {
            // the button we clicked
            button[i].classList.add('selected');
        } 
        else {
            // not the button we clicked
            button[i].classList.remove('selected');
        }
    }
}

function updateHelperText(animal) {
    helperText.innerHTML = "You're looking at pictures of a " + animal;
}

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function(event) {
        event.preventDefault(); //won't keep refreshing the page

        var animal = button[i].dataset.animal;

        console.log(animal);

        updateImageDisplay(animal);
        updateClickedButton(button[i]);
        updateHelperText(animal);
    });
}