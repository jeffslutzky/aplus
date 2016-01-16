$(function(){
    $.getJSON("http://aplus.com/api/v1/sidebar_aplus_data.json?callback=?", function(data){
      $.each(data.trending, function(index, item){
        $("ul").append("<li><a target='_blank' href='" + item.url + "'>" + item.title + "</a></li>")
        $("ul").append("<img width='400' src='" + item.thumbnail + "'</>")
      })
    });
})
