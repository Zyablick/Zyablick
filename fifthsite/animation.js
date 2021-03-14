$(document).ready(function() {
  $("#150d618f869ad2e61199c05182cece9f").draggable();
  $("#aa2f1412d5e00cfe9d6b7ce44924dc00").draggable();
  $("#24ee4c6bc0ac41dc6a6cc7001b6cc361").draggable();
  $("#duh").draggable();
  $("#snack").draggable();
  $("#huh").draggable();
  $("#smile").draggable();




  $("#aa2f1412d5e00cfe9d6b7ce44924dc00").hover(function(){
        $("#150d618f869ad2e61199c05182cece9f").hide();
        $("#huh").css("color", "#f37121");
        $("#huh").css("font-size", "300px");
        $("#huh").css("left", "600px");
        $("#huh").css("text-decoration", "underline");


        });
    //     $("#24ee4c6bc0ac41dc6a6cc7001b6cc361").hover(function(){
    //   $("#phrase1").show();
    // });
    $("#duh").hover(function(){
      $("#duh").css("color", "red");
      $("#duh").css("font-size", "300px");

          });
          $(".150d618f869ad2e61199c05182cece9f").hover(function(){
            $("#snack").css("transform", "rotate(60deg)");
            $("#snack").css("left", "600px");
            $("#snack").css("font-size", "200px");
            $("#snack").css("text-align", "justify");
            $("#snack").css("color", "#ff577f");
            $("#snack").css("text-shadow", "10px 20px 25px #58391c");
                });
                $("#24ee4c6bc0ac41dc6a6cc7001b6cc361").click(function(){
                  $("#smile").css("font-size", "100px");
                  $("#smile").css("left", "500px");
                  // $("#smile").css("border-color", "#ff4646");
                  $("#smile").css("border", "10px solid #ff4646");
                  // $("#smile").css("word-break", "normal");


                      });


      })
