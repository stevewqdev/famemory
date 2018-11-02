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

// Inicializar los emojis
$(document).ready(function() {
  $(".picker").lsxEmojiPicker({
    twemoji: true,
    onSelect: function(emoji) {
      console.log(emoji);
    }
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
