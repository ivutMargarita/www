$('.nav-button').on('click',function(e){
    e.preventDefault;
    $('.dropdown').toggleClass('dropdown_active');   
});

$('.menu-button').on('click',function(e){
    e.preventDefault;
    $('.dropdown_menu').toggleClass('dropdown_active');  
});

let info = document.getElementById('infostr');
let block = document.getElementById('heh');
window.addEventListener('scroll', function () {
    let value = window.scrollY;
    if(value < 300){
        info.style.opacity = 1 + (-0.00334448160535117*(value-1));
        block.style.opacity = 0 + (0.00334448160535117*(value-1));
    };
    if(value > 300){
        info.style.opacity = 0 + (0.00334448160535117*(value-1));
        block.style.opacity = 1 + (-0.00334448160535117*(value-1));
    };
    if(value > 300){
        info.style.opacity = 0;
        block.style.opacity = 1;
    };
});