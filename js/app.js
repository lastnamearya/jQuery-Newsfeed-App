// jQuery Specific selector to slect odd element nodes
const $odd = $('a:odd')

// This specific selector will select all the elements with a https:// attribute
const $secureLinks = $('a[href^="https://"]');

// This will select all the elements with a .pdf in the end 
const $pdfs = $('a[href$=".pdf"]');

$pdfs.hide();