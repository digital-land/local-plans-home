//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here

  // Stop dummy prototype links from jumping to top
  $("a").click(function() {
  var dummyLink = $(this).attr("href");
  if( dummyLink == "#" ) {
    return false;
  }
});


})
