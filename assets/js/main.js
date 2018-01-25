/* Flag or Language Section Start */
    $('.lang-container a.pop-container-L.active').mouseenter(function(){
    $('.lang-container .flags').css('overflow', 'visible');
    });

    $('.lang-container .flags').mouseleave(function(){
    $('.lang-container .flags').css('overflow', 'hidden');
            });
    $('.lang-container .fa').mouseenter(function(){
    $('.lang-container .flags').css('overflow', 'visible');
            });
    $('.lang-container .fa').mouseleave(function(){
    $('.lang-container .flags').css('overflow', 'hidden');
            });

// Flag or Language Section End

// CAROUSEL WITH MARQUEE HEADER START
var stop=true;
var aftf=function(){
    if (stop==false){
      $('#marq1').trigger('forward');
    } 
          
};
var aftb=function(){
    if (stop==false){
      $('#marq1').trigger('backward');
    } 
          
};

var scroll_distance = $('#horiz li').width()+10;
    $('#marq1').scrollbox({distance:scroll_distance,switchItems: 1,startDelay: 10000,delay: 10000,speed:12,step:100,afterForward:aftf,afterBackward:aftb
});
$( window ).resize(function() {
  scroll_distance = $('#horiz li').width()+10;
    $('#marq1').trigger('updateConfig',{distance:scroll_distance,step:1})
});



    $('#marq1-backward').mouseenter(function () {
    stop=false;
        $('#marq1').trigger('backward');
  });
        $('#marq1-backward').mouseout(function () {
      stop=true;
  });
    $('#marq1-forward').mouseout(function () {
      stop=true;
  });
        $('#marq1-forward').mouseenter(function () {
    stop=false;
        $('#marq1').trigger('forward');
  });




     $('.right_arrow').mouseenter(function(){
       $(this).siblings('.option1').children('.text_opt1').animate({
            left: '200px'
       
       },5000);
   });
   $('.right_arrow').mouseleave(function(){
       $(this).siblings('.option1').children('.text_opt1').stop();
   });
   $('.left_arrow').mouseenter(function(){
       $(this).siblings('.option1').children('.text_opt1').animate({
            left: '-200px'
       
       },5000);
   });
   $('.left_arrow').mouseleave(function(){
       $(this).siblings('.option1').children('.text_opt1').stop();
   });
// CAROUSEL WITH MARQUEE END

stop=false;
// FRONT CAROUSEL START
var aftff=function(){
    if (stop==false){
      $('#front-carousel-cont').trigger('forward');
            $('#back-carousel-cont').trigger('forward');

    } 
          
};
var aftbf=function(){
    if (stop==false){
      $('#front-carousel-cont').trigger('backward');
            $('#back-carousel-cont').trigger('backward');
    } 
          
};



var scroll_distance_f = $('#front-carousel-cont li').width();

    $('#front-carousel-cont').scrollbox({distance:scroll_distance_f,switchItems: 1,startDelay: 10000,delay: 10000,speed:12,afterForward:aftff,afterBackward:aftbf
});
        $('#back-carousel-cont').scrollbox({distance:scroll_distance_f,switchItems: 1,startDelay: 10000,delay: 10000,speed:12,afterForward:aftff,afterBackward:aftbf
});

    $('#front-carousel-backward').mouseenter(function () {
    stop=false;
        $('#front-carousel-cont').trigger('backward');
        $('#back-carousel-cont').trigger('backward');
  });
        $('#front-carousel-backward').mouseout(function () {
      stop=true;
  });
    $('#front-carousel-forward').mouseout(function () {
      stop=true;
  });
        $('#front-carousel-forward').mouseenter(function () {
    stop=false;
        $('#front-carousel-cont').trigger('forward');
        $('#back-carousel-cont').trigger('forward');
  });
$( window ).resize(function() {
  scroll_distance_f = $('#font-carousel-ul li').width();
    $('#front-carousel-cont').trigger('updateConfig',{distance:scroll_distance_f});
    $('#back-carousel-cont').trigger('updateConfig',{distance:scroll_distance_f});
});
// FRONT CAROUSEL END

// LETTERING JS START
$(document).ready(function() {
      $(".circle").lettering();
      console.log('what');
  for (var i=1;i<120;i++){
  var classname=".char"+i;
  var degree=i*3.7;
  if ((i%15)==0){
      degree=i*3.7;
  }
  var rotate= "rotate("+degree+"deg)";
  $(classname).css('transform',rotate);
  console.log(classname);
  console.log(rotate);
}

    });

