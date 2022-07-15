new Splide( '.splide', {
    type   : 'loop',
    perPage: 3,
    perMove: 1,
    width: 'calc(90% - 20px)',
    fixedWidth: '340px',
    fixedHeight: '400px',
    gap: 38,
    pagination: false,
  } ).mount();
// new Splide( '.splide', {
//     type   : 'loop',
//     perPage: 3,
//   } );

document.addEventListener( 'DOMContentLoaded', function () {
  var main = new Splide( '#main-carousel', {
    type      : 'loop',
    rewind    : true,
    pagination: false,
    arrows    : false,
  } );

  var thumbnails = new Splide( '#thumbnail-carousel', {
    fixedWidth  : 100,
    gap         : 10,
    rewind      : true,
    pagination  : false,
    isNavigation: true,
    autoplay: 'play',
    pauseOnHover: false,
    pauseOnFocus: false,
  } );

  main.sync( thumbnails );
  main.mount();
  thumbnails.mount();
} );

// GSAP
