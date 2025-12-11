async function loadHeaderFooter() {
  const headerTemplate = await loadTemplate("header.html");
  const footerTemplate = await loadTemplate("footer.html");

  const headerElement = document.querySelector("#main-header");
  const footerElement = document.querySelector("#main-footer");

  renderWithTemplate(headerTemplate, headerElement);
  renderWithTemplate(footerTemplate, footerElement);
}

function getDate() {
    const year = document.querySelector("#currentyear");

    const today = new Date();
    year.innerHTML = today.getFullYear();
}

function hamDisplay() {
    const hamButton = document.querySelector("#ham-btn");
    const navBar = document.querySelector('#nav-bar');

    hamButton.addEventListener('click', () => {
        hamButton.classList.toggle('show');
        navBar.classList.toggle('show');
    });
}

export function renderWithTemplate(template, parentElement, data, callback) {
  parentElement.innerHTML = template;
  if (callback) {
    callback(data);
  }
}

export async function initHeaderFooter() {
    await loadHeaderFooter();
    hamDisplay();
    getDate();
    currentPage();
}

export async function loadTemplate(path) {
  const res = await fetch(path);
  const template = await res.text();
  return template;
}


function currentPage() {
    const links = document.querySelectorAll("header nav a");

    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        const linkHref = link.getAttribute("href");
        if (linkHref === currentPage) {
            link.classList.add("current");
        } else {
            link.classList.remove("current");
        }
    });
}
