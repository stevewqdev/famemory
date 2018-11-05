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
    let chats = $(".chat-window").length + 1;
    var ChatWindow = `<div class="chat-window window-chat-${chats}">
    <div class="top-chat-window">
      <div class="profile-pic">
        <img src="assets/images/other/ff.jpg" alt="">
      </div>
      <div class="info">
        <h6>Emma Watson</h6>
        <div class="dropdown">
          <i class="fas fa-ellipsis-h dropdown" data-toggle="dropdown"></i>
          <div class="dropdown-menu">
            <a class="dropdown-item minimize-chat" data-info="${chats}" href="#">Minimizar</a>
            <a class="dropdown-item close-chat" data-info="${chats}" href="#">Cerrar</a>
          </div>
        </div>

      </div>
    </div>
    <div class="chat-body cb-${chats}">
      <div class="friend-message">
        <p>Hola como estas?</p>
      </div>
      <div class="my-message">
        <p>Hola!!</p>
      </div>
    </div>
    <div class="chat-menu cm-${chats}">
      <div class="the-form">
        <form action="">
          <input type="text" placeholder="Escribe tu mensaje">
        </form>
      </div>
      <div class="icons">
        <i class="fas fa-paperclip"></i>
        <i class="far fa-image" style=" margin-left: 10px; "></i>
      </div>
    </div>
  </div>`;

    if (chats > 3) {
      console.log("no puedes abrir mas chats");
    } else {
      $(".container-fluid").append(ChatWindow);
      if (chats == 1) {
      } else {
        var chatPosition = $(`.window-chat-${chats}`).css("right");
        chatPosition = parseInt(chatPosition, 10);
        var xPosition = chatPosition * chats;
        console.log(xPosition);
        var theChat = $(`window-chat-${chats}`);
      }
    }
  });
});

$(document).ready(function() {
  $(document).on("click", ".minimize-chat", function() {
    var correctChat = $(this).data("info");
    console.log(correctChat);
    if (
      $(`.cb-${correctChat}`).hasClass("d-none") &&
      $(`.cm-${correctChat}`).hasClass("d-none")
    ) {
      $(`.cm-${correctChat}`).removeClass("d-none");
      $(`.cb-${correctChat}`).removeClass("d-none");
      $(this).text("Minimizar");
    } else {
      $(`.cm-${correctChat}`).addClass("d-none");
      $(`.cb-${correctChat}`).addClass("d-none");
      $(this).text("Abrir");
    }
  });

  $(document).on("click", ".close-chat", function() {
    var correctChat = $(this).data("info");
    $(`.window-chat-${correctChat}`).remove();
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
$(document).ready(function() {
  tippy.setDefaults({
    arrow: true,
    arrowType: "round",
    duration: 0,
    interactive: true,
    multiple: true
  });

  tippy(".like-box", {
    content: document.querySelector(".reaction-tools").innerHTML
  });
});
