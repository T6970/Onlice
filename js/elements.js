import { styles } from './style.js';
export const element = {};

let menuList = [];

const interactive = (type, position, size, onEvent) => {
    const interactiveElement = document.createElement(type);
    interactiveElement.style.position        = "absolute";
    interactiveElement.style.left            = position.x  + 'px';
    interactiveElement.style.top             = position.y  + 'px';
    interactiveElement.style.width           = size.width  + 'px';
    interactiveElement.style.height          = size.height + 'px';
    interactiveElement.style.backgroundColor = styles.backgroundColor;
    interactiveElement.style.color           = styles.color;
    interactiveElement.style.border          = styles.border;
    interactiveElement.style.borderRadius    = styles.borderRadius;
    interactiveElement.style.borderWidth     = styles.borderWidth;
    interactiveElement.style.cursor          = styles.cursor;
    interactiveElement.style.fontFamily      = styles.fontFamily;
    interactiveElement.style.fontSize        = styles.fontSize;
    interactiveElement.onEvent               = onEvent;
    interactiveElement,addEventListener('click', (e) => {
        if (e.target === interactiveElement) {
            onEvent();
        }
    });
    document.body.appendChild(interactiveElement);
    return interactiveElement;
}

element.button = (label, position, size, onClick) => {
    const btn = interactive('button', position, size, onClick);
    btn.innerText = label;
    return btn;
};

element.dropdown = (options, position, size, onSelect) => {
    const select = interactive('select', position, size, () => {
        onSelect(select.value);
    });

    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = option;
        select.appendChild(opt);
    });

    select.onChange = () => {
        onSelect(select.value);
    };

    return select;
};

element.contextMenu = (items, position) => {
    const menu = interactive('div', position, { width: 60, height: items.length * 30 });
    menu.style.display = 'flex';
    menu.style.flexDirection = 'column';
    menu.style.padding = styles.padding;
    menu.style.zIndex = 1000;

    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.innerText = item.label;
        menuItem.style.borderRadius = styles.borderRadius;
        menuItem.style.padding = styles.padding;
        menuItem.style.cursor = 'pointer';
        menuItem.onmouseover = () => {
            menuItem.style.backgroundColor = styles.highlight;
        };
        menuItem.onmouseout = () => {
            menuItem.style.backgroundColor = styles.backgroundColor;
        };
        menuItem.onclick = () => {
            item.action();
            if (document.body.contains(menu)) document.body.removeChild(menu);
        };
        menu.appendChild(menuItem);
    });
    menuList.push(menu);

    const removeMenu = (e) => {
        if (document.body.contains(e)) document.body.removeChild(e);
        document.removeEventListener('click', removeMenu);
        menuList = menuList.filter(m => m !== e);
    };

    if (menuList.length > 1) {
        const temp = menuList.pop();
        for (const m of menuList) {
            removeMenu(m);
        };
        menuList = [temp];
    };

    return menu;
};

document.addEventListener('click', (e) => {
    menuList.forEach(menu => {
        if (!menu.contains(e.target)) {
            if (document.body.contains(menu)) document.body.removeChild(menu);
            menuList = menuList.filter(m => m !== menu);
        }
    });
});

element.inputField = (placeholder, position, size) => {
    const input = interactive('input', position, size);
    input.type = 'text';
    input.placeholder = placeholder;
    input.style.padding = styles.padding;
    input.style.boxSizing = 'border-box';
    return input;
};