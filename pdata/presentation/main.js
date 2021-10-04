function openCity(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;
  
  var contentClass, tabClass;
  
  contentClass = document.getElementById(tabName).className.split(" ")[1]


  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName(contentClass);
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}


window.onload = function () {

  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultDating").click();
  document.getElementById("defaultExploration").click();
  document.getElementById("defaultSocial").click();
  document.getElementById("defaultWaste").click();

}