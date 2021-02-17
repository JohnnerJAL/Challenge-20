const loveMe = document.querySelector(".love-me");
const times = document.querySelector("#times");

let timesClicked = 0;

loveMe.addEventListener("dblclick", e => {
  const x = e.clientX;
  const y = e.clientY;

  const leftElement = e.target.offsetLeft;
  const topElement =  e.target.offsetTop;

  const xInside = x - leftElement;
  const yInside = y - topElement;

  createHeart(xInside, yInside);
  timesCounter();
})

const createHeart = (insideX, insideY) => {
  const i = document.createElement("i");
  i.style.left = `${insideX}px`;
  i.style.top = `${insideY}px`;
  i.classList.add("fas", "fa-heart");

  loveMe.appendChild(i);
  
  setTimeout(() => {
    loveMe.childNodes[0].remove();
  }, 5000)
}

const timesCounter = () => {
  timesClicked++
  times.innerText = timesClicked;
}