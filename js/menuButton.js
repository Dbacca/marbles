$(function() {
    console.log( "ready!" );
    $('.menuButton').on('click', function () {
      $('.nav').toggleClass('nav--active')
      console.log('menu button clicked');
    })
});
