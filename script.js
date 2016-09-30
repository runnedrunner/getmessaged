var quantityInput = $(".element-quantity-input")

quantityInput.keydown(function(e) {
  var keyCode = e.which;
  var inputValue = quantityInput.val();

  // enter key!
  if (keyCode == 13) {	
    addElementsToThePage(inputValue);
    console.log("HI");
  }
})

function addElementsToThePage(numberOfElements) {	  
  $(".new-el").remove();
  for (var i = 0; i < numberOfElements; i++) {	
    console.log("hi");
    $(".element-display").append("<div class='new-el'>Hi there!</div>");
  }
}