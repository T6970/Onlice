import { detectRightClick } from './keypress.js';
import { showMenu } from './contextmenu.js';
const file = document.getElementById('file');
if (detectRightClick(e)) {
  e.preventDefault();
  showMenu([
    { name: "Open File", action: () => { if (file) file.click(); else console.error("File element not found"); } },
    { name: "Save File", action: () => console.log("Save action") },
    { name: "Settings",  action: () => console.log("Settings action") }
  ], e.pageX, e.pageY);
});