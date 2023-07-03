customElements.define(
  "demo-progressbar",
  class extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById("demo-progressbar-template").content;
      template.className = this.getAttribute("class");
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.cloneNode(true));
    }
    connectedCallback() {
      const progress = this.shadowRoot.getElementById("progress");
      const percent = this.shadowRoot.getElementById("percent");
      let i = 1;
      setInterval(() => {
        if (progress.value === 100) {
          i = -1;
        } else if (progress.value === 0) {
          i = 1;
        }
        progress.value += i;
        progress.setAttribute("data-count", progress.value);
        percent.innerText = `${progress.value}%`;
      }, 50);
    }
  }
);
