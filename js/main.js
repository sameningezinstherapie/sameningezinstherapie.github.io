var menuBtn = $('#menuBtn')
var menu = $('.menu')
var pageLinks = $('.link');

$(document).ready(function(){
  setMenuBtn();
  goPage();
  onScroll();
  setEnterView();
})

function setMenuBtn() {
  console.log("function active");
  menuBtn.click(function(){
    if (menuBtn.hasClass("play")) {
      closeMenu();
    } else {
      openMenu();
    }
  })
}

function onScroll() {
  $(window).on('scroll', function(e){
    console.log("scroll active");
    var st = $(window).scrollTop();
    var sections = $(".section");
    if ($(window).width() < 992) {
      sections.each(function(i){
        if (st >= $(this).offset().top - 30) {
          $("#top-title").html($(this).attr("name"));
        } else if (st <= $(window).height()) {
          $("#top-title").html("Peter Rober");
        }
      });
    } else {
      console.log("large screen");
      if ($(window).scrollTop() >= $("#section-videos").offset().top - 150){
        $(".navbar").addClass("centered");
        $(".navbar").removeClass("shift");
      } else if ($(window).scrollTop() >= $("#section-wiebenik").offset().top - 150) {
        $(".navbar").addClass("shift");
        $(".navbar").removeClass("centered");
      } else {
        $(".navbar").removeClass("shift");
        $(".navbar").removeClass("centered");
      }
    }
  });
}


function goPage() {
  pageLinks.click(function(e){
    e.preventDefault;
    var id = $(this).attr('id');
    var add = 30;
    if ($(window).width() > 992) {
      if (id == "boek") {
        //add = -100;
      }
    }
    closeMenu();
    if (id == "home") {
      $([document.documentElement, document.body]).animate({
        scrollTop: 0
      }, 1000)
    } else {
      $([document.documentElement, document.body]).animate({
        scrollTop: $('#section-' + id).offset().top + add
      }, 1000)
    }
  })
}

function openMenu() {
  menuBtn.addClass("play");
  menuBtn.removeClass("play-reverse");
  menu.addClass("open");
}

function closeMenu() {
  menuBtn.addClass("play-reverse");
  menuBtn.removeClass("play");
  menu.removeClass("open");
}

function setEnterView() {
  enterView({
    selector: '.enter-view',
    enter: function(el) {
      el.classList.add('entered');
    },
    offset: 0.1,
    exit: function(el) {
      el.classList.remove('entered');
    }
  });
}
