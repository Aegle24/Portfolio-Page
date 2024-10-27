function myNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    $('#myLinks').slideUp(1);
    x.className += " responsive";
    $('#myLinks').slideDown();
  } else {
    $('#myLinks').slideUp();
    setTimeout(()=>{
      x.className = "topnav";
    }, 500);
  }
}