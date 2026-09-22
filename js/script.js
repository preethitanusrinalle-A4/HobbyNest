// Welcome Message
window.onload = function () {
    alert("🎉 Welcome to HobbyNest! Explore your creativity.");
};

// Explore Button
const exploreBtn = document.querySelector(".buttons button");

if (exploreBtn) {
    exploreBtn.addEventListener("click", function () {
        alert("🎨 Welcome! Explore amazing Art, Photography, Crafts, and Nature.");
    });
}

// Upload Button
const uploadBtn = document.querySelectorAll(".buttons button")[1];

if (uploadBtn) {
    uploadBtn.addEventListener("click", function () {
        window.location.href = "upload.html";
    });
}

// Dark Mode
const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        let count = button.nextElementSibling;

        let likes = parseInt(count.innerText);

        likes++;

        count.innerText = likes + " Likes";
    });
});

function likeImage(button){
    let count = button.nextElementSibling;
    let likes = parseInt(count.innerText);
    likes++;
    count.innerText = likes + " Likes";
}

function openLightbox(imageSrc){
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = imageSrc;
}

function closeLightbox(){
    document.getElementById("lightbox").style.display = "none";
}
function searchCategory() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {
        if (card.innerText.toLowerCase().includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}