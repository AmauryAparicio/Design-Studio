$(document).ready(function () {
  /* ----------Altura dinamica del Banner---------- */
  var banner = $('#banner');
  function alturaBanner() {
    var vpaltura = $(window).height();
    banner.css('height', vpaltura);
  }
  alturaBanner();
  $(window).resize(alturaBanner);
  /* ----------Sticky Header---------- */
  var fixedHeader = $('#fixedHeader');
  var btnVolverArriba = $('#btnVolverArriba');
  $(window).on('scroll', function () {
    var proyectosOffsetTop = $('#proyectos').offset().top;
    if ($(window).scrollTop() >= proyectosOffsetTop/2) {
      fixedHeader.css('marginTop', 0);
      btnVolverArriba.css('marginRight', 0);
    } else{
      fixedHeader.css('marginTop', '-4.25rem');
      btnVolverArriba.css('marginRight', '-3.75rem');
    }
  });
  /* ----------Scroll Suave---------- */
  $('a.volver-arriba').on('click', function (e) {
    e.preventDefault();
    if ($(window).scrollTop() != 0) {
      $('html, body').stop().animate({scrollTop: 0}, 1000);
    }
  });
  $('a.scroll-suave').on('click', function (e) {
    e.preventDefault();
    var seccionOffsetTop = $($(this).attr('href')).offset().top;
    $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
  });
  $('a.scroll-acercaDe').on('click', function (e) {
    e.preventDefault();
    var seccionOffsetTop = $($(this).attr('href')).offset().top - 122;
    $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
  });
  $('a.scroll-equipo').on('click', function (e) {
    e.preventDefault();
    var seccionOffsetTop = $($(this).attr('href')).offset().top - 68;
    $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
  });
  /* ----------Modal---------- */
  $('.imagen-proyecto').on('click', function () {
    var rutaImagen = $(this).attr('src');
    var modal = '<div class="modal" id="modal"><img src="' + rutaImagen + '" alt="Proyecto" class="imagen-proyecto"><div class="btn-cerrar" id="btnCerrar"><i class="fa fa-times" aria-hidden="true"></i></div></div>';
    $('#proyectos').after(modal);
    $('#btnCerrar').on('click', function () {
      $('#modal').remove();
    });
  });
  $(document).on('keyup', function (e) {
    if (e.which == 27) {
      $('#modal').remove();
    }
  });
  /* ----------Slider---------- */
  var slider = $('#slider');
  var btnAnterior = $('#btnAnterior');
  var btnSiguiente = $('#btnSiguiente');
  $('#slider .slide:last').insertBefore('#slider .slide:first');
  slider.css('marginLeft', '-43%');
  function moverDerecha() {
    if (!slider.is(':animated')) {
      slider.animate({
        marginLeft: '-105.6%'
      }, 700, function () {
        $('#slider .slide:first').insertAfter('#slider .slide:last');
        slider.css('marginLeft', '-43%');
        resetInterval();
      });
    }
  }
  function moverIzquierda() {
    if (!slider.is(':animated')) {
      $('#slider .slide:last').insertBefore('#slider .slide:first');
      slider.css('marginLeft', '-105.6%');
      slider.animate({
        marginLeft: '-43%'
      }, 700, function () {
        resetInterval();
      });
    }
  }
  btnSiguiente.on('click', moverDerecha);
  btnAnterior.on('click', moverIzquierda);
  var interval = setInterval(moverDerecha, 5000);
  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(moverDerecha, 5000);
  }
  /* ----------Prallax---------- */
  // $(window).on('scroll', function () {
  //   var contacto = $('#contacto');
  //   if ($(window).scrollTop() >= contacto.offset().top - contacto.outerHeight()) {
  //     var posicion = -($(window).scrollTop() - contacto.offset().top)*0.20;
  //     contacto.css('background-position', '0 '+posicion+'px');
  //   }
  // });
  /* ------------Formulario---------- */
  var formulario = $('#formulario');
  var nombre = $('#nombre');
  var email = $('#email');
  var mensaje = $('#mensaje');
  function valNombre (e) {
    if (nombre.val() == '' || nombre.val() == null) {
      e.preventDefault();
      $('input[type="text"] + .error').css('display', 'block');
    } else {
      $('input[type="text"] + .error').css('display', 'none');
    }
  }
  function valEmail (e) {
    if (email.val() == '' || email.val() == null) {
      e.preventDefault();
      $('input[type="email"] + .error').css('display', 'block');
    } else {
      $('input[type="email"] + .error').css('display', 'none');
    }
  }
  function valMensaje (e) {
    if (mensaje.val() == '' || mensaje.val() == null) {
      e.preventDefault();
      $('textarea + .error').css('display', 'block');
    } else {
      $('textarea + .error').css('display', 'none');
    }
  }
  function validacion(e) {
    valNombre (e);
    valEmail (e);
    valMensaje (e);
  }
  formulario.on('submit', validacion);
  /* ----------Menu Mobil---------- */
  var numero = 1;
  $('#btnMenu').on('click', function (e) {
    e.preventDefault();
    if (numero == 1) {
      $('.menu-mobile .menu-principal').animate({
        left: 0
      }, 300, function () {
        numero = 0;
      });
    } else {
      $('.menu-mobile .menu-principal').animate({
        left: '-100%'
      }, 300, function () {
        numero = 1;
      });
    }
  });
  $('.menu-mobile .menu-principal a').on('click', function () {
    $('.menu-mobile .menu-principal').animate({
      left: '-100%'
    }, 300, function () {
      numero = 1;
    });
  });
});
