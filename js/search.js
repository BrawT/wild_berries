const search = function () {
  const input = document.querySelector(".search-block > input");
  const searchBtn = document.querySelector(".search-block > button");

  // Listen for a click event on the button
  searchBtn.addEventListener("click", () => {
    // Log the current input value to the console
    console.log(input.value);
  });
};

search();
