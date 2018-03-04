// jQuery Specific selector to slect odd element nodes
const $odd = $('a:odd')

// This specific selector will select all the elements with a https:// attribute
const $secureLinks = $('a[href^="https://"]');

// This will select all the elements with a .pdf in the end 
const $pdfs = $('a[href$=".pdf"]');

// $pdfs.hide();

// When your site has 25, 50 or maybe 100 links and you want to open them in a new tab
$secureLinks.attr('target', '_blank');

// Add download attribute, Now our file will be downloaded instead of opening in the browser. Adding download attribute is bit tricky because it doesn't need any value. 
$pdfs.attr('download', true);

// $odd.css('backgroundColor', 'lightgrey');

// Adding CSS classes to our Elements

// $odd.css('backgroundColor', 'lightgrey');

$secureLinks.addClass('secure');

$pdfs.addClass('pdf');

