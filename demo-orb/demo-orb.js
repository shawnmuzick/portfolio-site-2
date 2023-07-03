customElements.define(
  "demo-orb",
  class extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById("demo-orb-template").content;
      template.className = this.getAttribute("class");
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.cloneNode(true));
    }
    connectedCallback() {
      const canvas = this.shadowRoot.getElementById("orbs");
      const context = canvas.getContext("2d");
      let orbFillSteps = 10;
      let orbFillStep = 8;
      let opacitySteps = 58;
      let opacityStep = 0;
      let opacityTarget = opacitySteps;
      let increase = (opacity) => opacity / 100;
      let decrease = (opacity) => (100 - opacity) / 100;

      function draw(style, alpha, amount) {
        context.beginPath();
        context.arc(
          canvas.width / 2,
          canvas.height / 2,
          75,
          (1.5 + (1 - amount / orbFillSteps)) * Math.PI,
          (3.5 - (1 - amount / orbFillSteps)) * Math.PI
        );
        context.globalAlpha = alpha;
        context.fillStyle = style;
        context.fill();
      }
      function updateOpacityTarget(opacityStep) {
        //if target is 0
        if (opacityTarget == 0) {
          //we we're = or less
          if (opacityStep <= opacityTarget) {
            //flip
            opacityTarget = opacitySteps;
          }
          //if target is max
        } else if (opacityTarget == opacitySteps) {
          //if we're = or greater
          if (opacityStep >= opacityTarget) {
            //flip
            opacityTarget = 0;
          }
        }
      }

      function updateOpacity(opacityStep) {
        if (opacityTarget == 0) {
          return opacityStep - 1;
        } else if (opacityTarget == opacitySteps) {
          return opacityStep + 1;
        }
      }

      function drawOrb() {
        let opacity = 100 * (opacityStep / opacitySteps);
        if (opacityStep >= opacitySteps - 1) {
          opacity = 100;
        }
        context.clearRect(0, 0, canvas.width, canvas.height);
        draw("white", 0.5, orbFillSteps);
        draw("rgb(112, 23, 255)", decrease(opacity), orbFillStep);
        draw("rgb(73, 31, 224)", increase(opacity), orbFillStep);
        opacityStep = updateOpacity(opacityStep);
        updateOpacityTarget(opacityStep);
        window.requestAnimationFrame(drawOrb);
      }

      const keymap = {
        ArrowUp: 1,
        ArrowDown: -1,
      };

      document.addEventListener("keydown", (e) => {
        orbFillStep += keymap[e.key];
      });
      window.onload = requestAnimationFrame(drawOrb);
    }
  }
);
