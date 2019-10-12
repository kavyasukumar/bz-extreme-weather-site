var handleToggle = function () {
  if (this.classList.contains('selected')) {
    return
  }
  this.classList.toggle('selected')
  var sibling = this.previousElementSibling || this.nextElementSibling
  sibling.classList.toggle('selected')
  var target = document.getElementById(this.dataset.target)
  for (var el of target.parentElement.children) {
    el.classList.toggle('hide')
  }
}
 var wireToggles = function () {
   for(var toggle of document.getElementsByClassName('toggle')){
      toggle.addEventListener('click',handleToggle)
   }
   // document.getElementById('newsToggle')
 }

document.addEventListener('DOMContentLoaded', function () {
  wireToggles()
})
;
