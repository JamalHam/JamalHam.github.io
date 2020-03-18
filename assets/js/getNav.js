$.get("http://jamalhmedia.com/partials/nav.html", function(data){

    $(document).ready(function(){

      $(".container").prepend(data);
        $(".container").fadeIn();
    });

    });