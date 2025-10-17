export let darkMode = false;

/**
 * Styles for buttons and other elements.
 * @type {Object}
 * @property {string} borderWidth - The width of the border.
 * @property {string} borderRadius - The radius of the border corners.
 * @property {string} cursor - The cursor style.
 * @property {string} fontFamily - The font family.
 * @property {string} fontSize - The font size.
 * @property {string} padding - The padding inside the element.
 * @property {string} backgroundColor - The background color.
 * @property {string} color - The text color.
 * @property {string} border - The border style.
 * @property {string} highlight - The highlight color.
 */
export const styles = {
    borderWidth:     '2px'              ,
    borderRadius:    '8px'              ,
    cursor:          'pointer'          ,
    fontFamily:      'Arial, sans-serif',
    fontSize:        '16px'             ,
    padding:         '5px'              ,
};

if (darkMode) {
    styles.backgroundColor = '#222';
    styles.color           = '#ddd';
    styles.border          = '#ddd solid';
    styles.highlight       = '#f80';
} else {
    styles.backgroundColor = '#fff';
    styles.color           = '#888';
    styles.border          = '#888 solid';
    styles.highlight       = '#08f';
}