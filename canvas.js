let canvas, context;
let drawing = false;
let currentPos = { x: 0, y: 0 };

function init(event){
    canvas = document.getElementById('myCanvas');
    context = canvas.getContext('2d');
    context.lineWidth = 1;
    context.lineJoin = 'round';
    context.lineCap = 'round';

    // Mouse events
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mousemove', draw);

    // Touch events
    canvas.addEventListener('touchstart', startDrawing);
    canvas.addEventListener('touchend', stopDrawing);
    canvas.addEventListener('touchmove', draw);
}

function startDrawing(event) {
    drawing = true;
    currentPos = getMousePos(event);
}

function stopDrawing() {
    drawing = false;
}

function draw(event) {
    if (!drawing) return;
    const pos = getMousePos(event);
    context.beginPath();
    context.moveTo(currentPos.x, currentPos.y);
    context.bezierCurveTo(currentPos.x, currentPos.y, pos.x, pos.y, pos.x, pos.y);
    context.stroke();
    currentPos = pos;
}
function getMousePos(event) {
    const rect = canvas.getBoundingClientRect();
    // Check if it's a touch event and get the first touch
    if (event.touches) {
        event = event.touches[0];
    }
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}
document.addEventListener('DOMContentLoaded', init);