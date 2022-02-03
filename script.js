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


}); 

/*
Exercice simple Todo List
Replicate this basic HTML file above
When clicking on the Add todo button add the content of the input field to the list
(Optional) Clicking on a list item should make the text line-through
*/