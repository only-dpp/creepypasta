document.getElementById('audioTrigger').addEventListener('click', function() {
    const audio = new Audio('witch-laughter-25288.mp3'); 
    audio.play();
});


function checkVisibility() {
    const paragraphs = document.querySelectorAll('p');
    const windowHeight = window.innerHeight;

    paragraphs.forEach(function(p) {
        const rect = p.getBoundingClientRect();
        if (rect.top <= windowHeight && rect.bottom >= 0) {
            p.classList.add('visible'); 
        }
    });
}


window.addEventListener('scroll', checkVisibility);


window.addEventListener('load', checkVisibility);

