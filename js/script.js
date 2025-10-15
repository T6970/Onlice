import { element } from './elements.js';
import { mouse } from './input.js';

const fileName = inputField("Untitled", { x: 10, y: 10 }, { width: 200, height: 30 });

element.button("File", { x: 10, y: 55 }, { width: 60, height: 30 }, () => {
    contextMenu(
        [
            { label: "New" , action: () => { 
                fileName.value = "Untitled"; 
                document.getElementById('svgContainer').innerHTML = '';
            } },

            { label: "Open", action: () => { 
                const fileUpload = document.createElement('input');
                fileUpload.type = 'file';
                fileUpload.accept = '.svg';
                fileUpload.onchange = (e) => {
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        document.getElementById('svgContainer').innerHTML = e.target.result;
                        fileName.value = file.name;
                    };
                    reader.readAsText(file);
                };
                fileUpload.click();
            } },

            { label: "Save", action: () => {
                console.log("Saving file:", fileName.value);
                const fileExport = new Blob(
                    [document.getElementById('svgContainer').innerHTML], 
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

button("Insert", { x: 80, y: 55 }, { width: 60, height: 30 }, () => {
    contextMenu(
        [
            {label: "Shapes",action: () => {
                contextMenu(
                    [
                        { label: "Rectangle", action: () => {
                            const svg = document.getElementById('svgContainer');
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
                            const svg = document.getElementById('svgContainer');
                            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                            circle.setAttribute("cx", mouse.x);
                            circle.setAttribute("cy", mouse.y);
                            circle.setAttribute("r", 30);
                            circle.setAttribute("fill", "transparent");
                            circle.setAttribute("stroke", "black");
                            svg.appendChild(circle);
                        } },

                        { label: "Line", action: () => {
                            const svg = document.getElementById('svgContainer');
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
                const svg = document.getElementById('svgContainer');
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
                    const svg = document.getElementById('svgContainer');
                    const img = document.createElementNS("http://www.w3.org/2000/svg", "image");
                    img.setAttribute("href", url);
                    img.setAttribute("x", mouse.x);
                    img.setAttribute("y", mouse.y);
                    img.setAttribute("width", 100);
                    img.setAttribute("height", 100);
                    svg.appendChild(img);
                }
            } }
        ],
    )
});