// LETTERING JS END

// BOTTOM CAROUSEL START
stop=false;
var aftfb=function(){
    if (stop==false){
      $('#bottom-carousel-cont').trigger('forward');

    } 
          
};
var aftbb=function(){
    if (stop==false){
      $('#bottom-carousel-cont').trigger('backward');
    } 
          
};



var scroll_distance_f = $('#bottom-carousel-cont li').width();

    $('#bottom-carousel-cont').scrollbox({distance:scroll_distance_f,switchItems: 1,startDelay: 10000,delay: 10000,speed:12,afterForward:aftfb,afterBackward:aftbb
});
      
    $('#bottom-carousel-backward').mouseenter(function () {
    stop=false;
        $('#bottom-carousel-cont').trigger('backward');
  });
        $('#bottom-carousel-backward').mouseout(function () {
      stop=true;
  });
    $('#bottom-carousel-forward').mouseout(function () {
      stop=true;
  });
        $('#bottom-carousel-forward').mouseenter(function () {
    stop=false;
        $('#bottom-carousel-cont').trigger('forward');
  });
$( window ).resize(function() {
  scroll_distance_f = $('#bottom-carousel ul li').width();
    $('#bottom-carousel-cont').trigger('updateConfig',{distance:scroll_distance_f});
});

// BOTTOM CAROUSEL END

// HOVER ARROWS START

$('#horiz li').mouseenter(function(){
$(this).children('.left_arrow').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});
});
$('#horiz li').mouseleave(function(){
$(this).children('.left_arrow').css({opacity: 1.0, visibility: "visible"}).animate({opacity: 0}, 200);
})
$('#horiz li').mouseenter(function(){
$(this).children('.right_arrow').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});
});
$('#horiz li').mouseleave(function(){
$(this).children('.right_arrow').css({opacity: 1.0, visibility: "visible"}).animate({opacity: 0}, 200);
})



// HOVER ARROWS END

// HOVER BOTTOM-CAROUSEL START

$('.menu-item .wrap-arrows .fa-arrow-up').mouseenter(function(){
$(this).parents('.bottom-carousel-item').children('.image-item').children('.anverso-img-item').css('display','none');
$(this).parents('.bottom-carousel-item').children('.image-item').children('.reverso-img-item').css('display','block');
$(this).parents('.bottom-carousel-item').children('.image-item').children('.wrap-circle').children('center').children('.circle1').css('height','1vw');
$(this).parents('.bottom-carousel-item').children('.image-item').children('.wrap-circle').children('center').children('.circle2').css('height','1.2vw');
$(this).parents('.bottom-carousel-item').children('.image-item').children('.wrap-circle').children('center').children('.circle1').css('width','1vw');
$(this).parents('.bottom-carousel-item').children('.image-item').children('.wrap-circle').children('center').children('.circle2').css('width','1.2vw');
});
$('.menu-item .wrap-arrows .fa-arrow-down').mouseenter(function(){
$(this).parents('.bottom-carousel-item').children('.image-item').children('.reverso-img-item').css('display','none');
$(this).parents('.bottom-carousel-item').children('.image-item').children('.anverso-img-item').css('display','block');
$(this).parents('.bottom-carousel-item').children('.image-item').children('.wrap-circle').children('center').children('.circle2').css('height','1vw');
$(this).parents('.bottom-carousel-item').children('.image-item').children('.wrap-circle').children('center').children('.circle1').css('height','1.2vw');
$(this).parents('.bottom-carousel-item').children('.image-item').children('.wrap-circle').children('center').children('.circle2').css('width','1vw');
$(this).parents('.bottom-carousel-item').children('.image-item').children('.wrap-circle').children('center').children('.circle1').css('width','1.2vw');
});





// HOVER BOTTOM-CAROUSEL END

// HOVER DROPUP START
$('.menu-item .dropdown-bottom .fa-arrow-up').mouseenter(function(){
$(this).parents('.wrap-drop-up').children('.color-dropup-1').css('visibility','visible');
$(this).parents('.wrap-drop-up').children('.color-dropup-2').css('visibility','visible');
$(this).parents('.wrap-drop-up').children('.color-dropup-3').css('visibility','visible');

console.log('ha');

});

