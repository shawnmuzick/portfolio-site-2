import { orbs } from "./orbs/orbs.min.js";
import { skeleton } from "./skeleton/skeleton.min.js";
import { progress } from "./progressBar/progressBar.min.js";
import { wave } from "./wave/wave.min.js";
import { buildCodeNode } from "/js/buildCodeNode.min.js";
const main = document.getElementById("demos");

function buildComponent(code, id, captionText) {
  const component = document.createElement("div");
  component.classList.add("component");
  component.classList.add("flex");
  component.classList.add("bg-dark");
  component.classList.add("border-black");
  component.classList.add("card");

  const componentContainer = document.createElement("div");
  componentContainer.classList.add("componentContainer");
  componentContainer.id = id;

  const pre = document.createElement("pre");
  buildCodeNode(pre, code);
  pre.classList.add("code");
  componentContainer.appendChild(pre);
  component.appendChild(componentContainer);

  const caption = document.createElement("p");
  caption.classList.add("componentCaption");
  caption.innerText = captionText;

  component.appendChild(caption);
  main.appendChild(component);

  eval(code);
}
buildComponent(orbs, "orbs", "Use the up/down arrow keys to interact");
buildComponent(progress, "progress", "");
buildComponent(skeleton, "skeleton", "Move the skeleton using arrow keys");
buildComponent(wave, "wave", "An animation of a wave washing over the screen");
//disable arrow key navigation
document.addEventListener("keydown", (e) => {
  if (e.key.includes("Arrow")) {
    e.preventDefault();
  }
});
