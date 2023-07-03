customElements.define(
  "info-card",
  class extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById("info-card-template").content;
      template.className = this.getAttribute("class");
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.cloneNode(true));
    }
  }
);
