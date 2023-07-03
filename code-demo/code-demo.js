customElements.define(
  "code-demo",
  class extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById("code-demo-template").content;
      template.className = this.getAttribute("class");
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.cloneNode(true));
    }
    async connectedCallback() {
      const shadowRoot = this.shadowRoot;
      let pre = shadowRoot.querySelector("code");
      pre.textContent = await this.getCode(this.getAttribute("src"));
      hljs.highlightElement(pre);
    }
    async getCode(file) {
      return await (await fetch(`${file}`)).text();
    }
  }
);
