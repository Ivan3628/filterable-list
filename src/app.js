//Get input element
const filterInput = document.getElementById("filterInput");

//Add event listener
filterInput.addEventListener("keyup", () => {
  //Get value of input
  const filterValue = document
    .getElementById("filterInput")
    .value.toUpperCase();
  //console.log(filterValue);

  //Get ul
  const list = document.getElementById("names");

  //Get lis from ul
  const names = list.querySelectorAll("li.collection-item");

  //Loop through lis
  names.forEach(name => {
    let a = name.querySelector("a");

    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      name.style.display = "";
    } else {
      name.style.display = "none";
    }
  });
});
