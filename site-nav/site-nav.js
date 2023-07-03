class Navbar extends HTMLElement {
  constructor() {
    super();
    const template = document.getElementById("site-nav-template").content;
    template.className = this.getAttribute("class");
    //the style
    const style = document.createElement("link");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("href", "/site-nav/style.css");

    const text = document.createElement("link");
    text.setAttribute("rel", "stylesheet");
    text.setAttribute("href", "/css-type.css");
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(text);
    shadowRoot.appendChild(style);
    shadowRoot.appendChild(template.cloneNode(true));
  }
  connectedCallback() {}
}

customElements.define("site-nav", Navbar);
