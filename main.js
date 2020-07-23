var animatedHeadings = $('h1');
var words = animatedHeadings.data("text").split(" ");
var chars = [];
for (var i = 0; i < words.length; i++){
    chars.push(words[i].split(''));
    for (var j = 0; j < chars[i].length; j++){
        animatedHeadings.append('<span class="span_wrapper"><span class="span_inner right" data-char="' + chars[i][j] + '">' + chars[i][j] + '</span></span>');
    }
    animatedHeadings.append('<span style="margin-right: 50px">' + '  ' + '</span>');
}

var char_span = $(".span_inner");

char_span.on("mouseover", function(){
    $(this).addClass("animate").delay(2000).queue(function(next){ 
        $(this).removeClass("animate");
        next();
    });
});

if ($(window).width() > 768 ) {
    var cursor = $("#cursor");

    $(window).mousemove(function(e) {

        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        })
    });

    $(window)
        .mouseleave(function() {
            cursor.css({
                opacity: "0"
            });
        })
        .mouseenter(function() {
            cursor.css({
                opacity: "1"
            });
    });
}