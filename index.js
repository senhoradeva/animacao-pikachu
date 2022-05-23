let frame = document.querySelector('.frame');
const RADIUS = 90;

document.addEventListener('mousemove', (event) => {
    let positionX = event.clientX;
    let positionY = event.clientY;

    let circle = `circle(${RADIUS}px at ${positionX}px ${positionY}px)`;
    
    frame.style['-webkit-clip-path'] = circle;
    frame.style['clip-path'] = circle;
    
});

