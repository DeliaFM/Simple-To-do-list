$(document).ready(function(){
    console.log('ready!'); 

//   Exercice simple Todo List
    $('#todoButton').click (function() {
        let myInput = $('#todoInput').val();
        if (myInput.length > 0) {
            $('.items').append('<li class="itemList">' + myInput + '</li>');
            $('#todoInput').val('');

        } else {
            alert('Please add something');           
        }; 
    });

//  optional
    $('.items').click (function(evt) {
        $(evt.target).toggleClass("done");
    }); 

//  my own optional function - adding delete button for checked items
    $('#todoInput').click (function () {
        let itemsLi = $('.items li').length;
        if (itemsLi > 1) {
            $('#delBtn').show();  
            
        }else {
            $('#delBtn').hide();  
        }  
        
        $('#simpleTodo').append(`<button id='delBtn'>Delete done</button>`);
            $('#delBtn').click  (function () {
               $('li').remove('.done');
            });
    });

// Advanced todo list

let checkIcon = '<img class="check" src="check_pink_icon.svg">';
let deleteIcon = '<img class="delete" src="delete_pink_icon.svg">';


$('#advTodoButton').click (function() {
    let advInput = $('#advTodoInput').val();
    if (advInput.length > 0) {
        $('#advItems').append('<li class="advItemList">'+ advInput + " " + checkIcon + " " + deleteIcon +'</li>');
        $('#advTodoInput').val('');
    
    } else {
        alert('Please add something');           
    }; 
});

$('#advTodoItemsContainer').on('click', '.delete', function() {
    $(this).parent('li').remove();
});

$('#advTodoItemsContainer').on('click', '.check', function() {
        $(this).parent('li').toggleClass("done");
}); 

//my own optional delete all button

$('#advTodoItemsContainer').append(`<button id='deleteBtn'>Delete All</button>`); 

$('#deleteBtn').click(function () {
    $('#advItems li').remove();
});


 
}); 

/*
Exercice simple Todo List
Replicate this basic HTML file above
When clicking on the Add todo button add the content of the input field to the list
(Optional) Clicking on a list item should make the text line-through

Exercise advanced Todo List
Use fonts, colors and layout
Have a button for completing the todo
When clicking on it, change the display of the todo item (crossed over, different color, etc…)
Have a button for deleting the todo
When clicking on it, remove the whole todo item (with it's buttons)
You can use simple img tags for the icons, find cool icons at: http://iconfinder.com/ (prefer SVG-s since they are resolution independent)
Or use https://fontawesome.com
When adding a new todo, remember you have to add the buttons too. This means you have to set up the click handling there as well.
You can solve this with the help of creating id-s for the todos and the buttons like (todo-1, button-1)
But you can set up the click handling for any completing or deleting button in general
In this case you can set up handling the clicks for the container element of the todos (eg. .todos-container)
And specify what you're interested in with another selector (eg. .delete-button)
With this general approach you'll need to know which one button was clicked and inside a click handler you can tell that by using $(event.target) (where event is the input of the function):
*/