class MobileNav extends HTMLElement {
  constructor() {
    super();
    const template = document.getElementById("mobile-nav-template").content;
    template.className = this.getAttribute("class");
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.cloneNode(true));
  }
  connectedCallback() {
    const shadowRoot = this.shadowRoot;
    let btn = shadowRoot.querySelector("button");
    let links = shadowRoot.querySelector("div.link-container");
    btn.addEventListener("click", () => {
      if (links.classList.contains("show")) {
        links.classList.remove("show");
      } else {
        links.classList.add("show");
      }
    });
  }
}

customElements.define("mobile-nav", MobileNav);
