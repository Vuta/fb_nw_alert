$(document).ready(function() {

  var myTimer = setInterval(function() {

    swal({
      title: "Hey, get a life!",
      text: "You have been here for 5 minutes, stop scrolling",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "OK",
      cancelButtonText: "Just 5 more minutes..",
      closeOnConfirm: false,
    },

    function(){
        swal.close();
        $('#contentCol').html('');
        clearInterval(myTimer);
    });

  }, 300000);

})
