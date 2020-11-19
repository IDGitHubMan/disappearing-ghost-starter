$(".hide-button").click(function(){
  $(".ghost-image").hide();
});

$(".show-button").click(function(){
  $(".ghost-image").show();
});

$(".update-img-button").click(function(){
  $(".ghost-image").show();
});

$(".message-button").click(function(){
   var str = $(".input").val();
  $(".message").append("<p>"+str+"<p>");
});

$(".name-button").click(function(){
  $(".ghost-image").show();
});