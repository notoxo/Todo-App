
$(document).ready(function(){

  $("#loading").hide();

  $("#pencilIcon").mouseenter(function() {

    $(this).css("opacity","1");

  })

  $("#pencilIcon").mouseleave(function() {

    $(this).css("opacity","0.6");

  })

  function makeBoxAppear() {

    

  }

  var flag = true;

  $("#pencilIcon").click(function() {

    var inputText = "\xa0\xa0\xa0\xa0" + $("#todoInput").val();

    $("#todoBox").css("display","block");

    if(flag == true) {

        var div = document.createElement("div");
        var img = document.createElement("img");
        img.src = "https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Close_Icon_Dark-512.png";
        img.setAttribute("id","imageR");
        document.body.appendChild(img);
        var textnode = document.createTextNode(inputText);
        div.setAttribute("id","todoBox");
        document.getElementById("todoBoxx").appendChild(div);

        div.appendChild(textnode);
        
        div.appendChild(img);

    }

    $("#imageR").click(function() {

      $("#todoBoxx").hide();

    })

  })

});

