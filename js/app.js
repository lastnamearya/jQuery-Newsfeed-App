const $pdfCheckbox = $('<label><input type="checkbox"> Allow PDF downloads</label>');

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

$pdfs.on('click', function(event){
  // Check if checkbox has been checked
  // if zero checkboxes are checked
    if($(':checked').length === 0){
      event.preventDefault();
      alert('Please check the box to allow PDF Downloads!');
    }
    // prevent download of document
    // alert the user
  // else allow the download
  
  // We use it most of the time with forms because it prevent the form from submitting. By default browser will take whatever in the form and send it to the server, this cause the page to reload. When we use this then we call Hey browser, when the form is submitted don't send the info to the server. This prevents browser from reloading the page. 

  // Second is, it will prevent browser automatically following a link after the user clicks on it. 
  // event.preventDefault();
  
});

// Now let's make our javascript unobtrusive

$('#links').append($pdfCheckbox);

// .each() method, it takes two parameter which are optional
$('a').each(function(index, element){
  console.log(index, $(element).attr('href'));
});

// // Appending URLs next to the links
// $('a').each(function(index, link){
//   const url = $(link).attr('href');
//   $(link).parent().append(`${url}`);
// }) 

// // Above code using "this" keyword
// $('a').each(function(){
//   const url = $(this).attr('href');
//   $(this).parent().append(`${url}`);
// });