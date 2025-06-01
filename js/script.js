/* eslint-env jquery */

$(document).ready(function () {

    function ajustarAlturaVideo() {
        var altura = window.innerHeight;
        $('#header-index').css('height', altura + 'px');
    }

    // Ejecutar al cargar y al cambiar tamaño
    ajustarAlturaVideo();
    $(window).on('resize orientationchange', ajustarAlturaVideo);

    $(".modal-carta").hide();
    $(".foto-producto").hide();
    $("#pantalla-carga").delay(300).slideUp("slow");

    // Adaptar anchura del contenido cuando el menú para en 200 px
    if ($("#menu").width() == "200") {

        $("main").css({
            'width': 'calc(100% - 200px)',
            'margin-left': '200px'
        });

        $("footer").css({
            'width': 'calc(100% - 200px)',
            'margin-left': '200px'
        });

        $(".modal-carta").css({
            'width': 'calc(100% - 200px)',
            'margin-left': '200px'
        });


    }

    $(".cerrar-modal").click(function () {
        $(this).parent().parent().fadeOut();
        $(".foto-producto").hide();
    });

    $(".ver-foto").click(function () {
        $(this).siblings('.foto-producto').slideToggle();
        const status = $(this).find(".ver-foto-zoom-status");
        const actual = status.text().trim();

        if (actual === '+') {
            status.text('-');
            status.css('margin-top', '-3px');
        } else {
            status.text('+');
            status.css('margin-top', '0px');
        }
        });

    $("#desayunos").click(function () {
        $("#modal-desayunos").fadeIn()
    });

    $("#brunch").click(function () {
        $("#modal-brunch").fadeIn();
    });

    $("#sweet-brunch").click(function () {
        $("#modal-sweet-brunch").fadeIn();
    });

    $("#bowls").click(function () {
        $("#modal-bowls").fadeIn();
    });

    $("#cafes").click(function () {
        $("#modal-cafes").fadeIn();
    });

    $("#bebidas").click(function () {
        $("#modal-bebidas").fadeIn();
    });

    // funciones movil

    if ($(window).width() <= 600) {

        $("#menu").removeClass("animate__backInLeft");


        $("#barra-bottom").click(function () {
            $(this).fadeOut();
            $("#menu").fadeIn();
        });

        $("#cierra-menu").click(function () {
            $("#menu").fadeOut();
            $("#barra-bottom").fadeIn();
        });

    };

    $(".precio").click(function () {
        $(".precio > a")[0].click();
    });

    $(".metodo-contacto").click(function () {
        var enlace = $(this).find("a").attr('href');
        window.open(enlace,"_blank");
        console.log(enlace);
    });

    AOS.init({
        offset: 200,
        delay: 0,
        duration: 600,
        easing: 'ease',
        once: true,
        mirror: false,
        anchorPlacement: 'top-bottom',
    });

});