$('.wrap-drop-up').mouseleave(function(){
$(this).children('.color-dropup-1').css('visibility','hidden');
$(this).children('.color-dropup-2').css('visibility','hidden');
$(this).children('.color-dropup-3').css('visibility','hidden');

console.log('hu');

});

// HOVER DROPUP END


// mobile CAROUSEL START
stop=false;
var aftfbm=function(){
    if (stop==false){
      $('#mobile-carousel-cont').trigger('forward');

    } 
          
};
var aftbbm=function(){
    if (stop==false){
      $('#mobile-carousel-cont').trigger('backward');
    } 
          
};



var scroll_distance_f = $('#mobile-carousel-cont li').width();

    $('#mobile-carousel-cont').scrollbox({distance:scroll_distance_f,switchItems: 1,startDelay: 10000,delay: 10000,speed:12,afterForward:aftfbm,afterBackward:aftbbm
});
      
    $('#mobile-carousel-backward').mouseenter(function () {
    stop=false;
        $('#mobile-carousel-cont').trigger('backward');
  });
        $('#mobile-carousel-backward').mouseout(function () {
      stop=true;
  });
    $('#mobile-carousel-forward').mouseout(function () {
      stop=true;
  });
        $('#mobile-carousel-forward').mouseenter(function () {
    stop=false;
        $('#mobile-carousel-cont').trigger('forward');
  });
$( window ).resize(function() {
  scroll_distance_f = $('#mobile-carousel ul li').width();
    $('#mobile-carousel-cont').trigger('updateConfig',{distance:scroll_distance_f});
});




$('.menu-item .triangle-mobile-up').mouseenter(function(){
$(this).parents('.mobile-carousel-item').children('.image-item').children('.anverso-img-item').css('display','none');
$(this).parents('.mobile-carousel-item').children('.image-item').children('.reverso-img-item').css('display','block');
$(this).parents('.mobile-carousel-item').children('.image-item').children('.wrap-circle').children('center').children('.circle1').css('height','3vw');
$(this).parents('.mobile-carousel-item').children('.image-item').children('.wrap-circle').children('center').children('.circle2').css('height','4vw');
$(this).parents('.mobile-carousel-item').children('.image-item').children('.wrap-circle').children('center').children('.circle1').css('width','3vw');
$(this).parents('.mobile-carousel-item').children('.image-item').children('.wrap-circle').children('center').children('.circle2').css('width','4vw');
});
$('.menu-item .triangle-mobile-down').mouseenter(function(){
$(this).parents('.mobile-carousel-item').children('.image-item').children('.reverso-img-item').css('display','none');
$(this).parents('.mobile-carousel-item').children('.image-item').children('.anverso-img-item').css('display','block');
$(this).parents('.mobile-carousel-item').children('.image-item').children('.wrap-circle').children('center').children('.circle2').css('height','3vw');
$(this).parents('.mobile-carousel-item').children('.image-item').children('.wrap-circle').children('center').children('.circle1').css('height','4vw');
$(this).parents('.mobile-carousel-item').children('.image-item').children('.wrap-circle').children('center').children('.circle2').css('width','3vw');
$(this).parents('.mobile-carousel-item').children('.image-item').children('.wrap-circle').children('center').children('.circle1').css('width','4vw');
});
// mobile CAROUSEL END

// SOCIAL FEEDS START
// $('#facebook-content').append(
//         '<div class="facebook-container">'+
//           /*'<div id="demo1" data-url="http://dog.dbrqx.com/index2/" data-text="Make your sharing widget with Sharrre (jQuery Plugin)" data-title="share"></div>'+*/
//           '<div class="facebook-warning">Please log in to Facebook to see facebook feed!</div>'+
//           '<div class="fb-page" data-href="https://www.facebook.com/edubuscanovia/" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">'+
//             '<blockquote cite="https://www.facebook.com/edubuscanovia/" class="fb-xfbml-parse-ignore">'+
//               '<a href="https://www.facebook.com/edubuscanovia/">Facebook</a>'+
//             '</blockquote>'+
//           '</div>'+
//           '<div id="fb-root"></div>'+
//           '<div class="fb-like" data-href="http://dog.dbrqx.com/index2/" data-layout="button_count" data-size="large" data-action="recommend" data-show-faces="true"></div>'+
//         '</div></div>');


// SOCIAL FEED END
/////////////BOTTOM SLIDER START//////////////////////////////////////////////////////////////////

