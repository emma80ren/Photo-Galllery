function contains(text_one, text_two) {
    if (text_one.indexOf(text_two) != -1)
        return true;

}

$("#searchText").keyup(function(){
    var searchText = $("#searchText").val().toLowerCase();
    
    $("ul li a img").each(function(){
        if (!contains($(this).attr("title").toLowerCase(), searchText) && !contains($(this).attr("alt").toLowerCase(), searchText)) {
        $(this).parent("a").parent("li").hide();
        }
        else {
        $(this).parent("a").parent("li").show();
        }
    })
    
    
})