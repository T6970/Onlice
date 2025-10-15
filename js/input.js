export let keyPress = {};
export let disableDefault = false;
export let mouse = { x: 0, y: 0, down: false, right: false };

document.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

document.addEventListener('mousedown', () => {
    mouse.down = true;
});

document.addEventListener('click', () => {
    mouse.down = true;
    setTimeout(() => { mouse.down = false; }, 100);
});

document.addEventListener('contextmenu', (e) => {
    if (disableDefault) e.preventDefault();
    mouse.right = true;
    setTimeout(() => { mouse.right = false; }, 100);
});

document.addEventListener('keydown', (e) => {
    keyPress[e.key.toLowerCase] = true;
});

document.addEventListener('keyup', (e) => {
    keyPress[e.key.toLowerCase] = false;
});

