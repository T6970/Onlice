export let darkMode = false;

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