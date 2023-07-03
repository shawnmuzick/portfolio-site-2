customElements.define(
  "demo-wave",
  class extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById("demo-wave-template").content;
      template.className = this.getAttribute("class");
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.cloneNode(true));
    }
  }
);
