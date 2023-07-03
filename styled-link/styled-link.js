customElements.define(
  "styled-link",
  class extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById("styled-link-template").content;
      template.className = this.getAttribute("class");
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.cloneNode(true));
    }
    connectedCallback() {
      const btn = this.shadowRoot.querySelector("button");
      btn.className += ` ${this.getAttribute("class")}`;
      const a = this.shadowRoot.querySelector("a");
      const span = this.shadowRoot.querySelector("span");
      a.href = this.getAttribute("href");
      span.innerText = this.innerHTML.toString().replace(/\n/, " ").trim();
    }
  }
);
