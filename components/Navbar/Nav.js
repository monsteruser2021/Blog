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