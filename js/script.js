$(document).ready(function() {
    $(".modal-carta").hide(), $(".alergenos").hide(), $(".foto-producto").hide(), $("#pantalla-carga").delay(2e3).slideUp("slow"), "200" == $("#menu").width() && ($("main").css({
        width: "calc(100% - 200px)",
        "margin-left": "200px"
    }), $("footer").css({
        width: "calc(100% - 200px)",
        "margin-left": "200px"
    }), $(".modal-carta").css({
        width: "calc(100% - 200px)",
        "margin-left": "200px"
    })), $(".cerrar-modal").click(function() {
        $(this).parent().parent().fadeOut(), $(".alergenos").hide(), $(".foto-producto").hide()
    }), $(".ver-alergenos").click(function() {
        $(this).siblings(".alergenos").slideDown()
    }), $(".ver-foto").click(function() {
        $(this).siblings(".foto-producto").slideDown()
    }), $("#desayunos").click(function() {
        $("#modal-desayunos").fadeIn()
    }), $("#brunch").click(function() {
        $("#modal-brunch").fadeIn()
    }), $("#sweet-brunch").click(function() {
        $("#modal-sweet-brunch").fadeIn()
    }), $("#bowls").click(function() {
        $("#modal-bowls").fadeIn()
    }), $("#cafes").click(function() {
        $("#modal-cafes").fadeIn()
    }), $("#bebidas").click(function() {
        $("#modal-bebidas").fadeIn()
    }), $(window).width() <= 600 && ($("#menu").removeClass("animate__backInLeft"), $("#barra-bottom").click(function() {
        $(this).fadeOut(), $("#menu").fadeIn()
    }), $("#cierra-menu").click(function() {
        $("#menu").fadeOut(), $("#barra-bottom").fadeIn()
    })), $(".precio").click(function() {
        $(".precio > a")[0].click()
    }), $(".metodo-contacto").click(function() {
        var a = $(this).find("a").attr("href");
        window.open(a, "_blank"), console.log(a)
    }), AOS.init({
        offset: 200,
        delay: 0,
        duration: 600,
        easing: "ease",
        once: !0,
        mirror: !1,
        anchorPlacement: "top-bottom"
    })
});