setTimeout(function(){ 
  console.log('pocetak');
let timeoutBottom;
$('.bottom-trigger').flexslider({
  animation: "slide",
  animationLoop: false,
  itemWidth: 250,
  itemMargin: 5
});
let timerForSlider;
$('.bottom-arrow-prev').hover(function(){
  timerForSlider = setInterval(function() {
    $('.bottom-trigger').flexslider('prev');
}, 500);
}, function(){
  clearInterval(timerForSlider);
});
$('.bottom-arrow-next').hover(function(){
  timerForSlider = setInterval(function() {
    $('.bottom-trigger').flexslider('next');
}, 500);
}, function(){
  clearInterval(timerForSlider);
});
function hideBottom(){
  $('.bottom-trigger').hide('drop', {direction: 'down'}, 500);
  $('.black-line-for-trigger').css('background-color','black');
};
$('.bottom-hide').click(hideBottom)
$('.black-line-for-trigger').hover(function(){
  console.log('keste');
  clearTimeout(timeoutBottom);
  $('.black-line-for-trigger').css('background-color','transparent');
  $('.bottom-trigger').show('drop', {direction: 'down'}, 500)
},function(){
  timeoutBottom = setTimeout(hideBottom, 10000);
});
$('.bottom-trigger').hover(function(){
  clearTimeout(timeoutBottom);
},function(){
  timeoutBottom = setTimeout(hideBottom, 10000);
});
  console.log('pocetak');
 }, 1500);
/////////////BOTTOM SLIDER END////////////////////////////////////////////////////////////////////

// SOCIAL FEEDS JS START
  $('.linkedin-logo').hover(function(){
    $('.facebook-container').css('display', 'none');
    
    $('.google-container').css('display', 'none');
    $('.linkedin-container').css('display', 'block')
    $('.linkedin-container').css('z-index', '14')
    
    $('.social-close-button').css('display', 'block');
    $('.social-close-button').click(function(){
      $('.linkedin-container').css('display', 'none');
      $(this).css('display', 'none');
      
    });
  }, function(){
    $('.linkedin-container').css('dsplay', 'none')
  });
  $('.facebook-logo').hover(function(){
    
    $('.linkedin-container').css('display', 'none');
    $('.google-container').css('display', 'none');
    $('.facebook-container').css('display', 'block');
    
    $('.social-close-button').css('display', 'block');
    $('.social-close-button').click(function(){
      $('.facebook-container').css('display', 'none');
      //$('.social-share-button').css('display', 'none')
      $(this).css('display', 'none');
      
    });
  }, function(){
    $('.facebook-container').css('dsplay', 'none')
  });
  $('.google-logo').hover(function(){
    
    $('.linkedin-container').css('display', 'none');
    $('.facebook-container').css('display', 'none');
    $('.google-container').css('display', 'block');
    
    $('.social-close-button').css('display', 'block');
    $('.social-close-button').click(function(){
      $('.google-container').css('display', 'none');
      $(this).css('display', 'none');
      
    });
  }, function(){
    $('.google-container').css('dsplay', 'none')
  });


// SOCIAL FEEDS END

