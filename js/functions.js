// Esta funcion se encarga de hacer fijo la ventana del chat y acomodar todo el body cuando el navbar se vuelve fijo
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

// Esta funcion es la encargada te agregar el estado de like en los corazones
$(".fa-heart").click(function() {
  if ($(this).hasClass("clicked")) {
    $(this).removeClass("clicked");
  } else {
    $(this).addClass("clicked");
  }
});

// En esta funcion se cargar las flechas de anterior y siguiente en el calendario del home
$(document).ready(function() {
  $(".datepicker").datepicker({
    prevText: '<i class="fa fa-fw fa-angle-left"></i>',
    nextText: '<i class="fa fa-fw fa-angle-right"></i>'
  });
});

// Esta funcion genera las ventanas del chat del home
$(document).ready(function() {
  $(".contact").click(function() {
    //Contamos la cantidad de ventanas que existen abiertas
    let chats = $(".chat-window").length + 1;
    // Definimos el contenido de la ventana
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

    // Revisamos si hay 3 ventanas abiertas, si es asi no permitiremos que se abran mas
    if (chats >= 3) {
      $(".more-chats-windows").css("display", "block");
    } else {
      $(".more-chats-windows").css("display", "none");
    }
    if (chats > 3) {
      console.log("CHAT WINDOWS LIMIT REACHED");
    } else {
      //sino entonces procedemos a crear la ventana
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

// Esta funcion es la encargada de minimizar y volver a abrir el chat
$(document).ready(function() {
  // hcemos tracking del boton de minimizar clickeado
  $(document).on("click", ".minimize-chat", function() {
    // Agarramos la info del boton para saber que ventana de chat corresponde
    var correctChat = $(this).data("info");
    console.log(correctChat);
    // veriricamos si la ventana de chat seleccionada tiene las clases para esconder y procedemos a esconderlo o agrandarlo dependiendo del caso
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
  // Esta funcion es la encargada de cerrar las ventanas de chat
  $(document).on("click", ".close-chat", function() {
    var correctChat = $(this).data("info");
    $(`.window-chat-${correctChat}`).remove();
    let chats = $(".chat-window").length + 1;
    if (chats == 3) {
      $(".more-chats-windows").css("display", "none");
    }
  });
});

// Esta es la funcion encargada de de desconectar el chat y mostrar el chat con los iconos de Famemory
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

// Esta es la funcion indicada de abrir la ventana de seleccion de idioma
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

// Esta funcion es la encargada de crear el tooltip para las reacciones
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

// funcion agrega el input para responder comentarios
$(document).ready(function() {
  $(".response-creator").click(function() {
    var responseId = $(this).attr("id");

    var theDiv = Array.from($(`.response-${responseId}`))[0];
    console.log(theDiv);
    var customForm = `<form action="" class="response-id">
    <div class="response-wrapper">
      <div class="profile-pic">
          <img src="assets/images/walls/m.jpg" alt="">
      </div>
      <div class="content-message-wrapper">
        <input type="text">
      </div>
    </div>
  </form>`;
    theDiv.innerHTML = customForm;
  });
});
