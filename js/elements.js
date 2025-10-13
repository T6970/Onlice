import { styles } from './style.js';

export function button(label, position, size, onClick) {
    const btn = document.createElement('button');
    btn.textContent           = label;
    btn.style.position        = 'absolute';
    btn.style.left            = position.x + 'px';
    btn.style.top             = position.y + 'px';
    btn.style.width           = size.width + 'px';
    btn.style.height          = size.height + 'px';
    btn.style.backgroundColor = styles.button.backgroundColor;
    btn.style.color           = styles.button.color;
    btn.style.border          = styles.button.border;
    btn.style.borderRadius    = styles.button.borderRadius;
    btn.style.borderWidth     = styles.button.borderWidth;
    btn.style.cursor          = styles.button.cursor;
    btn.style.fontSize        = styles.button.fontSize;
    btn.onclick = onClick;
    document.body.appendChild(btn);
    return btn;
}

export function dropdown(options, position, size, onSelect) {
    const select = document.createElement('select');
    select.style.position        = 'absolute';
    select.style.left            = position.x + 'px';
    select.style.top             = position.y + 'px';
    select.style.width           = size.width + 'px';
    select.style.height          = size.height + 'px';
    select.style.backgroundColor = styles.dropdown.backgroundColor;
    select.style.color           = styles.dropdown.color;
    select.style.border          = styles.dropdown.border;
    select.style.borderRadius    = styles.dropdown.borderRadius;
    select.style.borderWidth     = styles.dropdown.borderWidth;
    select.style.cursor          = styles.dropdown.cursor;
    select.style.fontSize        = styles.dropdown.fontSize;

    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = option;
        select.appendChild(opt);
    });

    select.onchange = () => {
        onSelect(select.value);
    };

    document.body.appendChild(select);
    return select;
}

export function text(content, position, fontSize = 16) {
    const p = document.createElement('p');
    p.textContent      = content;
    p.style.position   = 'absolute';
    p.style.left       = position.x + 'px';
    p.style.top        = position.y + 'px';
    p.style.fontFamily = styles.text.fontFamily;
    p.style.fontSize   = fontSize + 'px';
    document.body.appendChild(p);
    return p;
}

export function image(src, position, size) {
    const img = document.createElement('img');
    img.src = src;
    img.style.position     = 'absolute';
    img.style.left         = position.x + 'px';
    img.style.top          = position.y + 'px';
    img.style.width        = size.width + 'px';
    img.style.height       = size.height + 'px';
    img.style.borderRadius = styles.image.borderRadius;
    document.body.appendChild(img);
    return img;
}

export function inputField(placeholder, position, size) {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = placeholder;
    input.style.position = 'absolute';
    input.style.left = position.x + 'px';
    input.style.top = position.y + 'px';
    input.style.width = size.width + 'px';
    input.style.height = size.height + 'px';
    input.style.border = styles.inputField.border;
    input.style.borderRadius = styles.inputField.borderRadius;
    input.style.padding = styles.inputField.padding;
    input.style.fontSize = styles.inputField.fontSize;
    document.body.appendChild(input);
    return input;
}

export function checkbox(label, position, onChange) {
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.left = position.x + 'px';
    container.style.top = position.y + 'px';
    container.style.display = 'flex';
    container.style.alignItems = 'center';

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.style.width = styles.checkbox.width;
    input.style.height = styles.checkbox.height;
    input.style.cursor = styles.checkbox.cursor;
    input.style.marginRight = styles.checkbox.marginRight;
    input.onchange = () => {
        onChange(input.checked);
    };

    const lbl = document.createElement('label');
    lbl.textContent = label;

    container.appendChild(input);
    container.appendChild(lbl);
    document.body.appendChild(container);
    return container;
}