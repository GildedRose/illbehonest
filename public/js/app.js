$(document).foundation()
// more click
$('.card-profile-stats-more-link').click(function(e){
    e.preventDefault();
    if ( $(".card-profile-stats-more-content").is(':hidden') ) {
      $('.card-profile-stats-more-link').find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
    } else {
      $('.card-profile-stats-more-link').find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
    }
    $(this).next('.card-profile-stats-more-content').slideToggle();
  });
  
  // Collapsible
  var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}