// IMAGE LOADING START
      let images=[];
      let imgsrc="";
      $('.front-carousel-ul li img').each(function(){
        imgsrc=$(this).attr('src');
        console.log(imgsrc);
        console.log('IMAGE SRC');
        images.push(imgsrc)
      });

  function loadimages(device) {

      let domain= "http://palillos.dbrqx.com/index1/";
      let pathToImgFrontFolder= "palillos/front/";
      let pathToImgBackFolder= "palillos/back/";
      let arrayLength = images.length;
      console.log(images);
      console.log(device);
      switch(device){
          case 'mobile':
              $(".back-carousel-ul li").each(function (index) {
                  let image = images[index];
                  image = image + '_';
                  let resolution = '0278x0046';
                  let back_carousel_pic = domain + pathToImgBackFolder + resolution + '/' + image + resolution + '.jpg';
                  $(this).children('img').attr('src', back_carousel_pic);
              });
              $(".front-carousel-ul li").each(function (index) {
                  let image = images[index];
                  image = image + '_';
                  let resolution = '0278x0046';
                  image = image.replace('r_pal', '_pal');
                  let front_carousel_pic = domain + pathToImgFrontFolder + resolution + '/' + image + resolution + '.jpg';
                  $(this).children('img').attr('src', front_carousel_pic);
              });
              $("#mobile-carousel-cont li").each(function (index) {
                  let image = images[index];
                  image = image + '_';
                  let resolution = '0231x0038';
                  image = image.replace('r_pal', '_pal');
                  let bottom_front_carousel_pic = domain + pathToImgFrontFolder + resolution + '/' + image + resolution + '.jpg';
                  $(this).children('.mobile-carousel-item').children('.image-item').children('.reverso-img-item').attr('src', bottom_front_carousel_pic);

                  image = image.replace('_pal', 'r_pal');
                  console.log(image);
                  let bottom_back_carousel_pic = domain + pathToImgBackFolder + resolution + '/' + image + resolution + '.jpg';
                  $(this).children('.mobile-carousel-item').children('.image-item').children('.anverso-img-item').attr('src', bottom_back_carousel_pic);
              });

              break;
         case 'tablet':
              $(".back-carousel-ul li").each(function (index) {
                  let image = images[index];
                  image = image + '_';
                  let resolution = '0333x0070';
                  let back_carousel_pic = domain + pathToImgBackFolder + resolution + '/' + image + resolution + '.jpg';
                  $(this).children('img').attr('src', back_carousel_pic);
              });


              $(".front-carousel-ul li").each(function (index) {
                  let image = images[index];
                  image = image + '_';
                  let resolution = '0333x0070';
                  image = image.replace('r_pal', '_pal');
                  let front_carousel_pic = domain + pathToImgFrontFolder + resolution + '/' + image + resolution + '.jpg';
                  $(this).children('img').attr('src', front_carousel_pic);
              });


              $("#bottom-carousel-cont li").each(function (index) {
                  let image = images[index];
                  image = image + '_';
                  let resolution = '0333x0070';
                  image = image.replace('r_pal', '_pal');
                  let bottom_front_carousel_pic = domain + pathToImgFrontFolder + resolution + '/' + image + resolution + '.jpg';
                  $(this).children('.bottom-carousel-item').children('.image-item').children('.reverso-img-item').attr('src', bottom_front_carousel_pic);

                  image = image.replace('_pal', 'r_pal');
                  console.log(image);
                  let bottom_back_carousel_pic = domain + pathToImgBackFolder + resolution + '/' + image + resolution + '.jpg';
                  $(this).children('.bottom-carousel-item').children('.image-item').children('.anverso-img-item').attr('src', bottom_back_carousel_pic);
              });
              break;
          case 'desktop':
              $(".back-carousel-ul li").each(function (index) {
                  let image = images[index];
                  image = image + '_';
                  let resolution = '0210x0051';
                  let front_carousel_pic = domain + pathToImgBackFolder + resolution + '/' + image + resolution + '.jpg';
                  $(this).children('img').attr('src', front_carousel_pic);
              });
              $(".front-carousel-ul li").each(function (index) {
                  let image = images[index];
                  image = image + '_';
                  let resolution = '0210x0051';
                  image = image.replace('r_pal', '_pal');
                  let back_carousel_pic = domain + pathToImgFrontFolder + resolution + '/' + image + resolution + '.jpg';
                  $(this).children('img').attr('src', back_carousel_pic);
              });

              $("#bottom-carousel-cont li").each(function (index) {
                  let image = images[index];
                  image = image + '_';
                  let resolution = '0384x0082';
                  image = image.replace('r_pal', '_pal');
                  let bottom_front_carousel_pic = domain + pathToImgFrontFolder + resolution + '/' + image + resolution + '.jpg';
                  $(this).children('.bottom-carousel-item').children('.image-item').children('.reverso-img-item').attr('src', bottom_front_carousel_pic);

                  image = image.replace('_pal', 'r_pal');
                  console.log(image);
                  let bottom_back_carousel_pic = domain + pathToImgBackFolder + resolution + '/' + image + resolution + '.jpg';
                  $(this).children('.bottom-carousel-item').children('.image-item').children('.anverso-img-item').attr('src', bottom_back_carousel_pic);
              });
              break;
          case '4k':
              $(".back-carousel-ul li").each(function (index) {
                  let image = images[index];
                  image = image + '_';
                  let resolution = '0420x0102';
                  let front_carousel_pic = domain + pathToImgBackFolder + resolution + '/' + image + resolution + '.jpg';
                  $(this).children('img').attr('src', front_carousel_pic);
              });
              $(".front-carousel-ul li").each(function (index) {
                  let image = images[index];
                  image = image + '_';
                  let resolution = '0420x0102';
                  image = image.replace('r_pal', '_pal');
                  let back_carousel_pic = domain + pathToImgFrontFolder + resolution + '/' + image + resolution + '.jpg';
                  $(this).children('img').attr('src', back_carousel_pic);
              });
              $("#bottom-carousel-cont li").each(function (index) {
                  let image = images[index];
                  image = image + '_';
                  let resolution = '0768x0164';
                  image = image.replace('r_pal', '_pal');
                  let bottom_front_carousel_pic = domain + pathToImgFrontFolder + resolution + '/' + image + resolution + '.jpg';
                  $(this).children('.bottom-carousel-item').children('.image-item').children('.reverso-img-item').attr('src', bottom_front_carousel_pic);

                  image = image.replace('_pal', 'r_pal');
                  console.log(image);
                  let bottom_back_carousel_pic = domain + pathToImgBackFolder + resolution + '/' + image + resolution + '.jpg';
                  $(this).children('.bottom-carousel-item').children('.image-item').children('.anverso-img-item').attr('src', bottom_back_carousel_pic);
              });
              break;
  }

}
  var size;
  function check_size() {
      if (window.innerWidth <= 3840) {
          size = '4k';
          if (window.innerWidth <= 1920) {
              size = 'desktop';
              if (window.innerWidth <= 1080) {
                  size = 'tablet';
                  if (window.innerWidth <= 375) {
                      size = 'mobile';
                      console.log('size');

                  }
              }
          }
      }
 }
 check_size();
 console.log(size);

 loadimages(size);

 $(window).resize(function () {
     check_size();
     console.log(size);
     loadimages(size);

 });





