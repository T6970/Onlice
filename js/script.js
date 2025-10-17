import { element }  from './element.js';
import { darkMode } from './style.js';

const svg       = document.getElementById('canvas' );
const toolbar   = document.getElementById('toolbar');
let   fileTitle = '';

svg.style.position = 'absolute';
svg.style.left     = '0px';
svg.style.top      = '0px';
svg.style.width    = '99%';
svg.style.height   = '99%';
svg.style.overflow = 'hidden';

const fileOp = toolbar.children[0];
fileOp.style.position = 'absolute';
fileOp.style.left     = '10px';
fileOp.style.top      = '5px';
fileOp.style.width    = '30px';
fileOp.style.height   = '30px';
fileOp.style.cursor   = 'pointer';

fileOp.onclick = (e) => {
    element.contextMenu(
        toolbar,
        { x: 0, y: 30 },
        { width: 150, height: 30 },
        [
            {
                text: 'New File',
                onClick: () => {
                    setFileTitle('Untitled');
                }
            },
            {
                text: 'Open File',
                onClick: () => {
                    alert('Open File clicked');
                }
            },
            {
                text: 'Save File',
                onClick: () => {
                    alert('Save File clicked');
                }
            }
        ]
    );
}

export const setFileTitle = (title) => {
    fileTitle = title;
    document.title = `My App - ${fileTitle}`;
};