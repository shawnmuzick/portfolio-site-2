const main = document.getElementById("main");

async function getTemplate(elem, file) {
  const template = document.createElement("template");
  template.innerHTML = await (await fetch(`${file}`)).text();
  return template.content.querySelector(elem);
}

function getTemplates() {
  const customElements = [
    "card",
    "card-section",
    "code-demo",
    "demo-wave",
    "demo-progressbar",
    "demo-orb",
    "styled-link",
    "social-link",
    "styled-list-link",
    "profile-picture",
    "site-nav",
    "mobile-nav",
    "social-footer",
  ];
  customElements.forEach(async (element) => {
    //template
    const t = await getTemplate("template", `/${element}/${element}.html`);
    main.before(t);
    //javascript
    let script = document.createElement("script");
    script.src = `/${element}/${element}.js`;
    main.after(script);
  });
}

getTemplates();
