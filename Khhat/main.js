document.addEventListener("DOMContentLoaded", function () {
  const letter1Div = document.getElementById("letter1Div");

  const itemTitle = document.querySelector(".title");
  const getLocal = localStorage.getItem("itemTitle");

  function handleClick() {
    window.location.href = "contain.html";
  }

  letter1Div.addEventListener("click", handleClick);
  // show title on litter index page
  itemTitle.innerHTML = getLocal;
  
});
