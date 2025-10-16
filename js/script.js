import { element } from './elements.js';
import { mouse } from './input.js';

const fileName = element.inputField("Untitled", { x: 10, y: 10 }, { width: 200, height: 35 });
const svg      = document.getElementById("svgContainer")

element.button("File", { x: 10, y: 55 }, { width: 60, height: 30 }, () => {
    element.contextMenu(
        [
            { label: "New" , action: () => { 
                fileName.value = ""; 
                svg.innerHTML  = "";
            } },

            { label: "Open", action: () => { 
                const fileUpload = document.createElement('input');
                fileUpload.type = 'file';
                fileUpload.accept = '.svg';
                fileUpload.onchange = (e) => {
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        svg.innerHTML = e.target.result;
                        fileName.value = file.name;
                    };
                    reader.readAsText(file);
                };
                fileUpload.click();
            } },

            { label: "Save", action: () => {
                console.log("Saving file:", fileName.value);
                const fileExport = new Blob(
                    [svg.innerHTML], 
                    { type: 'image/svg+xml' }
                );
                const a = document.createElement('a');
                a.href = URL.createObjectURL(fileExport);
                a.download = fileName.value.endsWith('.svg') ? fileName.value : fileName.value + '.svg';
                a.click();
            } },
        ],
        { x: 10, y: 90 }
    );
});

element.button("Insert", { x: 79, y: 55 }, { width: 60, height: 30 }, () => {
    element.contextMenu(
        [
            {label: "Shapes",action: () => {
                element.contextMenu(
                    [
                        { label: "Rectangle", action: () => {
                            const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                            rect.setAttribute("x", mouse.x);
                            rect.setAttribute("y", mouse.y);
                            rect.setAttribute("width", 100);
                            rect.setAttribute("height", 50);
                            rect.setAttribute("fill", "transparent");
                            rect.setAttribute("stroke", "black");
                            svg.appendChild(rect);
                        } },

                        { label: "Circle", action: () => {
                            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                            circle.setAttribute("cx", mouse.x);
                            circle.setAttribute("cy", mouse.y);
                            circle.setAttribute("r", 30);
                            circle.setAttribute("fill", "transparent");
                            circle.setAttribute("stroke", "black");
                            svg.appendChild(circle);
                        } },

                        { label: "Line", action: () => {
                            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
                            line.setAttribute("x1", mouse.x);
                            line.setAttribute("y1", mouse.y);
                            line.setAttribute("x2", mouse.x + 100);
                            line.setAttribute("y2", mouse.y);
                            line.setAttribute("stroke", "black");
                            svg.appendChild(line);
                        } }
                    ],
                    { x: 80, y: 90 }
                )
            }},

            { label: "Text", action: () => {
                const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
                text.setAttribute("x", mouse.x);
                text.setAttribute("y", mouse.y);
                text.setAttribute("fill", "black");
                text.textContent = "Sample Text";
                svg.appendChild(text);
            }},

            { label: "Image", action: () => {
                const url = prompt("Enter image URL:");
                if (url) {
                    const img = document.createElementNS("http://www.w3.org/2000/svg", "image");
                    img.setAttribute("href", url);
                    img.setAttribute("x", mouse.x);
                    img.setAttribute("y", mouse.y);
                    img.setAttribute("width", 100);
                    img.setAttribute("height", 100);
                    svg.appendChild(img);
                }
            }}
        ],
        { x: 80, y: 90 }
    )
});

element.button("Edit", { x: 148, y: 55 }, { width: 60, height: 30 }, () => {
    element.contextMenu(
        [
            { label: "Undo", action: () => { document.execCommand('undo'); } },
            { label: "Redo", action: () => { document.execCommand('redo'); } },
            { label: "Cut", action: () => { document.execCommand('cut'); } },
            { label: "Copy", action: () => { document.execCommand('copy'); } },
            { label: "Paste", action: () => { document.execCommand('paste'); } },
            { label: "Delete", action: () => {
                const selected = svg.querySelectorAll('.selected');
                selected.forEach(elem => elem.remove());
            } }
        ],
        { x: 150, y: 90 }
    )
});