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
gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline();

tl.from('._body',{
  opacity:0,
  duration:.5,
  ease: "power3.out"
})
.from('._real_header_content_title',{
  y:100,
  opacity: 0,
  duration:.3,
  ease: "back.out(2)"
})
.from('._real_header_content_p',{
  y:100,
  opacity: 0,
  duration:.3,
  ease: "back.out(1.7)"
},.6)
.from('._real_header_content_btn_wrap',{
  y:100,
  opacity: 0,
  duration:.3,
  ease: "back.out(1.8)"
},.8)
.from('._real_header_content_support_inner',{
  y:100,
  opacity: 0,
  duration:.3,
  ease: "back.out(1.8)"
},1)
.from('._real_header_img',{
  y:50,
  opacity: 0,
  duration:.2,
  ease: "back.out(1.8)"
},1)
.from('._real_header_content_lock',{
  scale:0,
  opacity: 0,
  duration:.1,
  ease: "back.out(1.8)"
})
.from('._real_header_img_trust',{
  scale:0,
  opacity: 0,
  duration:.1,
  ease: "back.out(1.8)"
})
.from('._real_header_img_mortgage',{
  scale:0,
  opacity: 0,
  duration:.1,
  ease: "back.out(1.8)"
})
.from('._real_header_img_trophy',{
  scale:0,
  opacity: 0,
  duration:.1,
  ease: "back.out(1.8)"
})
.from('._real_header_content_support_arrow',{
  y:-20,
  scale:.9,
  rotate:-120,
  opacity: 0,
  duration:.3,
  ease: "back.out(1.8)"
})
.from('._real_header_img_shape1',{
  x:50,
  opacity: 0,
  duration:.5,
  ease: "power3.in"
},1.2)
.from('._real_header_shape',{
  x:40,
  opacity: 0,
  duration:.8,
  ease: "power3.in"
},1.2)
.from('._real_header_content_shape1',{
  opacity: 0,
  duration:.8,
  ease: "power3.in"
},1)
.from('._real_header_content_shape2',{
  opacity: 0,
  duration:.8,
  ease: "power3.in"
},1.2)
.from('._real_header_content_shape3',{
  opacity: 0,
  duration:.8,
  ease: "power3.in"
},1.3)
.from('._real_header_nav_wrap',{
  y: -200,
  duration:1,
  ease: "power3.out"
},1.2)
gsap.from('._real_avoid_wrap_shape',{
  scrollTrigger:{
    trigger:'._real_avoid_wrap',
    scrub:1.2
  },
  y: 120
})
gsap.from('._real_header_shape',{
  scrollTrigger:{
    trigger:'._real_avoid_wrap',
    scrub:1.2
  },
  y: 120
})
gsap.from('._real_header_img_shape1',{
  scrollTrigger:{
    trigger:'._real_header_img_wrap',
    scrub:1.2
  },
  y: 150
})
gsap.from('._real_header_content_lock',{
  scrollTrigger:{
    trigger:'._real_header_img_wrap',
    scrub:1
  },
  y: 100
})
gsap.from('._real_header_img_trust',{
  scrollTrigger:{
    trigger:'._real_header_img_wrap',
    scrub:.6
  },
  y: 80
})
gsap.from('._real_header_img_mortgage',{
  scrollTrigger:{
    trigger:'._real_header_img_wrap',
    scrub:.9
  },
  y: 150
})
gsap.from('._real_header_img_trophy',{
  scrollTrigger:{
    trigger:'._real_header_img_wrap',
    scrub:1.3
  },
  y: 120
})
gsap.from('._real_find_shape',{
  scrollTrigger:{
    trigger:'._real_find_wrap',
    scrub:1
  },
  y: 40,
  rotate: 40
})
gsap.from('._real_find_shape2',{
  scrollTrigger:{
    trigger:'._real_find_wrap',
    scrub:1
  },
  y: 30,
})
gsap.from('._real_find_bg',{
  scrollTrigger:{
    trigger:'._real_find_wrap',
    scrub:1
  },
  y: 100
})

