$(document).ready(function(){
    $("#mobile-menu-btn").click(function(){
        $("#mobile-menu").slideToggle();
    });
});

var typed = new Typed("#typed", {
    strings: ['Product Designer', 'Front-End Developer', 'Video Editor'],
    typeSpeed: 80, 
    backSpeed: 50,
    loop: true        
});
