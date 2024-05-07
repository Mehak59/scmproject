let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let intervalId;
next.addEventListener('click', function() {
    moveNext();
});
prev.addEventListener('click', function() {
    movePrev();
});
function moveNext() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
}
function movePrev() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
}
function startSlider() {
    intervalId = setInterval(function() {
        moveNext();
    }, 3000);
}
function stopSlider() {
    clearInterval(intervalId);
}
startSlider();
document.querySelector('.slide').addEventListener('mouseover', function() {
    stopSlider();
});
document.querySelector('.slide').addEventListener('mouseleave', function() {
    startSlider();
});
