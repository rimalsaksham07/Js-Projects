const button = document.getElementById("btn");
const img = document.getElementById("img");
console.log(img);
let flag = 0;
const btn = button.addEventListener("click", () => {
  if (img.src.includes("pic_bulboff.gif")) {
    img.src = "pic_bulbon.gif";
  } else {
    img.src = "pic_bulboff.gif";
  }
});
