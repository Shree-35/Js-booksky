//selecting popupoverlay popup and button

var popupoverlay=document.querySelector(".popupoverlay")
var popup=document.querySelector(".popup")
var addpopup=document.getElementById("addpopup")

addpopup.addEventListener("click",function(){
  popupoverlay.style.display="block"
  popup.style.display="block"
})

// selecting cancel button

var cancelbook=document.getElementById("cancelbook")

cancelbook.addEventListener("click",function(event){
  event.preventDefault()
  popupoverlay.style.display="none"
  popup.style.display="none"
})

//selecting container,addbook
var container=document.querySelector(".container")
var addbook=document.getElementById("addbook")
var booktitleinput=document.getElementById("booktitleinput")
var bookauthorinput=document.getElementById("bookauthorinput")
var bookdescriptiont=document.getElementById("bookdescription")


addbook.addEventListener("click",function(event){
  event.preventDefault()

  var div=document.createElement("div")
  div.setAttribute("class","book-container")
  div.innerHTML=`<h2>${booktitleinput.value}</h2>
  <h4>${bookauthorinput.value}</h4>
  <p>${bookdescription.value}</p>
  <button onclick="cancel(event)">Close</button>`
 container.append(div)
  popupoverlay.style.display="none"
  popup.style.display="none"
})
function cancel(event){
  event.target.parentElement.remove()

}