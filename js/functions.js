document.onscroll = function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 10) {
    $(".navbar").addClass("fixed-top");
    $(".column-chat").addClass("column-chat-fixed");
    $(".chat-wrapper-page").css("margin-top", "127px");
  } else {
    $(".navbar").removeClass("fixed-top");
    $(".chat-wrapper-page").css("margin-top", "0");
  }
};

$(".fa-heart").click(function() {
  if ($(this).hasClass("clicked")) {
    $(this).removeClass("clicked");
  } else {
    $(this).addClass("clicked");
  }
});

// Calendario del home
$(document).ready(function() {
  $(".datepicker").datepicker({
    prevText: '<i class="fa fa-fw fa-angle-left"></i>',
    nextText: '<i class="fa fa-fw fa-angle-right"></i>'
  });
});

// Abrir ventana de chat
$(document).ready(function() {
  $(".contact").click(function() {
    $(".chat-window").css("display", "block");
  });

  $(".minimize-chat").click(function() {
    if (
      $(".chat-menu").hasClass("d-none") &&
      $(".chat-body").hasClass("d-none")
    ) {
      $(".chat-menu").removeClass("d-none");
      $(".chat-body").removeClass("d-none");
    } else {
      $(".chat-menu").addClass("d-none");
      $(".chat-body").addClass("d-none");
    }
  });
});

$(document).ready(function() {
  $(".home-chat-off").click(function() {
    if ($(this).hasClass("chat-off")) {
      $(this).removeClass("chat-off");
      $(".contact").removeClass("d-none");
      $(".contact-logos").addClass("d-none");
      $(this).text("Desconectarme");
    } else {
      $(this).addClass("chat-off");
      $(".contact").addClass("d-none");
      $(".contact-logos").removeClass("d-none");
      $(this).text("Conectarme");
    }
  });
});

$(document).ready(function() {
  $(".open-language").click(function() {
    $(".language-selector")
      .removeClass("animated slideOutDown")
      .addClass("animated slideInUp")
      .css("display", "flex");
  });

  $(".close-language-selector").click(function() {
    $(".language-selector")
      .removeClass("animated slideInUp")
      .addClass("animated slideOutDown");
  });
});
