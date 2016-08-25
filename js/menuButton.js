$(function() {
    console.log( "ready!" );
    $('.menuButton').on('click', function () {
      $('.nav').toggleClass('nav--active')
      $('.navItem').toggleClass('navItem--active')
      $('.logo').toggleClass('logo--active')
      $('.label').toggleClass('label--active')
      console.log('menu button clicked');
    })
});
