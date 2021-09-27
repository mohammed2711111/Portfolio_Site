// Animation On Scroll

window.addEventListener(`load`,function(){
    window.addEventListener(`scroll`,function(){
        var header = document.querySelector(`header`);
        header.classList.toggle("sticky",window.scrollY > 0 );
        var lonks = document.querySelector(`ul`);
        lonks.classList.toggle("lonks-action",window.scrollY > 0 );
    })
    AOS.init();
   // Burger
const navSlide = () => {
    const burger = document.querySelector(`.burger`);
    const links = document.querySelector(`ul`);
    burger.addEventListener(`click`,()=>{
        links.classList.toggle(`nav-active`)
    })
}
navSlide();

// Burger Letter X
const menubtn=document.querySelector(`.burger`);
let menuOpen = false;

menubtn.addEventListener(`click`,()=>{
    if(!menuOpen){
        menubtn.classList.add(`open`);
        menuOpen=true;
    }else{
        menubtn.classList.remove(`open`);
        menuOpen=false;
    }
});

// Skills Animation 
var Skills={
    ht:94,
    js:80,
    cs:90,
    BS:85,
    sas:70,
    jq:83
};
$.each(Skills,  function(key,value){
    var  skillbar=$('.' + key);
    
    skillbar.animate(
    {
        width:value + "%"
    },
    3000,
    function(){
        $(".speech-bubble").fadeIn();
    }
    );
});
})





// ?===========---Scroll-To-Top---===========================-->

var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

////===========================================================================================================
////===========================================================================================================
////===========================================================================================================









