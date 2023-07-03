customElements.define(
  "social-link",
  class extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById("social-link-template").content;
      template.className = this.getAttribute("class");
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.cloneNode(true));
    }
    connectedCallback() {
      const a = this.shadowRoot.querySelector("a");
      a.href = this.getAttribute("href");
      a.innerText = this.innerHTML.toString().replace(/\n/, " ").trim();
      a.title = this.getAttribute("title");
      a.target = "blank";

      //the icon
      const icon = document.createElement("img");
      icon.src = this.getAttribute("src");
      icon.alt = this.getAttribute("alt");
      a.appendChild(icon);
    }
  }
);
