class Carousel_brqx{
  constructor(wrapper,li,button_forwr,button_backwr){
    this.wrapper=wrapper;
    this.li=li;
    this.button_backwr=button_backwr;
    this.button_forwr=button_forwr;
  }
  static get stop() {
      return true;
    }
}





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

// CAROUSEL WITH MARQUEE END
