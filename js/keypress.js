export const detectKey = (key, callback) => {
    document.addEventListener('keypress', (event) => {
        if (event.key === key) callback(event);
    });
};

export const detectClick = (callback) => {
    document.addEventListener('click', (event) => {
        if (event.button === 0) callback(event); // 0 is left button        }
    });
};

export const detectRightClick = (callback) => {
    document.addEventListener('contextmenu', (event) => {
        event.preventDefault();
        callback(event);
    });
};

export const mousePosition = (event) => {
    return { x: event.pageX, y: event.pageY };
};

export const keyCombination = (keys, callback) => {
    document.addEventListener('keydown', (event) => {
        const isPressed = keys.every((key) => {
            switch (key.toLowerCase()) {
                case 'ctrl':
                case 'control':
                    return event.ctrlKey;
                case 'shift':
                    return event.shiftKey;
                case 'alt':
                    return event.altKey;
                case 'meta': // Command key on Mac
                    return event.metaKey;
                default:
                    return event.key.toLowerCase() === key.toLowerCase();
            }
        });

        if (isPressed) callback(event);
    });
};

export const detectDoubleClick = (callback) => {
    document.addEventListener('dblclick', (event) => {
        callback(event);
    });
};
