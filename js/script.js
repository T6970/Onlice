import { button, dropdown } from './elements.js';

const fileInput = button('File', { x: 20, y: 20 }, { width: 120, height: 30 }, () => {
    const fileDropdown = dropdown(['New', 'Open', 'Save', 'Save As', 'Export'], { x: 20, y: 60 }, { width: 120, height: 30 }, (value) => {
        console.log('File option selected:', value);
        document.body.removeChild(fileDropdown);
    });
});