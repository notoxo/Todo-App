
$(document).ready(function(){
  $("#pencilIcon").mouseenter(function() {

    $(this).css("opacity","1");

  })

  $("#pencilIcon").mouseleave(function() {

    $(this).css("opacity","0.7");

  })

  function makeBoxAppear() {

    

  }

  var flag = true;

  $("#pencilIcon").click(function() {

    var inputText = $("#todoInput").val();

    $("#todoBox").css("display","block");

    //$("#todo").text(inputText);

    if(flag == true) {

        var div = document.createElement("div");
        div.style.backgroundColor = "blue";
        div.style.position = "relative";
        div.style.width = "600px";
        div.style.height = "40px";
        div.style.margin = "30px auto";
        div.style.opacity = "0.7";
        //div.style.cssFloat = "left";

        document.getElementById("todoBox").appendChild(div);

        $("#todo").text(inputText);

    }

  })

});

