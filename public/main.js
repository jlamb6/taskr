let posX;
let posY;
let scrollingEle;

document.querySelectorAll(".dragscroll").forEach(cur => {
  cur.addEventListener("mousedown", (event) => {
    posX = event.clientX;
    posY = event.clientY;
    scrollingEle = event.currentTarget;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  });
});

const handleMouseMove = (event) => {
  let delta = {
    x: event.clientX - posX,
    y: event.clientY - posY
  }
  posX = event.clientX;
  posY = event.clientY;
  scrollingEle.scroll(scrollingEle.scrollLeft - scrollingEle.scrollTop - delta.x, delta.y);
}

const handleMouseUp = (event) => {
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('mouseup', handleMouseUp);
  scrollingEle = null;
}
