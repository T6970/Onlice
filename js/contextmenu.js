const menu = document.getElementById("right-click");

export const showMenu = (elements, x, y) => {
    menu.innerHTML = "";

    const ul = document.createElement("ul");

    elements.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.name;
        li.onclick = () => {
            item.action();
            menu.style.display = "none";
        };
        ul.appendChild(li);
    });

    menu.appendChild(ul);

    menu.style.display = "block";
    menu.style.left = x + "px";
    menu.style.top = y + "px";

    const rect = menu.getBoundingClientRect();
    if (rect.right > window.innerWidth) {
        menu.style.left = (x - rect.width) + "px";
    }
    if (rect.bottom > window.innerHeight) {
        menu.style.top = (y - rect.height) + "px";
    }
}

document.addEventListener("click", () => {
    menu.style.display = "none";
});

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    const elements = [
        { name: "Undo" , action: () => undo () },
        { name: "Redo" , action: () => redo () },
        { name: "Cut"  , action: () => cut  () },
        { name: "Copy" , action: () => copy () },
        { name: "Paste", action: () => paste() }
    ];
    showMenu(elements, e.clientX, e.clientY);
});