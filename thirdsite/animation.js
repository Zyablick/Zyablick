$(document).ready(function() {
// alert("Careful, you will get deep into the ocean");
// alert("Are you sure you want to continue?");
// alert("Okay, we warned you...");
$("#a").draggable();
$("#fish1").draggable();
$("#fish2").draggable();
$("#fish3").draggable();
$("#fish4").draggable();
$("#fish5").draggable();
$("#fish11").draggable();
$("#fish22").draggable();
$("#fish33").draggable();
$("#fish44").draggable();
$("#fish55").draggable();

$("#fish2").click(function() {
  $("#fish1").show();
});
$("#shark1").hover(function() {
  $(this).hide();
  $("#shark2").show();
});
$("#aa").hover(function(){
  $("#aaa").css("font-size", "4vw")
});
$("#aa").click(function(){
  $("#aaa").css("color", "red")
});
$("#shark2").dblclick(function(){
  $("#shark3").show();
  $("#shark4").show();
  $("#shark5").show();
});
$("#fish1").hover(function() {
  $("#fish3").show();
});
$("#fish3").hover(function() {
  $("#fish4").show();
});
$("#fish4").hover(function() {
  $("#fish5").show();
});
$("#fish5").hover(function() {
  $("#fish11").show();
});
$("#fish11").hover(function() {
  $("#fish22").show();
});
$("#fish22").hover(function() {
  $("#fish33").show();
});
$("#fish33").hover(function() {
  $("#fish44").show();
});
$("#fish44").hover(function() {
  $("#fish55").show();
});
    })
