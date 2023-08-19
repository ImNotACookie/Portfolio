let activeIndex = 0;

function btnFun(negative) {
  let boxs = document.querySelectorAll(".box");

  boxs.forEach((box) => {
    if (box.dataset.index == activeIndex) {
      box.style.transform = `translateX(0)`;
      box.style.opacity = 1;
    } else {
      box.style.transform = `translateX(${negative}100%)`;
      box.style.opacity = 0;
    }
  });
}

function setActive() {
  activeIndex = 0;
}

function rightBtn() {
  if (activeIndex < 3) {
    activeIndex++;
    btnFun("-");
    if (activeIndex === 3) {
      document.querySelector(".right").style.color = "#fff";
    } else {
      document.querySelector(".left").style.color = "var(--main-color)";
    }
  }
}

function leftBtn() {
  if (activeIndex > 0) {
    activeIndex--;
    btnFun("");
    if (activeIndex === 0) {
      document.querySelector(".left").style.color = "#fff";
    } else if (activeIndex !== 3) {
      document.querySelector(".right").style.color = "var(--main-color)";
    }
  }
}

export { btnFun, rightBtn, leftBtn, activeIndex, setActive };
