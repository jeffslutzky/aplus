$(function(){
    $.getJSON("http://aplus.com/api/v1/sidebar_aplus_data.json?callback=?", function(data){
      var sponsored = data.trending.shift();
      sponsored.sponsor = "TGIFridays";
      $(".container").append("<div class='sponsored'><div class='smcaps'>Sponsored by " + sponsored.sponsor +"</div><p><a target='_blank' href='" + sponsored.url + "'>" + sponsored.title + "</a></p><img width='400' src='" + sponsored.thumbnail + "'</></div>")
      $.each(data.trending, function(index, item){
        $(".container").append("<p><a target='_blank' href='" + item.url + "'>" + item.title + "</a></p><img width='400' src='" + item.thumbnail + "'>")
      })
    });
})
