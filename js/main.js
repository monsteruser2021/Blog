document.addEventListener("DOMContentLoaded", function () {
  const loadComponent = (id, url) => {
      fetch(url)
          .then(response => response.text())
          .then(data => {
              document.getElementById(id).innerHTML = data;
          });
  };

  loadComponent("navbar", "components/Navbar/Nav.html");
  loadComponent("hero", "/components/Home/Hero/Hero.html");
});