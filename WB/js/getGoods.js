const getGoods = () => {
  const links = document.querySelectorAll(".navigation-link");

  const getData = () => {
    fetch("https://test-wb-6970d-default-rtdb.firebaseio.com/db.json")
      .then((res) => res.json())
      .then((data) => {
        // Save the received data to localStorage under the key 'goods'
        localStorage.setItem("goods", JSON.stringify(data));
        console.log(data);
      });
  };

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      getData();
    });
  });
};

getGoods();
