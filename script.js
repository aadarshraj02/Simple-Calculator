(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector(".btn-clear");
  let equal = document.querySelector(".btn-equal");

  buttons.forEach(function (button) {
    button.addEventListener("click", (e) => {
      let value = e.target.dataset.num;
      screen.value += value;
    });
  });
  equal.addEventListener("click", (e) => {
    if (screen.value === "") {
      screen.value = "";
    }else{
        let answer = eval(screen.value)
    }
  });
})();
