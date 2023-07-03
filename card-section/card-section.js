customElements.define(
  "card-section",
  class extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById("card-section-template").content;
      template.className = this.getAttribute("class");
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.cloneNode(true));
    }
  }
);
