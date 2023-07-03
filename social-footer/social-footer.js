customElements.define(
  "social-footer",
  class extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById("social-footer-template").content;
      template.className = this.getAttribute("class");
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.cloneNode(true));
    }
    connectedCallback() {}
  }
);
