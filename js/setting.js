var $cards = $('.card');var $bigcards = $('.bigcard');
var $options = $('#menu>ul>li');

$cards.on('click',function(e){
    if($bigcards.eq($(this).index()).css('display')=="block"){
        $bigcards.eq($(this).index()).css('display','none');
    }else{
    $bigcards.css('display','none');
    $bigcards.eq($(this).index()).css('display','block');
    }
});

window.addEventListener('scroll',function(){
    var background = document.getElementById('background');
     topButton = document.getElementById('Top');
    var hidden_nav = document.getElementById('hidden_background');

    if(window.scrollY>background.scrollHeight){
        topButton.style.display = "block";
        hidden_nav.style.left = "0";
        hidden_nav.style.top = "0";
        hidden_nav.style.animation = "h_nav_start 2s";
        hidden_nav.style.animationFillMode = "forwards";
    }else{
        topButton.style.display = "none";
        hidden_nav.style.animation = "h_nav_end 2s";
        hidden_nav.style.animationFillMode = "forwards";
    }
})

$options.on('click',function(){
    var obj = $(this).attr("name");
    console.log($("#"+obj).prop('clientHeight'));;
});

$('#m_menu_box').css('height',$('#m_menu_box').css('width'));