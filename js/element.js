import { styles } from './style.js';
export const element = {};

/**
 * Creates a button element.
 * @param {*} div - The parent div to contain the button
 * @param {*} text - The text content of the button
 * @param {*} onClick - The click event handler for the button
 * @returns {HTMLElement} - The created button element
 */
element.makeButton = (div, text, pos, size, onClick) => {
    const button = document.createElement('button');
    style(button);
    button.textContent  = text;
    button.style.left   = `${pos.x}px`;
    button.style.top    = `${pos.y}px`;
    button.style.width  = `${size.width}px`;
    button.style.height = `${size.height}px`;
    button.onclick      = onClick;

    div.appendChild(button);
    return button;
};

/**
 * Creates a context menu.
 * @param {*} div - The parent div to contain the context menu
 * @param {Object} pos - The position {x, y} to place the menu
 * @param {Object} size - The size {width, height} of the menu items
 * @param {*} items - The menu items to display
 * @returns {Array} - An array of button elements representing the menu items
 */

element.contextMenu = (div, pos, size, items) => {
    const menu = [];
    for (const item of items) {
        const btn = element.makeButton(div, item.text, pos, size, item.onClick);
        pos.y += size.height + 10;
        menu.push(btn);
    }
    return menu;
};

const style = (el) => {
    el.style.borderWidth  = styles.borderWidth;
    el.style.borderRadius = styles.borderRadius;
    el.style.fontFamily   = styles.fontFamily;
    el.style.fontSize     = styles.fontSize;
    el.style.padding      = styles.padding;

    el.style.backgroundColor = styles.backgroundColor;
    el.style.color           = styles.color;
    el.style.border          = styles.border;
    el.style.zIndex          = 1000;
};