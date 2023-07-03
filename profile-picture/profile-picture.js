customElements.define(
  "profile-picture",
  class extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById("profile-picture-template").content;
      template.className = this.getAttribute("class");
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.cloneNode(true));
    }
  }
);
