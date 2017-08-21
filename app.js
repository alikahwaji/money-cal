var budgetController = (function () {
// Code

})()

var UIController = (function () {

// Code 

})()

var controller = (function (budgetCtrl, UICtrl) {

  var ctrlAddItem = function () {
    console.log('Pressed')

  }

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem)

  document.addEventListener('keypress', function (e) {
    if (e.keyCode === 13 || e.which === 13) {
      ctrlAddItem()
    }

  })
  
})(budgetController, UIController)
