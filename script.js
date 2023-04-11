// 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀
const links = document.querySelectorAll("a");
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.append(highlight);

const highlightLink = function (e) {
  const linkCoords = this.getBoundingClientRect(); // get the coordinates of link
  console.log(linkCoords);

  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    left: linkCoords.left + window.scrollX,
    top: linkCoords.top + window.scrollY,
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
};

links.forEach((a) => a.addEventListener("mouseenter", highlightLink));
