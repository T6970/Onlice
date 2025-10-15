import { styles } from './style.js';
const element = {};

element.button = (label, position, size, onClick) => {
    const btn = document.createElement('button');
    btn.innerText             = label;
    btn.style.position        = 'absolute';
    btn.style.left            = position.x + 'px';
    btn.style.top             = position.y + 'px';
    btn.style.width           = size.width + 'px';
    btn.style.height          = size.height + 'px';
    btn.style.backgroundColor = styles.backgroundColor;
    btn.style.color           = styles.color;
    btn.style.border          = styles.border;
    btn.style.borderRadius    = styles.borderRadius;
    btn.style.borderWidth     = styles.borderWidth;
    btn.style.cursor          = styles.cursor;
    btn.style.fontSize        = styles.fontSize;
    btn.onclick = onClick;
    document.body.appendChild(btn);
    return btn;
}

element.dropdown = (text, options, position, size, onSelect) => {
    const select = document.createElement('select');
    select.style.textContent     = text;
    select.style.position        = 'absolute';
    select.style.left            = position.x + 'px';
    select.style.top             = position.y + 'px';
    select.style.width           = size.width + 'px';
    select.style.height          = size.height + 'px';
    select.style.backgroundColor = styles.backgroundColor;
    select.style.color           = styles.color;
    select.style.border          = styles.border;
    select.style.borderRadius    = styles.borderRadius;
    select.style.borderWidth     = styles.borderWidth;
    select.style.cursor          = styles.cursor;
    select.style.fontSize        = styles.fontSize;

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

element.contextMenu = (items, position) => {
    const menu = document.createElement('div');
    menu.style.position        = 'absolute';
    menu.style.left            = position.x + 'px';
    menu.style.top             = position.y + 'px';
    menu.style.backgroundColor = styles.backgroundColor;
    menu.style.color           = styles.color;
    menu.style.border          = styles.border;
    menu.style.borderRadius    = styles.borderRadius;
    menu.style.borderWidth     = styles.borderWidth;
    menu.style.cursor          = styles.cursor;
    menu.style.fontSize        = styles.fontSize;
    menu.style.padding         = styles.padding;
    menu.style.boxShadow       = styles.boxShadow;
    menu.style.zIndex          = 1000;

    items.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item.label;
        div.style.padding = '5px 10px';
        div.style.cursor = 'pointer';
        div.onmouseenter = () => { div.style.backgroundColor = styles.hoverBackgroundColor; };
        div.onmouseleave = () => { div.style.backgroundColor = 'transparent'; };
        div.onclick = () => {
            item.action();
            document.body.removeChild(menu);
        };
        menu.appendChild(div);
    });

    document.body.appendChild(menu);

    return menu;
}

element.text = (content, position, fontSize = 16) => {
    const p = document.createElement('p');
    p.textContent      = content;
    p.style.position   = 'absolute';
    p.style.left       = position.x + 'px';
    p.style.top        = position.y + 'px';
    p.style.fontFamily = styles.text.fontFamily;
    p.style.fontSize   = fontSize + 'px';
    document.body.appendChild(p);
    return p;
};

element.image = (src, position, size) => {
    const img = document.createElement('img');
    img.src = src;
    img.style.position     = 'absolute';
    img.style.left         = position.x + 'px';
    img.style.top          = position.y + 'px';
    img.style.width        = size.width + 'px';
    img.style.height       = size.height + 'px';
    img.style.borderRadius = styles.borderRadius;
    document.body.appendChild(img);
    return img;
};

element.inputField = (placeholder, position, size) => {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = placeholder;
    input.style.position = 'absolute';
    input.style.left = position.x + 'px';
    input.style.top = position.y + 'px';
    input.style.width = size.width + 'px';
    input.style.height = size.height + 'px';
    input.style.border = styles.border;
    input.style.borderRadius = styles.borderRadius;
    input.style.padding = styles.padding;
    input.style.fontSize = styles.fontSize;
    document.body.appendChild(input);
    return input;
};

element.checkbox = (label, position, onChange) => {
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.left = position.x + 'px';
    container.style.top = position.y + 'px';
    container.style.display = 'flex';
    container.style.alignItems = 'center';

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.style.width = styles.width;
    input.style.height = styles.height;
    input.style.cursor = styles.cursor;
    input.style.marginRight = styles.marginRight;
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