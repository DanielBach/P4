var main = function () {
          "use strict";

          $("button").on("click", function (event) {
            var button = $(this);
            if ( button.hasClass("one")  ) 
            {$("p").text("Sam & Janet!");
              $("button").text("Sam & Janet Who?");
              $("button").removeClass("one");
            }
             else {
              $("p").text("Sam & Janet Evening!");
              $("button").hide("fast");
              $("iframe").show("slow");
             }

          });             
          
        }
    $(document).ready(main);