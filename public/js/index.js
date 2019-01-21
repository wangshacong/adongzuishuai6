pi = 0;
ulwidth = 1200;
reft = 0;

function pic_next(i) {
if($('.piclist').is(':animated')){
$('.piclist').stop(true,true);
}
ml = 0;
pi = i;

pi = ( pi >= parseInt($(".piclist ul").length/3) ? 0 : pi);

if (pi <0) pi = parseInt($(".piclist ul").length/3) -1;


r = ml - (ulwidth*pi);

$('.piclist').animate({left: r + 'px'},'slow');
$('.picnewslist').animate({left: r + 'px'},'slow');
$('.pictab span').removeClass("on");
$('.pictab span:eq('+pi+')').addClass("on");
}

function index_picnews_init() {
$(".fb").each(function(){
$("a:gt(0)",this).html(function(){
this.outerHTML = "<i>|</i>" + this.outerHTML ; 
});
});
reft = window.setInterval(function(){
pic_next(++pi);
},8000); 

$('.picbox').mousemove(function(){$('.arrow').show();});
$('.picbox').mouseout(function(){$('.arrow').hide();});

$('.pictab span').each(function(i,o){
o.onclick =function() {
 pic_next(i);
window.clearInterval(reft);
};
});

$('.pic_next').click(function(){
pic_next(++pi);
window.clearInterval(reft);
});

$('.pic_prev').click(function(){
pic_next(--pi);
window.clearInterval(reft);
});
}

function index_init() {
$(".headlineList span").each(function(){
$("a:gt(0)",this).html(function(){
this.outerHTML = "<i>|</i>" + this.outerHTML ; 
});
});
}

//½¹µãÍ¼Æ¬Ò»
jQuery(function ($) {
 if ($(".slide-pic").length > 0) {
var defaultOpts = { interval: 8000, fadeInTime: 300, fadeOutTime: 200 };
var _titles = $("ul.slide-num li");
var _titles_bg = $("ul.slide-txt li");
var _bodies = $("ul.slide-pic li");
var _count = _titles_bg.length;
var _current = 0;
var _intervalID = null;
var stop = function () { window.clearInterval(_intervalID); };
var slide = function (opts) {
if (opts) {
_current = opts.current || 0;
} else {
_current = (_current >= (_count - 1)) ? 0 : (++_current);
};
   _bodies.filter(":visible").fadeOut(defaultOpts.fadeOutTime, function () {
    _bodies.eq(_current).fadeIn(defaultOpts.fadeInTime);
    _bodies.removeClass("cur").eq(_current).addClass("cur");
   });
   _titles.removeClass("cur").eq(_current).addClass("cur");
   _titles_bg.removeClass("cur").eq(_current).addClass("cur");
  };
  
$('.arrow_l').click(function(){
if (--_current <0) _current = _count-1;
slide({ current:  _current});
});
$('.arrow_r').click(function(){
if (++_current >=_count) _current = 0;
slide({ current:  _current});
});
  
  var go = function () {
   stop();
   _intervalID = window.setInterval(function () { slide(); }, defaultOpts.interval);
  };
  var itemMouseOver = function (target, items) {
   stop();
   var i = $.inArray(target, items);
   slide({ current: i });
  };
  _titles.hover(function () { if ($(this).attr('class') != 'cur') { itemMouseOver(this, _titles); } else { stop(); } }, go);
  _bodies.hover(stop, go);
  go();
 }
});