// IMAGE LOADING END

function myFunction(){
  window.location.href = 'http://palillos.dbrqx.com/index1' ;
}

// LANGUAGES START
if (size=='mobile'){
  $('.lang-container .flags').unbind('mouseenter mouseleave');
  $('.lang-container a.pop-container-L.active').unbind('mouseenter mouseleave');
  $('.lang-container .fa').unbind('mouseenter mouseleave');
}


$('.active-lang').click(function(){
    $('body').on({  //preventing defauld events
      'mousewheel': function(e) {
        e.preventDefault();
        e.stopPropagation();
      }
    });
    $('.mobile-langs').toggle(); //toggling the view
    $('.black-line-for-trigger').toggle();//this is for inner page issues, you shouldnt reuse it just skip this line
    $('.lang-wrapper').click(function(){//handling clicking out of any language
      $('.mobile-langs').toggle();//closing view
      $('.black-line-for-trigger').toggle();//this is for inner page issues, you shouldnt reuse it just skip this line
      $('body').unbind();//this is where we let the browser scroll/swipe. THIS IS VERY IMPORTANT. if you do not fire that function your page would remain withoit scroll/swipe
    });
  });
  $('.mobile-lang-item').click(function(){//this is event for selection of language
    $('.lang-wrapper').unbind();//we unbinding any events from this element, this is necessary to prevent future bugs if any apperas
    $('body').unbind();//here we deleting prevents of default events from line 512
    $('.active-lang').attr('src', $(this).attr('src'));//resolving change of image of flag language in main view
    $('.mobile-langs').toggle();//closing view with all languages
    Cookies.set('c_lang', $(this).attr('lang'));//this line is for cookies, skip it if you have your own way of doing it
    $('.black-line-for-trigger').toggle();//this is for inner page issues, you shouldnt reuse it just skip this line
  });
  $('.lang-scroll-up').hover(function(){
    movingUp = setInterval(function() {
      var actualHeight = $('.lang-wrapper').height();
      y = parseInt($('.lang-wrapper').css('top'));
      if(y > -actualHeight/2){
        y--;
        $('.lang-wrapper').css('top', y+'px');
      } else {
        return;
      }
    }, 25);
  },function(){
    clearInterval(movingUp);
  });
  $('.lang-scroll-down').hover(function(){
    movingDown = setInterval(function() {
      var actualHeight = $('.lang-wrapper').height();
      y = parseInt($('.lang-wrapper').css('top'));
      if(y !=0 ){
        y++;
        $('.lang-wrapper').css('top', y+'px');
      } else {
        return;
      }
    }, 25);
  },function(){
    clearInterval(movingDown);
  });

  // LANGUAGES END