gsap.from('._real_avoid_wrap_bg',{
  scrollTrigger:{
    trigger:'._real_avoid_wrap_bg',
  },
  width: 0,
  duration:1.4,
  ease: "power3.out"
})
gsap.from('._real_avoid_content_bg',{
  scrollTrigger:{
    trigger:'._real_avoid_wrap_bg',
  },
  height: 0,
  duration:1.4,
  ease: "power3.out"
})
gsap.from('._avoid_img',{
  scrollTrigger:{
    trigger:'._real_avoid_wrap_bg',
  },
  y: 50,
  opacity: 0,
  duration:1.4,
  ease: "power3.out"
})
gsap.from('._real_properties_header_txt',{
  scrollTrigger:{
    trigger:'._real_properties_header',
  },
  y: 50,
  opacity: 0,
  duration:1.4,
  ease: "power3.out"
})
gsap.from('._real_properties_header_p',{
  scrollTrigger:{
    trigger:'._real_properties_header',
  },
  y: 50,
  opacity: 0,
  duration:1.4,
  ease: "power3.out"
})
gsap.from('._real_properties_slider_wrap',{
  scrollTrigger:{
    trigger:'._real_properties_wrap',
  },
  x: 200,
  opacity: 0,
  duration:1.4,
  ease: "power4.out",
  delay:.4
})
gsap.from('._real_explore_arrow_shape',{
  scrollTrigger:{
    trigger:'._real_explore_content_title',
    start: '50% 50%'
  },
  rotate: 50,
  opacity: 0,
  duration:1.4,
  ease: "power3.out"
})
gsap.from('._real_explore_shape_img',{
  scrollTrigger:{
    trigger:'._real_explore_content_title',
    start: '50% 50%'
  },
  rotate: 40,
  x:120,
  opacity: 0,
  duration:1.4,
  ease: "power3.out"
})
gsap.from('._real_explore_content_img',{
  scrollTrigger:{
    trigger:'._real_explore_content_title',
    start: '50% 50%'
  },
  rotate: -20,
  x:-70,
  y:-70,
  opacity: 0,
  duration:1.2,
  ease: "expo.out",
  delay: .2
})
gsap.from('._real_explore_txt_shape',{
  scrollTrigger:{
    trigger:'._real_explore_content',
    start: '10% 75%'
  },
  opacity: 0,
  x: 50,
  duration:1.2,
  ease: "expo.out",
  delay: .3
})
gsap.from('._real_explore_txt_shape',{
  scrollTrigger:{
    trigger:'._real_explore_content',
    start: '40% 40%',
    scrub: 1.2
  },
  y:40,
  duration:1,
  ease: "expo.out",
})
gsap.from('._real_explore_content_img_bg',{
  scrollTrigger:{
    trigger:'._real_explore_content_title',
  },
  scale:0,
  x:-30,
  duration:1.5,
  ease: "expo.out"
})
gsap.from('._real_cta_content_bg_line',{
  scrollTrigger:{
    trigger:'._real_cta_content_wrap',
    // start: '40% 40%',
    scrub: 1.2
  },
  y:80,
  duration:.3,
  ease: "expo.out",
})
// gsap.to('._real_explore_shape_img',{
//   scrollTrigger:{
//     trigger:'._real_explore_content_title',
//     scrub: 1.2
//   },
//   y:50,
//   duration:1,
//   ease: "expo.out"
// })
gsap.fromTo('._real_marque_content_ul',{
  // scrollTrigger:{
  //   trigger:'._real_marque_content_wrap',
  //   scrub: .2,
  // },
  x: -225,
  duration:3,
  ease: "linear",
},{
  x: 34,
  duration:3,
  ease: "linear",
  repeat: -1
});
gsap.from('._real_marque_shape',{
  scrollTrigger:{
    trigger:'._real_marque_wrapper',
    start: '10% 80%'
  },
  y:80,
  x:-100,
  opacity: 0,
  duration:2,
  delay:.3,
  ease: "power3.out"
})
gsap.from('._real_marque_content_ul',{
  scrollTrigger:{
    trigger:'._real_marque_wrapper',
    start: '10% 80%'
  },
  opacity:0,
  width: 0,
  duration:2.3,
  delay:.4,
  ease: "expo.out"
})
gsap.from('._real_marque_content_wrap',{
  scrollTrigger:{
    trigger:'._real_marque_wrapper',
    start: '10% 80%'
  },
  width: 0,
  duration:2,
  delay:.1,
  ease: "power3.out"
})
gsap.from('._real_testimonial_content_img_shape',{
  scrollTrigger:{
    trigger:'._real_testimonial_content_img_wrap',
    start: '10% 80%',
    scrub: 1.2
  },
  y: 50,
  duration:1.2,
  ease: "power3.out"
})
gsap.from('._real_testimonial_img',{
  scrollTrigger:{
    trigger:'._real_testimonial_content_img',
    start: '10% 80%'
  },
  y: 50,
  opacity: 0,
  duration:1.2,
  ease: "power3.out"
})
gsap.from('._real_testimonial_content_img_inner',{
  scrollTrigger:{
    trigger:'._real_testimonial_content_img',
  },
  y: -50,
  opacity: 0,
  delay: .5,
  duration:1.6,
  ease: "power3.out"
})
gsap.from('._real_testimonial_content_img_bg',{
  scrollTrigger:{
    trigger:'._real_testimonial_content_img',
  },
  width: 0,
  duration:1.8,
  ease: "power3.out"
})




// .from('._real_header_img_trophy',{
//   y:50,
//   opacity: 0,
//   duration:.2,
//   ease: "back.out(1.8)"
// })
// .from('._real_header_img_trophy',{
//   y:50,
//   opacity: 0,
//   duration:.2,
//   ease: "back.out(1.8)"
// })

// .from('._real_header_nav_wrap',{
//   y:-100
// })