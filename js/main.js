//COMPONENTES

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

//NAVBAR

function showSidebar(){
  console.log("Sidebar should open")
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
  console.log("Sidebar should close")
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}