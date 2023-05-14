openCity("London")
    function openCity(cityName) {
        var i;
        var x = document.getElementsByClassName("city");
        for (i = 0; i < x.length; i++) {
           x[i].style.display = "none";  
        }
        document.getElementById(cityName).style.display = "block";  
    }
    /*$(document).ready(function() {             
    $('#loginModal').modal('show');
      $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })
    });
    $(document).ready(function() {             
    $('#signupModal').modal('show');
      $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })
    });*/
    $(document).on("click","#login",function(){
      $('#loginModal').modal('show');
      $('#signupModal').modal('hide');
    });
    $(document).on("click","#signup",function(){
      $('#loginModal').modal('hide');
      //$('#signupModal').modal('show');
    });

    function showFilters(){
      $(".filter").toggle();
      console.log("test");
    }
    
  function login(e){
    console.log("test");
    e.preventDefault();
  }

  function signup(e){
    console.log(e.data);
    e.preventDefault();
  }