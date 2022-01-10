var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');
var newItem = $('input[id="shopping-input"]');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`

function formSubmit(event) {
    event.preventDefault();
    var newLI = $("<li>")
    newLI.text(newItem.val());
    shoppingListEl.append(newLI);

    $('#shopping-input').val('')
}


// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on("submit", formSubmit);