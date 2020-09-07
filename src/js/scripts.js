$(function() {
    //remove wz add
    if($("body div")[0] != $("body #collapsible-menu")[0]){
        $("body div").eq(0).css("display", "none")
    }
    //$("textarea").text($(window).innerHeight() + " " + $(window).innerWidth());
    //Init page
    init();

    //Window resize...
    $(window).resize(resize_page);

    // Scroll "animations" (changing of class ->transitions)
    $(window).scroll(function(event){
        var scrollPos = $(window).scrollTop();
        var scrollTolerance = 200;

        if(scrollPos < scrollTolerance){
            //Push menu to center
            switchClasses('navigation-shrinked', 'navigation-expanded', '#nav-ul');
            switchClasses('logo_in_nav', 'logo_in_center', '#logo');
            $("#blurred_bg").addClass("blur");

        //if user have scrolled down                 
        }else{
            //Push menu to right
            switchClasses('navigation-expanded', 'navigation-shrinked', '#nav-ul');
            if($("#logo").hasClass("logo_in_center")){
                var top = $("#logo").offset()["top"];
                var left = $("#logo").offset()["left"];
                $("#logo").css("top", top-scrollPos);
                $("#logo").css("left", left);
            }
            switchClasses('logo_in_center', 'logo_in_nav', '#logo');
            $("#blurred_bg").removeClass("blur");
    
        }

        var animHeight = $(window).innerHeight() * (2/4);
        if((scrollPos + animHeight) > $(".slideleft_container").eq(0).offset()["top"]){
            anim = "fadeIn";
            $(".slideleft_container").eq(0).removeClass("no_visible");
            $(".slideleft_container").eq(1).removeClass("no_visible");
            
            var anim_speed = "animate__slow";
            $(".slideleft_container").eq(0).addClass("animate__animated " + anim_speed + " animate__" + anim);
            $(".slideleft_container").eq(1).addClass("animate__animated " + anim_speed + " animate__" + anim);
        }
        
        var animHeight = $(window).innerHeight();
        for(var i = 0; i < $("#thumbnails_div").children().length; i++){
            for(var j = 0; j < $("#thumbnails_div").children().eq(i).children().length; j++){
                //Animate
                if((scrollPos + animHeight) > $("#thumbnails_div").children().eq(i).children().eq(j).children().eq(0).offset()["top"]){        
                    $("#thumbnails_div").children().eq(i).children().eq(j).children().eq(0).children().eq(0).addClass("animate__animated");   
                    $("#thumbnails_div").children().eq(i).children().eq(j).children().eq(0).children().eq(0).addClass("animate__faster");
                }
                /*
                if(scrollPos > $("#thumbnails_div").children().eq(i).children().eq(j).children().eq(0).offset()["top"]){
                    //Animate
                    $("#thumbnails_div").children().eq(i).children().eq(j).children().eq(0).addClass("animate__animated");
                    $("#thumbnails_div").children().eq(i).children().eq(j).children().eq(0).addClass("animate__bounce");

                }*/
            }
            //Animate
            if((scrollPos + animHeight) > $("#thumbnails_div").children().eq(i).children().eq(0).children().eq(0).offset()["top"]){ 
                $(".img-row").eq(i).removeClass("no_visible_container")
                //$("#thumbnails_div").children().eq(i).children().eq(0).children().eq(0).addClass("animate__delay-2s");
                $("#thumbnails_div").children().eq(i).children().eq(1).children().eq(0).children().eq(0).addClass("animate__delay-2s");
                $("#thumbnails_div").children().eq(i).children().eq(2).children().eq(0).children().eq(0).addClass("animate__delay-4s");
                
                var anim = "backInLeft";
                $("#thumbnails_div").children().eq(i).children().eq(0).children().eq(0).children().eq(0).addClass("animate__" + anim);
                $("#thumbnails_div").children().eq(i).children().eq(1).children().eq(0).children().eq(0).addClass("animate__" + anim);
                $("#thumbnails_div").children().eq(i).children().eq(2).children().eq(0).children().eq(0).addClass("animate__" + anim);

            }
        }
    });
});

//Function remove one class and add another to element specified by third parameter
function switchClasses(classToRemove, classToAdd, elementSelector){
    if($(elementSelector).hasClass(classToRemove)){
        $(elementSelector).removeClass(classToRemove);
    }
    if(!$(elementSelector).hasClass(classToAdd)){
        $(elementSelector).addClass(classToAdd);
    }

}
function init(){
    resize_page();

    //init gallery
    init_gallery();

}

function resize_page(){
    var win_height = $(window).height();
    $("#home-div").css("height", win_height);
}

const PORTRAIT = 0;
const LANDSCAPE = 1;

function init_gallery(){
    var html = "";
    var divs = $("#thumbnails_div").children();
    
    for(var i = 0; i < divs.length; i++){
        console.log(divs.eq(i).children().eq(0).width() + " " + divs.eq(i).children().eq(0).height());
    }
    
    //$("#photo_gallery .article_content").html(html);
}

function getImageOrientation(width, height){
    if(width > height){
        return LANDSCAPE;
    }else{
        return PORTRAIT;
    }
}