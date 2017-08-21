var budgetController = (function () {
  var x = 23

  var add = function (a) {
    return x + a
  }
  return {
    publicTest: function (b) {
      return add(b)
    }
  }
})()

var UIController = (function () {

// Code 

})()

var controller = (function (budgetCtrl, UICtrl) {

  var rus = budgetCtrl.publicTest(5)

  return {
    secondPubilc: function () {
      console.log(rus)
    }
  }
})(budgetController, UIController)
