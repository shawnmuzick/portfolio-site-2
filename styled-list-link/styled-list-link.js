customElements.define(
  "styled-list-link",
  class extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById("styled-list-link-template").content;
      template.className = this.getAttribute("class");
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.cloneNode(true));
    }
    connectedCallback() {
      const a = this.shadowRoot.querySelector("a");
      a.href = this.getAttribute("href");
      a.innerText = this.innerHTML.toString().replace(/\n/, " ").trim();
    }
  }
);
