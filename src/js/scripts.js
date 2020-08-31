$(function() {
    //Init page
    init();

    //Window resize...
    $(window).resize(resize_page);

    // Scroll "animations" (changing of class ->transitions)
    $(window).scroll(function(event){
        var scrollPos = $(window).scrollTop();
        var scrollTolerance = 5;

        //if user have scrolled up
        if(scrollPos < scrollTolerance){
            //Push menu to center
            switchClasses('navbar-shrinked', 'navbar-expanded', '#nav-ul');
            switchClasses('brand-shrinked', 'brand-expanded', '#brand');

        //if user have scrolled down                 
        }else{
            //Push menu to right
            switchClasses('navbar-expanded', 'navbar-shrinked', '#nav-ul');
            switchClasses('brand-expanded', 'brand-shrinked', '#brand');
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
}

function resize_page(){
    var win_height = $(window).height();
    $("#home-div").css("height", win_height);
}