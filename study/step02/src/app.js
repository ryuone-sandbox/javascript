const $ = require('jquery');

$(function() {
  const inputElem = $('#newTodo');
  const ulElem = $('#todoList');

  $('button#addBtn').click(function(e) {
    const val = inputElem.val();
    inputElem.val('');
    ulElem.append($('<li>' + val + '</li>'));
  });

  $('ul#todoList').click(function(e){
    $(e.target).remove();
  })
});
