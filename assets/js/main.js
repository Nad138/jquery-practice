// $(document).ready(function() {
//   alert("Cargo jQuery");
// });

$( () => { //function(){}
  $(".popup-link").on("click", (e) => {
    e.preventDefault();
    $(".brand-popup").show();
    // alert("Click en la bandera");
  });
  // $("a:last-child").on("click", (e) => {
  //
  // })
  // const band = $("<a href="#">Banderita</a>");
  // $(".container").appendChild(band);
  $(".brand-popup .popup-close").on("click", (e)=> {
    e.preventDefault();
    $(".brand-popup").hide();
  })
});
