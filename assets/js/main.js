
let videoPlaying = false;
let videoElement = null;
let popupElement = document.getElementById("video-popup");
let popupContent = document.getElementById("popup-content");

// exibe o video ao clicar
document.getElementById("play-button").addEventListener("click", function() {
    let videoFrame = document.getElementById("video-frame");

    videoFrame.innerHTML = `
        <iframe id="main-video" width="560" height="315" 
            src="https://www.youtube.com/embed/K_LCJkLZx4s?autoplay=1&rel=0"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>`;

    videoPlaying = true;
    videoElement = document.getElementById("main-video");

    document.getElementById("video-thumbnail").classList.add("hidden");
    document.getElementById("play-button").classList.add("hidden");
    videoFrame.classList.remove("hidden");
});

//faz o scroll ate o formulario
document.getElementById("scroll-button").addEventListener("click", function() {
    document.getElementById("formulario").scrollIntoView({
        behavior: "smooth" 
    });
});

// pega o ano atual qnd entra na pagina
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.querySelector('footer span');
    const currentYear = new Date().getFullYear();
    
    yearSpan.textContent = currentYear;
});

// mascara para cnpj
function formatCNPJ(value) {
    return value
        .replace(/\D/g, '') 
        .replace(/^(\d{2})(\d)/, '$1.$2')
        .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
        .replace(/\.(\d{3})(\d)/, '.$1/$2')
        .replace(/(\d{4})(\d)/, '$1-$2');
}

// mascara para telefone
function formatTelefone(value) {
    return value
        .replace(/\D/g, '') 
        .replace(/^(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4,5})(\d{4})$/, '$1-$2'); 
}

document.getElementById('cnpj').addEventListener('input', function (e) {
    e.target.value = formatCNPJ(e.target.value);
});

document.getElementById('telefone').addEventListener('input', function (e) {
    e.target.value = formatTelefone(e.target.value);
});

//Preloader 
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");

    setTimeout(() => {
        preloader.style.opacity = "0"; 
        setTimeout(() => {
            preloader.style.display = "none";
        }, 1000); 
    }, 3000); 
});
