const slider = document.querySelector('.slider');
let isMoving = false;

function moveSlider() {
    if (!isMoving) {
        isMoving = true;
        const firstImage = slider.children[0];
        slider.style.transition = 'transform 0.5s ease';
        slider.style.transform = 'translateX(-' + firstImage.offsetWidth + 'px)';
        setTimeout(() => {
            slider.appendChild(firstImage);
            slider.style.transition = 'none';
            slider.style.transform = 'translateX(0)';
            isMoving = false;
        }, 001);
    }
}

setInterval(moveSlider, 1000);