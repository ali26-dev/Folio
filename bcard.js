change = false;

function favorite(objeto) {
  if (!change) {
    $(objeto).text("favorite");
    $(objeto).css({ color: "yellow" });
    change = true;
  } else {
    $(objeto).text("favorite_border");
    $(objeto).css({ color: "white" });
    change = false;
  }
}

function efect() {
  $(".cardContentButton").addClass("is-active");
  $(".card_image").addClass("is-active");
  $(".cardContentButton i").addClass("is-active");
  $(".menuSocial").addClass("is-active");
  $(".menuSocialItem").addClass("is-active");
  $(".titleSocial").addClass("is-active");
}
